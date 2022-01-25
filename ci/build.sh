#!/bin/bash

THIS_VERSION_HASH=$(git rev-parse --short HEAD)

: ${EXCLUDE:=}
EXCLUDE=(${EXCLUDE[@]} .git .gitignore .gitlab-ci.yml vendor ci test)
FILES=$(comm -2 -3 <(ls -A1) <(printf '%s\n' "${EXCLUDE[@]}" | sort -u) | grep -v $THIS_VERSION_HASH.tar.bz2)

tar jcf $THIS_VERSION_HASH.tar.bz2 ${FILES[@]}