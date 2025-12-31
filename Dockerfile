FROM node:lts

WORKDIR /authentication

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# CMD ["bin/sh"]