# Use a imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Exponha a porta 3000 (padrão do Next.js)
EXPOSE 3000

# Comando padrão para rodar o Next.js em modo desenvolvimento
CMD ["npm", "run", "dev"]
