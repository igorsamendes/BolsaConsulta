// salvarLogs.js
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
    await axios.post('http://localhost:3000/api/logs', dadosJson, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error("Erro ao salvar log:", error);
  }
};

export default salvarLog;
