import React from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, MoreHorizontal, Activity, Syringe, Utensils, Info, 
  Stethoscope, Phone, Calendar, Clock, Image as ImageIcon 
} from 'lucide-react';
import { useRouter } from 'next/router';
import ActionPill from '../../components/ActionPill';

export default function PetDetailsScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-brand-purple pb-10 font-sans">
      
      {/* Container Fluido preenchendo toda a tela */}
      <div className="w-full px-8 lg:px-16 xl:px-24">
        
        {/* Header Transparente */}
        <header className="py-6 mb-4 flex justify-between items-center relative z-20">
          <div className="flex items-center gap-4">
            <button onClick={() => router.back()} className="p-3 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-6 h-6 text-brand-dark" />
            </button>
            <h1 className="text-2xl font-bold text-brand-dark">Detalhes do Pet</h1>
          </div>
          <button className="p-3 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
            <MoreHorizontal className="w-6 h-6 text-brand-dark" />
          </button>
        </header>

        {/* Layout em Grid (2 Colunas Fluidas no Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 pt-4">
          
          {/* COLUNA ESQUERDA: Perfil do Pet */}
          <aside className="col-span-1 bg-white rounded-[2.5rem] p-8 xl:p-10 shadow-sm flex flex-col items-center h-fit">
            
            {/* Foto do Pet */}
            <div className="w-56 h-56 rounded-full overflow-hidden border-8 border-brand-purple shadow-md mb-8">
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Oscar" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Título */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-brand-dark">Oscar</h2>
              <p className="text-brand-gray text-base flex items-center justify-center gap-1 mt-2 font-medium">
                Gato SRD • Macho
              </p>
            </div>

            {/* Atributos empilhados para a barra lateral */}
            <div className="w-full space-y-4">
              <div className="bg-gray-50 p-5 rounded-2xl flex justify-between items-center border border-gray-100">
                <span className="text-base text-brand-gray font-medium">Idade</span>
                <span className="font-bold text-lg text-brand-dark">3 Anos</span>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl flex justify-between items-center border border-gray-100">
                <span className="text-base text-brand-gray font-medium">Peso</span>
                <span className="font-bold text-lg text-brand-dark">3.2 kg</span>
              </div>
              <div className="bg-brand-purple/30 p-5 rounded-2xl flex justify-between items-center border border-brand-purpleDark/20">
                <span className="text-base text-brand-gray font-medium">Status</span>
                <span className="font-bold text-lg text-green-600 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div> Vacinado
                </span>
              </div>
            </div>

            {/* NOVO: Contato Rápido do Veterinário */}
            <div className="w-full mt-8 bg-orange-50 p-5 rounded-2xl border border-orange-100/50">
              <h4 className="font-bold text-brand-dark flex items-center gap-2 mb-3">
                <Stethoscope size={18} className="text-brand-orange" /> Vet Responsável
              </h4>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-sm text-brand-dark">Dr. Carlos Eduardo</p>
                  <p className="text-xs text-brand-gray">Clínica VetCare</p>
                </div>
                <button className="p-2.5 bg-white rounded-full text-brand-orange hover:bg-brand-orange hover:text-white transition-colors shadow-sm">
                  <Phone size={16} />
                </button>
              </div>
            </div>

          </aside>

          {/* COLUNA DIREITA: Ações e Informações */}
          <main className="col-span-2 space-y-8">
            
            {/* Bloco de Módulos de Saúde (Com o bug do arredondamento corrigido!) */}
            <div className="bg-white rounded-[2.5rem] p-8 xl:p-10 shadow-sm">
              <h3 className="font-bold text-brand-dark text-xl mb-8 border-b border-gray-100 pb-4">
                Controle de Saúde
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Link href="/dieta">
                  <div className="h-full rounded-2xl border-2 border-transparent hover:border-brand-orange transition-all shadow-sm hover:shadow-md overflow-hidden cursor-pointer">
                    <ActionPill icon={<Utensils size={28} />} label="Dieta e Peso" />
                  </div>
                </Link>
                <Link href="/vacinas">
                  <div className="h-full rounded-2xl border-2 border-transparent hover:border-brand-orange transition-all shadow-sm hover:shadow-md overflow-hidden cursor-pointer">
                    <ActionPill icon={<Syringe size={28} />} label="Carteira de Vacinas" />
                  </div>
                </Link>
                <Link href="/humor">
                  <div className="h-full rounded-2xl border-2 border-transparent hover:border-brand-orange transition-all shadow-sm hover:shadow-md overflow-hidden cursor-pointer">
                    <ActionPill icon={<Activity size={28} />} label="Humor e Atividade" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Grid Dividido: Lembretes e Sobre */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* NOVO: Lembretes Próximos */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-sm">
                <h3 className="font-bold text-brand-dark text-xl mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                  <Calendar className="w-6 h-6 text-brand-orange" /> Próximos Eventos
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <div className="bg-white p-3 rounded-xl shadow-sm text-center min-w-[3.5rem]">
                      <span className="block text-xs font-bold text-brand-orange">JUN</span>
                      <span className="block text-lg font-extrabold text-brand-dark">18</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-sm">Banho & Tosa</h4>
                      <p className="text-xs text-brand-gray flex items-center gap-1 mt-1">
                        <Clock size={12} /> 14:00 - PetShop Amigo
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bloco Sobre */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-sm">
                <h3 className="font-bold text-brand-dark text-xl mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                  <Info className="w-6 h-6 text-brand-orange" /> Sobre o Pet
                </h3>
                <p className="text-brand-gray leading-relaxed text-sm font-medium">
                  Oscar é um gatinho muito dócil e brincalhão. Ele adora sachê de salmão e tem o costume de dormir na janela durante a tarde. Precisa de acompanhamento constante com hidratação, pois tem histórico de beber pouca água.
                </p>
              </div>

            </div>

            {/* NOVO: Galeria de Fotos */}
            <div className="bg-white rounded-[2.5rem] p-8 xl:p-10 shadow-sm">
              <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                <h3 className="font-bold text-brand-dark text-xl flex items-center gap-3">
                  <ImageIcon className="w-6 h-6 text-brand-orange" /> Últimas Fotos
                </h3>
                <button className="text-sm font-bold text-brand-orange hover:underline">Ver todas</button>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Oscar dormindo" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Oscar brincando" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Oscar curioso" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors border-2 border-dashed border-gray-200">
                  <span className="text-brand-gray font-semibold text-sm">+ Adicionar</span>
                </div>
              </div>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}