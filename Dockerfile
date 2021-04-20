FROM node:10-alpine

RUN mkdir -p /var/www/node_modules && chown -R node:node /var/www

WORKDIR /var/www

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

RUN npm run build

CMD ["node", "./dist/server.js"]
#RUN npm run start:prod

# FROM nginx:mainline-alpine
# COPY ./nginx.conf /etc/nginx/nginx.conf

# Заменяем дефолтную страницу nginx соответствующей веб-приложению
#RUN rm -rf /usr/share/nginx/html/
#COPY . /usr/share/nginx/html

#COPY ./nginx.conf /etc/nginx/nginx.conf

#ENTRYPOINT ["nginx", "-g", "daemon off;"]