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

    const dadosJson = JSON.stringify(dadosCompletos);
    const resposta = await axios.post('https://bolsa-consulta-server.vercel.app/api/logs', dadosJson, {
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
