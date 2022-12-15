#Base Image node:12.18.4-alpine
FROM node:16.18.1-alpine3.16
#Copy package.json in the image
COPY ["package.json", "package-lock.json*", "./"]
#Run npm install command
RUN npm install
#Copy the app
COPY . .
EXPOSE 3000
#Start the app
CMD ["npm", "start"]