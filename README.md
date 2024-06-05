# BolsaConsulta
Descrição:<br>
Este projeto consiste em um aplicativo web desenvolvido em React para consulta de dados do programa Bolsa Família, utilizando o portal da transparência. O objetivo principal é fornecer informações sobre o valor do benefício e o número de beneficiários com base no estado, município, ano e mês selecionados pelo usuário.

Tecnologias Utilizadas:

Frontend:
* React: Uma biblioteca JavaScript de código aberto para construir interfaces de usuário.
* Tailwind CSS: Uma estrutura de design utilitário que facilita a criação de designs personalizados.

Backend:
* Node.js: Um ambiente de tempo de execução JavaScript que permite executar código JavaScript do lado do servidor.
* Prisma: Uma ferramenta ORM (Object-Relational Mapping) para Node.js e TypeScript, que facilita o acesso ao banco de dados e a manipulação dos dados.

Como Executar Localmente:

1- Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo e instalá-lo a partir do site oficial (https://nodejs.org/en).<br>
2- Clone este repositório Git em seu ambiente local.<br>
3- Navegue até a pasta BolsaConsultaCliente e execute o comando "npm install" para instalar as dependências do projeto React.<br>
4- Navegue até a pasta BolsaConsultaServer e execute o comando "npm install" para instalar as dependências do servidor Node.js.<br>
5- Altere as configurações do banco de dados no arquivo .env localizado na pasta prisma.<br>
6- Execute o comando "npx prisma migrate dev --name bolsa-consulta" para aplicar as migrações necessárias ao banco de dados.<br>
7- Inicie o servidor executando o comando "node src/server" na pasta BolsaConsultaServer.<br>
8- Inicie o cliente React executando o comando "npm start" na pasta BolsaConsultaCliente.<br>

Ambos o servidor e o cliente estão no mesmo repositório e são nomeados BolsaConsultaServer e BolsaConsultaCliente, respectivamente.
