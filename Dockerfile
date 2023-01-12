## Config
# Node base-image
FROM node:18.13-slim as build
# Set the working dir to /app inside the container.
WORKDIR /app
# Copy the app files.  This assumes a .dockerignore file is present to filter out the irrelavant, otherwise you can make it more specfic.
COPY . .
## Build
# Install the dependencies, ensuring the versions in the lockfile are used.  Build the app.
RUN npm ci && npm run build
## Package
FROM node:18.13-slim
WORKDIR /app
# Copies the built app from build stage.
COPY --from=build /app/build .
## Run
# Set the env to production.
ENV NODE_ENV=production
# Expose the listening port of the app.
EXPOSE 3000
# Start the app
CMD [ "npx", "serve", "." ]