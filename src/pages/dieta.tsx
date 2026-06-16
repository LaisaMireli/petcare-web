import React from 'react';
import { ChevronLeft, Utensils, Scale, Info } from 'lucide-react';
import { useRouter } from 'next/router';

export default function DietScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-brand-purple pb-10">
      <header className="p-6 flex items-center gap-4">
        <button onClick={() => router.back()} className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
          <ChevronLeft className="w-5 h-5 text-brand-dark" />
        </button>
        <h1 className="text-xl font-bold text-brand-dark">Dieta e Peso</h1>
      </header>

      <main className="p-6 pt-0 space-y-6">
        {/* Card de Refeição Diária */}
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-brand-orange/20 p-3 rounded-xl text-brand-orange">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-brand-dark">Porção Diária</h2>
              <p className="text-sm text-brand-gray">Ração Premium Gatos</p>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-2xl flex justify-between items-center border border-gray-100">
            <span className="font-semibold text-brand-dark">Recomendado:</span>
            <span className="text-brand-orange font-bold text-lg">60g / dia</span>
          </div>
        </div>

        {/* Histórico de Peso (Mock de Gráfico com Tailwind) */}
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-brand-purpleDark" />
              <h2 className="font-bold text-brand-dark">Histórico de Peso</h2>
            </div>
            <span className="text-sm font-bold text-brand-dark bg-brand-purple px-3 py-1 rounded-full">3.2 kg</span>
          </div>
          
          <div className="flex items-end justify-between h-32 gap-2 pt-4 border-b border-gray-100 pb-2">
            {/* Barras do Gráfico */}
            <div className="w-full bg-brand-purpleDark rounded-t-md h-[60%] relative group cursor-pointer"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-brand-gray hidden group-hover:block">2.8</span></div>
            <div className="w-full bg-brand-purpleDark rounded-t-md h-[70%] relative group cursor-pointer"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-brand-gray hidden group-hover:block">2.9</span></div>
            <div className="w-full bg-brand-purpleDark rounded-t-md h-[65%] relative group cursor-pointer"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-brand-gray hidden group-hover:block">2.8</span></div>
            <div className="w-full bg-brand-purpleDark rounded-t-md h-[80%] relative group cursor-pointer"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-brand-gray hidden group-hover:block">3.0</span></div>
            <div className="w-full bg-brand-orange rounded-t-md h-[95%] relative group cursor-pointer shadow-[0_0_10px_rgba(255,127,80,0.4)]"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-brand-orange">3.2</span></div>
          </div>
          <div className="flex justify-between text-xs text-brand-gray mt-2 px-1">
            <span>Fev</span>
            <span>Mar</span>
            <span>Abr</span>
            <span>Mai</span>
            <span className="font-bold text-brand-orange">Jun</span>
          </div>
        </div>
      </main>
    </div>
  );
}