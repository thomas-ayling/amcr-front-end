#Base Image node:12.18.4-alpine
FROM node:16.18.1-alpine3.16
#Add workdir
WORKDIR /app
#Copy package.json in the image
COPY package.json ./
COPY package-lock.json ./
COPY build/ ./
#Run npm install command
RUN npm install
#Copy the app
COPY . .
EXPOSE 3000
#Start the app
CMD ["npm", "run", "serve"]