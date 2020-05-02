# set base image
FROM node:12.9.1-alpine as builder

# create project dir
RUN mkdir -p /app/server

# select working dir
WORKDIR /app/server

# copy package.json and lock
COPY package*.json /app/server/

#! install the build requirements for bcrypt
RUN apk update && apk upgrade \
    && apk --no-cache add --virtual builds-deps build-base python \
    && yarn add node-gyp node-pre-gyp

# set production flag so dev dependencies aren't installed
RUN npm install --production=true

# copy the server files over
COPY ./ /app/server/

# set base image
FROM node:12.9.1-alpine

# create and set the working directory
RUN mkdir -p /app/server
WORKDIR /app/server

# Copy the server from the build container
COPY --from=builder /app/server /app/server

CMD ["node", "server.js"]