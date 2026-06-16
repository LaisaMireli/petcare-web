import React from 'react';
import { ChevronLeft, Syringe, CheckCircle2, Clock } from 'lucide-react';
import { useRouter } from 'next/router';

export default function VaccinesScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-brand-purple pb-10">
      <header className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-5 h-5 text-brand-dark" />
          </button>
          <h1 className="text-xl font-bold text-brand-dark">Vacinas</h1>
        </div>
        <button className="p-2 bg-brand-orange rounded-full shadow-sm text-white hover:bg-brand-orangeHover transition-colors">
          <Syringe className="w-5 h-5" />
        </button>
      </header>

      <main className="p-6 pt-0">
        <div className="bg-white p-6 rounded-[2rem] shadow-sm relative">
          {/* Linha vertical da Timeline */}
          <div className="absolute left-[2.25rem] top-8 bottom-8 w-0.5 bg-gray-100"></div>

          {/* Item Pendente */}
          <div className="relative flex gap-4 mb-8">
            <div className="bg-white ring-4 ring-white z-10 rounded-full">
              <Clock className="w-8 h-8 text-brand-orange bg-brand-orange/10 rounded-full p-1.5" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="font-bold text-brand-dark">Antirrábica</h3>
              <p className="text-sm text-brand-orange font-semibold mt-1">Próxima semana (15 Jun)</p>
            </div>
          </div>

          {/* Item Concluído */}
          <div className="relative flex gap-4 mb-8">
            <div className="bg-white ring-4 ring-white z-10 rounded-full">
              <CheckCircle2 className="w-8 h-8 text-green-500 bg-green-50 rounded-full p-1.5" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="font-bold text-brand-dark line-through decoration-gray-300">Múltipla (V4) - 2ª Dose</h3>
              <p className="text-sm text-brand-gray mt-1">Aplicada em 10 Mar 2026</p>
              <p className="text-xs text-gray-400 mt-1">Dr. Carlos - VetCare</p>
            </div>
          </div>

          {/* Item Concluído */}
          <div className="relative flex gap-4">
            <div className="bg-white ring-4 ring-white z-10 rounded-full">
              <CheckCircle2 className="w-8 h-8 text-green-500 bg-green-50 rounded-full p-1.5" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="font-bold text-brand-dark line-through decoration-gray-300">Múltipla (V4) - 1ª Dose</h3>
              <p className="text-sm text-brand-gray mt-1">Aplicada em 10 Fev 2026</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}