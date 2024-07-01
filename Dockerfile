FROM node:20-slim

# Instalação git
RUN apt-get -y update
RUN apt-get -y install git

WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm install

ENTRYPOINT ["npm", "start", "--", "--port", "3000"]
