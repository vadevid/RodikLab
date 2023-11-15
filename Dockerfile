FROM node:latest

WORKDIR /app

COPY package.json main.js ./

RUN npm i

EXPOSE 3000

CMD["node", "main.js"]