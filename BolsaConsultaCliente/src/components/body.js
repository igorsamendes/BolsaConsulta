//Componente reposnsável por contrução do formulário e gerenciamento de consultas e metodos

import React, { useState, useEffect } from "react";
import { getEstados } from "../api/estados.js";
import { getMunicipios } from "../api/municipios.js";
import { getConsulta } from "../api/consulta.js";
import Modal from "./modal";
import salvarLog from "../salvarLog.js";


export const Body = () => {
    const [estados, setEstados] = useState([]);
    const [municipios, setMunicipios] = useState([]);
    const [selectedEstado, setSelectedEstado] = useState("");
    const [selectedMunicipio, setSelectedMunicipio] = useState("");
    const [consultaData, setConsultaData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState("");

    // Chama metodo responsável pela busca dos estados e constroi o array de estados
    useEffect(() => {
        const fetchEstadosData = async () => {
            try {
                const estadosData = await getEstados();
                estadosData.sort((a, b) => a.nome.localeCompare(b.nome));
                setEstados(estadosData);
            } catch (error) {
                console.error("Erro ao carregar estados:", error);
            }
        };

        fetchEstadosData();
    }, []);

    // Lida com a alteração do select de estados para que quando houver mudandanças reconstrua o select de municipios de acordo com o estado selacionado
    const mudancaEstado = async (event) => {
        const estadoId = event.target.value;
        setSelectedEstado(estadoId);
        if (estadoId) {
            try {
                const municipiosData = await getMunicipios(estadoId);
                setMunicipios(municipiosData);
                setSelectedMunicipio("");
            } catch (error) {
                console.error("Erro ao carregar municípios:", error);
            }
        } else {
            setMunicipios([]);
            setSelectedMunicipio("");
        }
    };

    const mudancaMunicipio = (event) => {
        setSelectedMunicipio(event.target.value);
    };

    // Lida com o submit do formulário chamando o metodo da consulta e em seguida o modal de exibição dos dados
    const processarEnvio = async (event) => {
        event.preventDefault();
        const mesId = event.target.month.value;
        const anoId = event.target.year.value;
        const municipioId = event.target.municipio.value;

        if (!selectedEstado || !selectedMunicipio) {
            setError("Por favor, selecione um estado e um município.");
            return;
        }

        setError("");

        try {
            const consultaResult = await getConsulta(anoId, mesId, municipioId);
            setConsultaData(consultaResult);
            if (consultaResult && consultaResult.length > 0) {
                const logData = {
                    ano: anoId,
                    mes: mesId,
                    municipio: consultaResult[0].municipio['nomeIBGE'],
                    valor: consultaResult[0].valor,
                    qtd_beneficiados: consultaResult[0].quantidadeBeneficiados
                };

                // Chamar a função salvarLog com o array criado
                salvarLog(logData);
            }

            openModal();

        } catch (error) {
            console.error("Erro ao consultar dados:", error);
        }
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // corpo do aplicativo
    return (
        <div className="flex items-center justify-center h-screen altura bg-body">
            <div className="container max-w-2xl p-6 rounded-lg shadow-shadow-dark bg-blue-550">
                <form onSubmit={processarEnvio}>

                    <div className="space-y-12">

                        {showModal && (
                            <Modal consultaData={consultaData} closeModal={closeModal} />
                        )}

                        <div className="">
                            <h2 className="text-xl font-semibold leading-7 text-gray-900  text-center">Faça Já Sua Consulta</h2>
                            <p className="mt-1 font-medium leading-6 text-gray-700 text-center">Foneça aqui as informações necessárias para sua consulta.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1 border-l-4r border-transparent pl-4">

                                <div className="col-span-full flex justify-between items-center">
                                    <label htmlFor="estado" className="w-1/2 block text-base font-sans leading-6 text-gray-900">
                                        Estado:
                                    </label>
                                    <div className="mt-2 w-1/2">
                                        <select
                                            id="estado"
                                            name="estado"
                                            autoComplete="estado-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            onChange={mudancaEstado}
                                            value={selectedEstado}
                                        >
                                            <option value="">Selecione um estado</option>
                                            {estados.map((estado) => (
                                                <option key={estado.id} value={estado.id}>
                                                    {`${estado.nome} (${estado.sigla})`}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full flex justify-between items-center">
                                    <label htmlFor="municipio" className="w-1/2 block text-sm font-medium leading-6 text-gray-700">
                                        Município:
                                    </label>
                                    <div className="mt-2 w-1/2">
                                        <select
                                            id="municipio"
                                            name="municipio"
                                            autoComplete="municipio-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            value={selectedMunicipio}
                                            onChange={mudancaMunicipio}
                                        >
                                            <option value="">Selecione um município</option>
                                            {municipios.map((municipio) => (
                                                <option key={municipio.id} value={municipio.id}>
                                                    {municipio.nome}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full flex justify-between items-center">
                                    <label htmlFor="month" className="w-1/2 block text-sm font-medium leading-6 text-gray-700">
                                        Mês:
                                    </label>
                                    <div className="mt-2 w-1/2">
                                        <select
                                            id="month"
                                            name="month"
                                            autoComplete="month"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <option value="01">Janeiro</option>
                                            <option value="02">Fevereiro</option>
                                            <option value="03">Março</option>
                                            <option value="04">Abril</option>
                                            <option value="05">Maio</option>
                                            <option value="06">Junho</option>
                                            <option value="07">Julho</option>
                                            <option value="08">Agosto</option>
                                            <option value="09">Setembro</option>
                                            <option value="10">Outubro</option>
                                            <option value="11">Novembro</option>
                                            <option value="12">Dezembro</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full flex justify-between items-center">
                                    <label htmlFor="year" className="w-1/2 block text-sm font-medium leading-6 text-gray-700">
                                        Ano:
                                    </label>
                                    <div className="mt-2 w-1/2">
                                        <select
                                            id="year"
                                            name="year"
                                            autoComplete="year"
                                            className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            {Array.from({ length: 21 }, (v, i) => i + 2004).map(year => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    {error && (
                        <div className="mt-4 text-red-600 text-center">{error}</div>
                    )}

                    <div className="mt-6 flex items-center justify-center gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-500 px-16 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Consultar
                        </button>
                    </div>

                </form>
            </div>
        </div>

    );
};