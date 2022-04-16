FROM node

WORKDIR /user/saldo-api
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3331

CMD ["npm","run","dev"]