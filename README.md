# BolsaConsulta
Descrição:
Este projeto consiste em um aplicativo web desenvolvido em React para consulta de dados do programa Bolsa Família, utilizando o portal da transparência. O objetivo principal é fornecer informações sobre o valor do benefício e o número de beneficiários com base no estado, município, ano e mês selecionados pelo usuário.

Tecnologias Utilizadas:

Frontend:
* React: Uma biblioteca JavaScript de código aberto para construir interfaces de usuário.
* Tailwind CSS: Uma estrutura de design utilitário que facilita a criação de designs personalizados.
Backend:
* Node.js: Um ambiente de tempo de execução JavaScript que permite executar código JavaScript do lado do servidor.
* Prisma: Uma ferramenta ORM (Object-Relational Mapping) para Node.js e TypeScript, que facilita o acesso ao banco de dados e a manipulação dos dados.

Como Executar Localmente:

1- Altere as configurações do banco de dados no arquivo .env localizado na pasta prisma em BolsaConsultaServer.
2- Execute o comando "npx prisma migrate dev --name bolsa-consulta" para aplicar as migrações necessárias ao banco de dados.
3- Inicie o servidor executando o comando node src/server na pasta BolsaConsultaServer.
4- Inicie o cliente React executando o comando npm start na pasta BolsaConsultaCliente.
Ambos o servidor e o cliente estão no mesmo repositório e são nomeados BolsaConsultaServer e BolsaConsultaCliente, respectivamente.
