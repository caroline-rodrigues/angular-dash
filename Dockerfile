FROM node:14.20-alpine AS build
WORKDIR /app
RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install

COPY . .

RUN ng build --prod

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
