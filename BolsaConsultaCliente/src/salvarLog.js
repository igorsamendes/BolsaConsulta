// Termina a construção do array que contem os dados de log e faz a chamada da rota de salvamento dos dados em banco

const salvarLog = async (dadosConsulta) => {
  try {
    const response = await fetch('https://api64.ipify.org/?format=json');
    const data = await response.json();
    const ipAddress = data.ip;

    const dadosCompletos = {
      ip: ipAddress,
      ...dadosConsulta
    };
    const result = await fetch('https://bolsa-consulta-server.vercel.app/api/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosCompletos),
    });

    if (!result.ok) {
      throw new Error('Erro ao salvar log');
    }

    const responseData = await result.json();
    console.log('Log salvo com sucesso:', responseData);
  } catch (error) {
    console.error("Erro ao salvar log:", error);
  }
};

export default salvarLog;
