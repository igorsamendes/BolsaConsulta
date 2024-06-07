// Termina a construção do array que contem os dados de log e faz a chamada da rota de salvamento dos dados em banco

import axios from 'axios';
const salvarLog = async (dadosConsulta) => {
  try {
    const response = await axios.get('https://api64.ipify.org?format=json');
    const ipAddress = response.data.ip;

    const dadosCompletos = {
      ip: ipAddress,
      ...dadosConsulta
    };
    const api = axios.create({
      baseURL: 'https://bolsa-consulta-server.vercel.app/api',
    })
    const dadosJson = JSON.stringify(dadosCompletos);
    const resposta = await api.post('/logs', dadosJson, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(resposta.data);
  } catch (error) {
    console.error("Erro ao salvar log:", error);
  }
};

export default salvarLog;
