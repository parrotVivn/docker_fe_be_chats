FROM node:16.18.0
WORKDIR /app
COPY . .
RUN npm install
RUN npm update
EXPOSE 8080
CMD [ "npm", "start" ]
