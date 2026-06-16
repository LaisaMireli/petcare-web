import React from 'react';
import Link from 'next/link';
import { Bell, Plus } from 'lucide-react';

export default function HomeDashboard() {
  return (
    <div className="min-h-screen bg-brand-purple pb-20">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-white rounded-b-[2rem] shadow-sm">
        <div>
          <p className="text-sm text-brand-gray">Olá, Laisa!</p>
          <h1 className="text-xl font-bold text-brand-dark">Seus Pets 🐾</h1>
        </div>
        <button className="p-2 bg-gray-50 rounded-full border border-gray-100 hover:bg-gray-100 transition-colors">
          <Bell className="w-5 h-5 text-brand-dark" />
        </button>
      </header>

      <main className="p-6 space-y-6">
        {/* Banner */}
        <div className="bg-brand-purpleDark rounded-3xl p-6 flex items-center justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-white font-bold text-lg max-w-[60%]">Hora da vacina do Oscar!</h2>
            <button className="mt-3 bg-brand-dark hover:bg-gray-800 transition-colors text-white text-xs font-semibold px-4 py-2 rounded-full">
              Agendar agora
            </button>
          </div>
          <div className="absolute right-[-20px] bottom-[-10px] w-32 h-32 bg-white/20 rounded-full"></div>
        </div>

        <div className="flex justify-between items-center">
          <h3 className="font-bold text-brand-dark">Meus Animais</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          
          {/* Pet Card (Agora é um Link para os detalhes!) */}
          <Link href="/pets/detalhes" className="bg-white rounded-3xl p-4 shadow-sm flex flex-col items-center relative cursor-pointer hover:shadow-md transition-shadow hover:border-brand-orange border border-transparent">
            <div className="w-24 h-24 bg-gray-100 rounded-full mb-3 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Cat" className="object-cover w-full h-full" />
            </div>
            <h4 className="font-bold text-brand-dark">Oscar</h4>
            <p className="text-xs text-brand-gray">Gato • 3 anos</p>
          </Link>
          
          {/* Add Pet Card */}
          <Link href="/pets/novo" className="bg-white/50 border-2 border-dashed border-brand-purpleDark rounded-3xl p-4 flex flex-col items-center justify-center text-brand-purpleDark hover:bg-white hover:border-brand-orange transition-all cursor-pointer">
            <Plus className="w-8 h-8 mb-2" />
            <span className="font-semibold text-sm">Novo Pet</span>
          </Link>

        </div>
      </main>
    </div>
  );
}