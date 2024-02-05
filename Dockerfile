FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

# CMD ["yarn", "start"]
CMD ["yarn", "dev"]