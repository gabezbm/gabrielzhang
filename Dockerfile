FROM node:21

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "80"]