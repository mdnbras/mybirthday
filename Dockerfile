#FROM node:20-alpine AS build
#WORKDIR /dist/src/app
#RUN npm cache clean --force
#COPY . .
#RUN npm install
#RUN npm run build --prod


### STAGE 2:RUN ###
FROM nginx:latest AS ngi
#COPY --from=build /dist/src/app/dist/wfm-web /usr/share/nginx/html
COPY /dist/aniversario-anna/browser /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
