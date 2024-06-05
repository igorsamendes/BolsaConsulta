const API_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

export const getMunicipios = async (estadoId) => {
  try {
    const response = await fetch(`${API_URL}/${estadoId}/municipios`);
    if (!response.ok) {
      throw new Error('Erro ao carregar municípios');
    }
    const municipios = await response.json();
    return municipios;
  } catch (error) {
    console.error('Erro ao obter municípios:', error);
    return [];
  }
};