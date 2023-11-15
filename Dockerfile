FROM node:latest

COPY package.json .

RUN npm i

COPY main.js .

EXPOSE 3000

CMD node main.js