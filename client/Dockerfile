# set base image
FROM node:12.9.1-alpine as builder

# create project dir
RUN mkdir -p /usr/src/app

# select working dir
WORKDIR /usr/src/app

# copy package.json and lock
COPY package*.json /usr/src/app/

# set production flag so dev dependencies aren't installed
RUN npm install --production=true

# copy rest of the files
COPY ./ /usr/src/app

# build the production build
RUN npm run build

# start and nginx container
FROM nginx

# set our custom nginx.conf in the container
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

# copy the react build from the build container
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# set permissions so nginx can serve it
RUN chown nginx.nginx /usr/share/nginx/html/ -R

# which port we expose
EXPOSE 80