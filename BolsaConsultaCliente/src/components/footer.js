import React, { useState } from 'react';

export const Footer = () => {
  const [aceitou, setAceitou] = useState(false);

  const handleClickAceitar = () => {
    setAceitou(true);
    // Aqui você pode adicionar a lógica para prosseguir com o teste após o usuário aceitar
  };

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-blue-550 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-blue-550 from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-blue-550 from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div className="flex items-center gap-x-4 gap-y-2">
        {!aceitou && (
          <div className="flex gap-x-8">
            <p className="text-sm leading-6 text-gray-900">Aviso de Privacidade: Esta consulta está coletando seu endereço IP apenas para fins de registro e análise. Seu endereço IP não será compartilhado com terceiros.</p>
            <button className="rounded-full bg-indigo-500 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-500" onClick={handleClickAceitar}>Aceitar</button>
          </div>
        )}
      </div>
      <div className="flex flex-1 justify-end">
      </div>
    </div>
  )
}
