FROM node:20-alpine

WORKDIR /app

COPY package.json /app


# build the app
RUN npm install

COPY . /app

EXPOSE 3000

CMD ["npm", "run","dev"]

