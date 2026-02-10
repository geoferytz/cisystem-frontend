#!/bin/bash
set -e

# ==========================================
# ANGULAR FRONTEND CI/CD DEPLOYMENT
# ==========================================

IMAGE_NAME="geofrey2025/cisystem-frontend"
VERSION_FILE=".frontend-version"

PEM_PATH="$HOME/.ssh/timerz.pem"
AWS_USER="ubuntu"
AWS_HOST="ec2-16-170-25-198.eu-north-1.compute.amazonaws.com"
COMPOSE_DIR="~/deployment"

DOCKERHUB_USERNAME="geofrey2025"
DOCKERHUB_PASSWORD="Timerz@2026"

echo "=========================================="
echo "[*] Angular Frontend Deployment Started"
echo "=========================================="

# -------------------------
# VERSION INCREMENT
# -------------------------
if [ ! -f "$VERSION_FILE" ]; then
    echo "1.0.0" > "$VERSION_FILE"
fi

VERSION=$(cat "$VERSION_FILE")
IFS='.' read -r -a PARTS <<< "$VERSION"
PARTS[2]=$((PARTS[2] + 1))
NEW_VERSION="${PARTS[0]}.${PARTS[1]}.${PARTS[2]}"
echo "$NEW_VERSION" > "$VERSION_FILE"

echo "[*] New version: $NEW_VERSION"

# -------------------------
# BUILD ANGULAR
# -------------------------
echo "[*] Installing dependencies..."
npm install

echo "[*] Building Angular production..."
npm run build -- --configuration production
echo "[+] Angular build complete"

# -------------------------
# DOCKER LOGIN
# -------------------------
echo "[*] Docker login..."
echo "$DOCKERHUB_PASSWORD" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin

# -------------------------
# BUILD IMAGE
# -------------------------
TAG_VERSION="${IMAGE_NAME}:${NEW_VERSION}"
TAG_CURRENT="${IMAGE_NAME}:current"

echo "[*] Building Docker image..."
docker build --no-cache -t "$TAG_VERSION" .
docker tag "$TAG_VERSION" "$TAG_CURRENT"

# -------------------------
# PUSH
# -------------------------
echo "[*] Pushing to Docker Hub..."
docker push "$TAG_VERSION"
docker push "$TAG_CURRENT"

# -------------------------
# ENV FILE
# -------------------------
ENV_FILE=".env.frontend"
echo "FRONTEND_VERSION=$NEW_VERSION" > "$ENV_FILE"

# -------------------------
# COPY TO AWS
# -------------------------
echo "[*] Copying version to server..."
scp -i "$PEM_PATH" "$ENV_FILE" "${AWS_USER}@${AWS_HOST}:${COMPOSE_DIR}/.env.frontend"

# -------------------------
# REMOTE DEPLOY
# -------------------------
echo "[*] Deploying on EC2..."

ssh -i "$PEM_PATH" -o StrictHostKeyChecking=no "${AWS_USER}@${AWS_HOST}" << ENDSSH
set -e
cd ~/deployment

echo "[*] Pulling new image..."
sudo docker compose --env-file .env --env-file .env.frontend pull frontend

echo "[*] Restarting container..."
sudo docker compose --env-file .env --env-file .env.frontend up -d --no-deps --force-recreate frontend

echo "[+] Deployment successful!"
sudo docker ps
ENDSSH

echo ""
echo "=========================================="
echo "[+] DEPLOYMENT COMPLETE"
echo "[+] Version: $NEW_VERSION"
echo "=========================================="
