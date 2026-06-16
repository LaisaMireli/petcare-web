import React from 'react';
import Link from 'next/link';
import { ChevronLeft, MoreHorizontal, Activity, Syringe, Utensils, Info } from 'lucide-react';
import { useRouter } from 'next/router';
import ActionPill from '../../components/ActionPill';

export default function PetDetailsScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-brand-purple pb-10">
      
      {/* Container principal expandido para Desktop */}
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header Transparente */}
        <header className="p-6 flex justify-between items-center relative z-20">
          <div className="flex items-center gap-4">
            <button onClick={() => router.back()} className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-5 h-5 text-brand-dark" />
            </button>
            <h1 className="text-xl font-bold text-brand-dark">Detalhes do Pet</h1>
          </div>
          <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
            <MoreHorizontal className="w-5 h-5 text-brand-dark" />
          </button>
        </header>

        {/* Layout em Grid (2 Colunas no Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pt-4">
          
          {/* COLUNA ESQUERDA: Perfil do Pet */}
          <aside className="col-span-1 bg-white rounded-[2.5rem] p-8 shadow-sm flex flex-col items-center h-fit">
            
            {/* Foto do Pet */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-brand-purple shadow-md mb-6">
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Oscar" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Título */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-brand-dark">Oscar</h2>
              <p className="text-brand-gray text-sm flex items-center justify-center gap-1 mt-1">
                Gato SRD • Macho
              </p>
            </div>

            {/* Atributos empilhados para a barra lateral */}
            <div className="w-full space-y-3">
              <div className="bg-gray-50 p-4 rounded-2xl flex justify-between items-center border border-gray-100">
                <span className="text-sm text-brand-gray">Idade</span>
                <span className="font-bold text-brand-dark">3 Anos</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl flex justify-between items-center border border-gray-100">
                <span className="text-sm text-brand-gray">Peso</span>
                <span className="font-bold text-brand-dark">3.2 kg</span>
              </div>
              <div className="bg-brand-purple/30 p-4 rounded-2xl flex justify-between items-center border border-brand-purpleDark/20">
                <span className="text-sm text-brand-gray">Status</span>
                <span className="font-bold text-green-600 flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div> Vacinado
                </span>
              </div>
            </div>
          </aside>

          {/* COLUNA DIREITA: Ações e Informações */}
          <main className="col-span-2 space-y-8">
            
            {/* Bloco de Módulos de Saúde */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="font-bold text-brand-dark text-lg mb-6 border-b border-gray-100 pb-4">
                Controle de Saúde
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link href="/dieta">
                  <div className="h-full border border-transparent hover:border-brand-orange transition-colors rounded-2xl">
                    <ActionPill icon={<Utensils size={24} />} label="Dieta e Peso" />
                  </div>
                </Link>
                <Link href="/vacinas">
                  <div className="h-full border border-transparent hover:border-brand-orange transition-colors rounded-2xl">
                    <ActionPill icon={<Syringe size={24} />} label="Carteira de Vacinas" />
                  </div>
                </Link>
                <Link href="/humor">
                  <div className="h-full border border-transparent hover:border-brand-orange transition-colors rounded-2xl">
                    <ActionPill icon={<Activity size={24} />} label="Humor e Atividade" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Bloco Sobre */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="font-bold text-brand-dark text-lg mb-4 flex items-center gap-2 border-b border-gray-100 pb-4">
                <Info className="w-5 h-5 text-brand-orange" /> Sobre o Pet
              </h3>
              <p className="text-brand-gray leading-relaxed text-lg">
                Oscar é um gatinho muito dócil e brincalhão. Ele adora sachê de salmão e tem o costume de dormir na janela durante a tarde. Precisa de acompanhamento constante com hidratação, pois tem histórico de beber pouca água no bebedouro comum.
              </p>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}