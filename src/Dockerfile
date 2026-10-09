# Stage 1: Build Angular app
FROM node:20 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build -- --configuration production  --aot=false

# Stage 2: Serve with Nginx
FROM nginx:alpine

#COPY --from=builder /app/dist/nowschool /usr/share/nginx/html
COPY --from=builder /app/dist/cisystem/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
