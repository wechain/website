FROM node:10.11.0-alpine

ENV APP_ROOT /src

# Create app directory
RUN mkdir -p ${APP_ROOT}
WORKDIR ${APP_ROOT}

# Install app dependencies
RUN apk update && apk upgrade && apk add git

ONBUILD COPY . ${APP_ROOT}
ONBUILD RUN npm install

# Build app
ONBUILD RUN npm run build

ENV HOST 0.0.0.0
# EXPOSE 3000

# start command
# CMD [ "npm", "start" ]
