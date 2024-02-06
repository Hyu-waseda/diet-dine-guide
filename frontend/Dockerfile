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

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1