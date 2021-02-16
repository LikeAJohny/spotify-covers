FROM node:alpine

COPY . /app
WORKDIR /app

RUN yarn install

EXPOSE 7331

CMD ["node", "index.js"]
