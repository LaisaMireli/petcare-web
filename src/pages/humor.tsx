import React, { useState } from 'react';
import { ChevronLeft, Activity, Heart, Bed, Zap } from 'lucide-react';
import { useRouter } from 'next/router';

export default function MoodScreen() {
  const router = useRouter();
  const [selectedMood, setSelectedMood] = useState<string | null>('animado');

  return (
    <div className="min-h-screen bg-brand-purple pb-10">
      <header className="p-6 flex items-center gap-4">
        <button onClick={() => router.back()} className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
          <ChevronLeft className="w-5 h-5 text-brand-dark" />
        </button>
        <h1 className="text-xl font-bold text-brand-dark">Humor e Atividade</h1>
      </header>

      <main className="p-6 pt-0 space-y-6">
        
        {/* Registro de Hoje */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm">
          <h2 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-brand-orange" /> Como o Oscar está hoje?
          </h2>
          
          <div className="grid grid-cols-3 gap-3">
            <button 
              onClick={() => setSelectedMood('animado')}
              className={`p-4 rounded-2xl flex flex-col items-center gap-2 border-2 transition-all ${selectedMood === 'animado' ? 'border-brand-orange bg-brand-orange/5 text-brand-orange' : 'border-gray-100 text-brand-gray hover:border-gray-200'}`}
            >
              <Zap className="w-8 h-8" />
              <span className="text-xs font-bold">Animado</span>
            </button>

            <button 
              onClick={() => setSelectedMood('calmo')}
              className={`p-4 rounded-2xl flex flex-col items-center gap-2 border-2 transition-all ${selectedMood === 'calmo' ? 'border-brand-purpleDark bg-brand-purple text-brand-purpleDark' : 'border-gray-100 text-brand-gray hover:border-gray-200'}`}
            >
              <Heart className="w-8 h-8" />
              <span className="text-xs font-bold">Calmo</span>
            </button>

            <button 
              onClick={() => setSelectedMood('dorminhoco')}
              className={`p-4 rounded-2xl flex flex-col items-center gap-2 border-2 transition-all ${selectedMood === 'dorminhoco' ? 'border-brand-dark bg-gray-100 text-brand-dark' : 'border-gray-100 text-brand-gray hover:border-gray-200'}`}
            >
              <Bed className="w-8 h-8" />
              <span className="text-xs font-bold">Preguiça</span>
            </button>
          </div>
          
          <button className="w-full bg-brand-dark text-white font-semibold py-3 rounded-xl mt-6 hover:bg-gray-800 transition-colors">
            Salvar Registro
          </button>
        </div>

        {/* Histórico Recente */}
        <div className="bg-white/50 p-6 rounded-[2rem]">
          <h3 className="font-bold text-brand-dark mb-4">Últimos Dias</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-transparent hover:border-brand-purple transition-colors">
              <span className="font-medium text-brand-dark">Ontem</span>
              <span className="flex items-center gap-2 text-sm text-brand-purpleDark font-bold bg-brand-purple px-3 py-1 rounded-full"><Heart className="w-4 h-4"/> Calmo</span>
            </div>
            <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-transparent hover:border-brand-purple transition-colors">
              <span className="font-medium text-brand-dark">13 de Jun</span>
              <span className="flex items-center gap-2 text-sm text-brand-orange font-bold bg-brand-orange/10 px-3 py-1 rounded-full"><Zap className="w-4 h-4"/> Animado</span>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}