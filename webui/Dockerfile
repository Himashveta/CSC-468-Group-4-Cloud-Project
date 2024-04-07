FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY index.html /usr/share/nginx/html/index.html
COPY diary.html /usr/share/nginx/html/diary.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
