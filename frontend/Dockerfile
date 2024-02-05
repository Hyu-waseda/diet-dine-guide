FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

# 非ルートユーザーを作成
RUN adduser -D -u 1001 appuser

# 非ルートユーザーとしてコンテナを実行
USER appuser

# CMD ["yarn", "start"]
CMD ["yarn", "dev"]