// Consulta à API do IBGE que retona os dados dos estados brasileiros

const API_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
export const getEstados = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erro ao carregar estados');
    }
    const estados = await response.json();
    return estados;
  } catch (error) {
    console.error('Erro ao obter estados:', error);
    return [];
  }
};