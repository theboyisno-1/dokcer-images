FROM alpine:3.13.6

LABEL Author: "khan019950@gmail.com"

ARG terraform_version=1.0.7

WORKDIR /home/terraform

RUN apk add --no-cache --upgrade git

RUN wget -O terraform.zip https://releases.hashicorp.com/terraform/${terraform_version}/terraform_${terraform_version}_linux_amd64.zip \
    && unzip terraform.zip \
    && rm -rf terraform.zip \
    && mv terraform /usr/local/bin \
    && rm -rf /tmp/*

RUN adduser -h /home/terraform -s /bin/sh -D terraform sudo

USER terraform