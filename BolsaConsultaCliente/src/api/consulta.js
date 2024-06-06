// Consulta à API que retona os dados do Bolsa Familia referente aos campos selecionados

export const getConsulta = async (anoId, mesId, municipioId) => {
  const API_URL = 'https://api.portaldatransparencia.gov.br/api-de-dados/bolsa-familia-por-municipio';
  const headers = {
    'chave-api-dados': '5671576fb1d57810fde385377ab2283c'
  };

  try {
    const response = await fetch(`${API_URL}?mesAno=${anoId}${mesId}&codigoIbge=${municipioId}`, {
      method: 'GET',
      headers: headers
    });
    if (!response.ok) {
      throw new Error('Erro ao consultar valor');
    }
    const consulta = await response.json();
    return consulta;
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    return [];
  }
};