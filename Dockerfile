FROM node:16.11

COPY package.json /app/package.json

WORKDIR /app

RUN yarn install

COPY . /app

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=80

EXPOSE 80

CMD [ "bash", "-c", "yarn dev" ]
