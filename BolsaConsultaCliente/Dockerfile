# BolsaConsultaCliente/Dockerfile
# Use a imagem base do Node.js
FROM node:14-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código do cliente
COPY . .

# Defina a variável de ambiente para a porta
ENV PORT=3001

# Exponha a porta 3001
EXPOSE 3001

# Comando para iniciar o cliente
CMD ["npm", "start"]