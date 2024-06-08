<h1 align="center"> Bolsa Consulta </h1>


# Descrição do projeto

Este projeto consiste em um aplicativo web desenvolvido em React para consulta de dados do programa Bolsa Família, utilizando o portal da transparência como fonte. O objetivo principal é fornecer informações sobre o valor do benefício e o número de beneficiários com base no estado, município, ano e mês selecionados pelo usuário.

# :hammer: Tecnologias Utilizadas



## Frontend

- `React`: Uma biblioteca JavaScript de código aberto para construir interfaces de usuário.
- `Tailwind CSS`: Uma estrutura de design utilitário que facilita a criação de designs personalizados.

## Backend

- `Node.js`: Um ambiente de tempo de execução JavaScript que permite executar código JavaScript do lado do servidor.
- `Prisma`: Uma ferramenta ORM (Object-Relational Mapping) para Node.js e TypeScript, que facilita o acesso ao banco de dados e a manipulação dos dados.


# 📁 Acesso ao projeto

O acesso aos arquivos é feito pelo endereço: [Bolsa Consulta](https://github.com/igorsamendes/BolsaConsulta).

# 🛠️ Abrir e rodar o projeto

Para rodar o projeto, primeiramente você deve instalar o git, fazer o clone do projeto na sua máquina, instalar o Node.js e configurar o projeto. Abaixo está o passo a passo de como fazer todos os itens citados anteriormente.

#  Como baixar o git na sua máquina

Acesse o link abaixo e terá acesso ao download do git para os sistemas Windows, Linux e MacOs:

```
https://www.git-scm.com/downloads
```

# Como fazer o clone do projeto para a sua máquina

Abra o terminal do git em uma pasta onde você deseja salvar os arquivos do projeto. Abaixo está o comando necessário para clonar o projeto.

Comando para clonar o projeto
```
git clone https://github.com/igorsamendes/BolsaConsulta.git
```

Comando para entrar na pasta do projeto
```
cd BolsaConsulta
```

Após rodar esse comando, você estará com o projeto na sua máquina.

# Como instalar o Node.js

Acesse o link abaixo para fazer a instalação do Node.js nos sistemas operacionais Windows, Linux ou MacOs

Link da ferramenta
```
https://nodejs.org/en/download/prebuilt-installer
```

# Como instalar as dependencias do projeto React

Navegue até a pasta BolsaConsultaCliente e execute o comando abaixo para instalar as dependências do projeto React.

```
npm install
```

# Como instalar as dependencias do servidor Node.js

Navegue até a pasta BolsaConsultaServer e execute o comando abaixo para instalar as dependências do servidor Node.js.

```
npm install
```

# Como configurar o projeto para executar localmente

1- Crie um arquivo .env para adicionar as configurações do seu banco de dados local na pasta prisma no diretório BolsaConsultaServer utilizando como base o exemplo abaixo. Certifique-se de ter um servidor local de banco de dados disponível.

```
DATABASE_URL=mysql://root:senha@localhost:3306/NomeDoBanco
```
2- Crie um arquivo .env para adicionar as configurações da porta que será executado o projeto react, no diretório BolsaConsultaCliente utilizando como base o exemplo abaixo.

```
PORT=3001
```

3- Altere as configurações específicas do domínio remoto no arquivo server.js, localizado na pasta src no diretório BolsaConsultaServer para que seja utilizado o trecho que precede o comentário "Execução local" no lugar do que esta sendo utilizado.

4- Altere as configurações específicas do domínio remoto no arquivo salvarLog.js, localizado na pasta src no diretório BolsaConsultaCliente para que seja utilizado o link abaixo na constante result.

```
http://localhost:3000/api/logs
```

5- Navegue até a pasta BolsaConsultaServer e execute o comando abaixo para aplicar as migrações necessárias ao banco de dados.

```
npx prisma migrate dev --name bolsa-consulta
```

6- Inicie o servidor executando o comando abaixo na pasta BolsaConsultaServer.

```
node src/server
```

7- Inicie o cliente React executando o comando abaixo na pasta BolsaConsultaCliente.

```
npm start
```

# Desenvolvedor

[<img src="https://avatars.githubusercontent.com/u/43549254?v=4" width=100 title="Igor Mendes">](https://github.com/igorsamendes)
