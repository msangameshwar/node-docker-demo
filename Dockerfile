FROM node:16

WORKDIR /app

COPY package.json /app

RUN npm install 

COPY . /app

EXPOSE 3001

CMD ["node","index.js"]
