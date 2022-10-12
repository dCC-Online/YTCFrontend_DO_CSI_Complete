# * The Build environment
# We will use node as the base for our frontend build
FROM node:lts-alpine as build

# Setup a working directory
WORKDIR /app

# Ensures that docker can "find" the node binary
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Add the application files
COPY . ./
# Build prod code
RUN npm run build

# * The Production environment
# We will use NGINX as the base for our production environment
FROM nginx:stable-alpine as prod

# Take all the files from the build environment and 
# copy them to the production environment
COPY --from=build /app/build /usr/share/nginx/html

# Exposing port 80 (Default port for AWS)
EXPOSE 80

#The command to start our NGINX server
CMD ["nginx", "-g", "daemon off;"]