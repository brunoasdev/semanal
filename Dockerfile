FROM node:14-alpine3.16 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.23.4-alpine AS prod-stage
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 9999
CMD [ "nginx","-g","daemon off;" ]