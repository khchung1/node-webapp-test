FROM node:22-alpine AS base

WORKDIR /my-app
COPY . .
RUN npm install
EXPOSE 3000

CMD ["node", "test/test.js"]

FROM base AS test
RUN npm test
