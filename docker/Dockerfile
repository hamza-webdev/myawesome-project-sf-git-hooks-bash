FROM ubuntu:16.04
# add metadata 
LABEL version="1.0.0"
# to turn off the questions asked for location and timezone
ARG DEBIAN_FRONTEND=noninteractive
# update repository and install apache2 web server
RUN apt-get update -y && \
    apt-get install apache2 apache2-utils curl -y && \
    apt-get clean 
# copy index.html file to /var/www/html
COPY index.html /var/www/html
# expose on port 80
EXPOSE 80
# start the apache service as soon as container is created
CMD ["apachectl","-D","FOREGROUND"]