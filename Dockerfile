## Config
# Node base-image
FROM node:18.13.0-slim as build

# Set the working dir to /app inside the container.
WORKDIR /app

# Copy the app files.  This assumes a .dockerignore file is present to filter out the irrelavant, otherwise you can make it more specfic.
COPY . .

## Build
# Install the dependencies, ensuring the versions in the lockfile are used.  Build the app.
RUN npm ci && npm run build


## Package
# nginx base image
FROM nginx:1.23.3

# Will require extra config for CORS.
# There is also a config template mechanism supported for containers to allow the use of env variables.
# See https://github.com/docker-library/docs/tree/master/nginx#using-environment-variables-in-nginx-configuration-new-in-119 .
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/templates/*.template /etc/nginx/templates/

# Nginx's default web root.
WORKDIR /usr/share/nginx/html

# Remove default nginx static resources
RUN rm -rf ./*

# Copies the built app from build stage.
COPY --from=build /app/build .

EXPOSE 3000

## Run - inherits from base.
