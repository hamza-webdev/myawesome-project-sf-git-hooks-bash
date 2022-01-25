# Build from the root of thr repository like 
# docker build -f docker/dev/Dockerfile -t glassminnow/php-app-dev
# and run : docker run -P -e CONNECTION_STRING=YOURCONNECTION_STRING -v $(pwd):/app:rw --name glassminow-dev/php-app-dev

FROM php:7.4-apache

COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/local/bin

RUN install-php-extentisions gd mysqli pdo pdo-mysql xdebug 

COPY docker/dev/xdebug.ini /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

RUN a2enmod rewrite 

VOLUME /src

ENV APACHE_DOCUMENT_ROOT /src/public

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf 
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf 

