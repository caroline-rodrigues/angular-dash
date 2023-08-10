FROM node:14.20-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
