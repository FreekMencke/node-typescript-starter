FROM node:18-alpine as builder
WORKDIR /usr/src/app/
COPY . .
RUN npm ci
RUN npm run lint
RUN npm run build:prod

FROM node:18-alpine
WORKDIR /usr/app/
COPY --from=builder /usr/src/app/dist/ ./
CMD [ "node", "node-typescript-starter.js" ]
