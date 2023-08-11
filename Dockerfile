FROM node:14.20-alpine
WORKDIR /app
RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install

COPY . .

RUN ng build