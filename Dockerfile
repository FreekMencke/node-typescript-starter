FROM node:18-alpine as builder
WORKDIR /usr/src/app/
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run lint
RUN npm run build:ci

FROM node:18-alpine
WORKDIR /usr/app/
COPY --from=builder /usr/src/app/dist/ ./
CMD [ "node", "node-typescript-starter.js" ]
