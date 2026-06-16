import React from 'react';
import { Camera, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/router';

export default function AddPetScreen() {
  const router = useRouter();

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    // Após salvar no banco, volta para a tela anterior
    router.back();
  };

  return (
    <div className="min-h-screen bg-brand-purple pb-10">
      {/* Header */}
      <header className="p-6 flex items-center gap-4 relative z-10">
        <button 
          onClick={() => router.back()} 
          className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-brand-dark" />
        </button>
        <h1 className="text-xl font-bold text-brand-dark">Novo Pet</h1>
      </header>

      <main className="px-6 pt-2">
        <form className="bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-sm space-y-5" onSubmit={handleSalvar}>
          
          {/* Upload de Foto */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-28 h-28 bg-brand-purple rounded-full flex items-center justify-center border-4 border-white shadow-md relative overflow-hidden group hover:border-brand-purpleDark transition-colors">
              <Camera className="w-8 h-8 text-brand-purpleDark group-hover:scale-110 transition-transform" />
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
            </div>
            <p className="text-sm text-brand-orange font-semibold mt-3">Adicionar Foto</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Nome do Pet</label>
            <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors" placeholder="Ex: Rex" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">Espécie</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange appearance-none transition-colors">
                <option>Cachorro</option>
                <option>Gato</option>
                <option>Pássaro</option>
                <option>Outro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">Peso (kg)</label>
              <input type="number" step="0.1" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors" placeholder="0.0" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">Altura (cm)</label>
              <input type="number" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors" placeholder="0" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">Sexo</label>
              <div className="flex gap-2">
                <button type="button" className="flex-1 bg-brand-purple text-brand-dark py-3 rounded-xl text-sm font-semibold border border-transparent hover:border-brand-purpleDark transition-colors">M</button>
                <button type="button" className="flex-1 bg-gray-50 text-brand-gray py-3 rounded-xl text-sm font-semibold border border-gray-200 hover:border-brand-purpleDark transition-colors">F</button>
              </div>
            </div>
          </div>

          {/* NOVO CAMPO: Sobre o Pet */}
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Sobre o Pet</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors resize-none h-28" 
              placeholder="Conte um pouco sobre a personalidade, gostos e necessidades especiais do seu bichinho..."
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold py-4 rounded-2xl shadow-md transition-all mt-6 text-lg">
            Salvar Pet
          </button>
        </form>
      </main>
    </div>
  );
}