FROM node:14.2.0-alpine3.10 AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run client-install
RUN npm run build --prefix client
RUN rm -rf client/node_modules client/package.json client/package-lock.json client/public client/src

FROM node:14.2.0-alpine3.10
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .
EXPOSE 5000
CMD ["node", "server.js"]