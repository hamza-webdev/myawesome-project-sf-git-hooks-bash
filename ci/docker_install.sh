#!/bin/bash

#we need to install dependencies only for docker
[[ ! -e /.dockerenv ]] && exit 0

set -xe

# Install git (the php php image does nt have it) which is required by composer
# Also ensure that pcr heads are availables: they seem ti have disapeared
# 
apt-get update -yqq
apt-get install git zlib1g-dev libpcre3-dev -yqq
# Install mysql driver
docker-php-ext-install pdo-mysql
docker-php-ext-install zip