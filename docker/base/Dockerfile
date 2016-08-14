FROM mhart/alpine-node:4

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install img dependencies from: https://pkgs.alpinelinux.org/packages
RUN apk update
RUN apk add jq

# Install app dependencies
COPY package.json /usr/src/app/
RUN jq -r '.dependencies|to_entries[] | .key + "@" + .value' \
  < package.json \
  | xargs npm install

# Add installed binaries to env
ENV PATH /app/node_modules/.bin:$PATH

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD ["npm", "start"]
