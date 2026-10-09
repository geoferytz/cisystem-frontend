# FROM nginx:alpine

# RUN rm -rf /usr/share/nginx/html/*

# COPY dist/frontend/browser /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]



FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist/my-naboo/browser \
    /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
<<<<<<< HEAD

CMD ["nginx", "-g", "daemon off;"]
=======
CMD ["nginx", "-g", "daemon off;"]



>>>>>>> 809626543b9803ce0908b778cf47fdadd9764dcf
