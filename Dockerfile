# * The Build environment
FROM node:lts-alpine as build

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./
RUN npm ci

# add app
COPY . ./
# build prod code
RUN npm run build

# * The Production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Allows for React router to used with nginx
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]