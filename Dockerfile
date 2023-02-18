FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

# inclui as dependências do driver do PostgreSQL
RUN yarn add pg
# inclui o dockerize para aguardar a inicialização do banco de dados
RUN curl -L https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz | tar -C /usr/local/bin -xzv

CMD ["dockerize", "-wait", "tcp://db:5432", "yarn", "start"]