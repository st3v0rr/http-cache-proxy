FROM node:14-buster

WORKDIR /opt/http-cache-proxy

COPY package*.json ./
COPY src ./src

RUN npm install

EXPOSE 8080
CMD ["npm", "run", "start"]
