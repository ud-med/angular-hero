FROM node:10.15.0-alpine as builder

RUN apk update && apk add --no-cache make git

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json /app
# RUN cd /app && npm --force cache clean && npm install
RUN npm install

# Copy project files into the docker image
COPY . /app

# generate the /dist folder that will used in the STEP-2
RUN npm run build-image
