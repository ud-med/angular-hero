FROM nginx:alpine

LABEL author="med2bouanane" 

# Copy custom nginx config
#COPY ./.docker/nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80 443
#ENTRYPOINT ["nginx", "-g", "daemon off;"]

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]