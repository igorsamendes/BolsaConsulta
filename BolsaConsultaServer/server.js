// server.js
const express = require('express');
const cors = require('cors'); // Import the cors package
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

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
