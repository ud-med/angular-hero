# MULTI STAGE BUILDS
# https://docs.docker.com/develop/develop-images/multistage-build/#before-multi-stage-builds

# ******************** [ STEP-1 ] build static website *********************
FROM node:10.15.0-alpine as builder

RUN apk update && apk add --no-cache make git

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json /app/
# RUN cd /app && npm --force cache clean && npm install
RUN npm install @angular/cli -g
RUN npm install

# Copy project files into the docker image
COPY . /app

# generate the /dist folder that will used in the STEP-2
RUN npm run build-image

# ************ [ STEP-2 ] build a small nginx image with static website ****************
FROM nginx:alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder'=STAGE_1 copy website to default nginx public folder
COPY dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]