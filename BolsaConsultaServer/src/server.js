// Arquivo de criação do server e gerenciamento de dados de envio

const express = require('express');
const cors = require('cors'); // Import the cors package
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(express.json());

app.post('/api/logs', async (req, res) => {
    const dados = req.body;

    try {
        await prisma.log_consulta.create({
            data: {
                data_hora: new Date(),
                ip: dados.ip,
                ano: dados.ano,
                mes: dados.mes,
                municipio: dados.municipio,
                valor: dados.valor,
                qtd_beneficiados: dados.qtd_beneficiados
            }
        });
        res.status(201).json({ message: "Dados inseridos com sucesso!" });
    } catch (error) {
        console.error("Erro ao inserir dados:", error);
        res.status(500).json({ error: "Erro ao inserir dados" });
    } finally {
        await prisma.$disconnect();
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
