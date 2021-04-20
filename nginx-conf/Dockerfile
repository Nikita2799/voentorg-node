FROM nginx
COPY ./default.conf /etc/nginx/nginx.conf
#RUN npm run build /var/www
ENTRYPOINT ["nginx", "-g", "daemon off;"]
