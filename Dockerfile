# Node base-image
## Config
FROM node:18.12.1
# Set the working dir to /app inside the container.
WORKDIR /app
# Copy the app files.  This assumes a .dockerignore file is present to filter out the irrelavant, otherwise you can make it more spefic.
COPY . .
## Build
# Install the dependencies, ensuring the versions in the lockfile are used.
RUN npm ci
# Build the app
RUN npm run build
## Run
# Set the env to production.
ENV NODE_ENV=production
# Expose the listening port of the app.
EXPOSE 3000
# Start the app
CMD [ "npx", "serve", "build" ]