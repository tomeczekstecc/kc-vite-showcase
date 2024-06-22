FROM node:20-alpine

WORKDIR /app

COPY package.json /app


# build the app
RUN npm install

COPY . /app

RUN npm build

CMD ["npm", "start"]

