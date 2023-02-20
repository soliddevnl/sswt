FROM node:lts-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN npx prisma generate
RUN yarn build

ENV NODE_PATH=dist
EXPOSE 8000
CMD [ "yarn", "start" ]