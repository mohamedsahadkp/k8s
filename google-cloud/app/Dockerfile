FROM node:8-alpine

RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN apk update && apk upgrade && \
 apk add --no-cache bash git openssh
RUN npm install
EXPOSE 8080
CMD node ./app.js
