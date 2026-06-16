import React, { useState } from 'react';
import { Camera, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/router';

export default function AddPetScreen() {
  const router = useRouter();
  
  // Estados para guardar o que o usuário digita
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('Cachorro');
  const [peso, setPeso] = useState('');
  const [sobre, setSobre] = useState('');

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Cria o objeto do novo pet
    const novoPet = {
      id: Date.now().toString(), // Gera um ID único baseado na hora
      nome,
      especie,
      peso,
      sobre,
      // Uma imagem padrão genérica para os novos pets não ficarem sem foto
      imagem: especie === 'Gato' 
        ? "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
        : "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      status: 'Saudável'
    };

    // Puxa a lista antiga do navegador (ou cria uma vazia se não tiver)
    const petsSalvos = JSON.parse(localStorage.getItem('@petcare:pets') || '[]');
    
    // Adiciona o novo pet na lista e salva de novo no navegador
    localStorage.setItem('@petcare:pets', JSON.stringify([...petsSalvos, novoPet]));

    // Volta para a Home
    router.push('/home');
  };

  return (
    <div className="min-h-screen bg-brand-purple pb-10">
      <header className="p-6 flex items-center gap-4 relative z-10">
        <button 
          onClick={() => router.back()} 
          className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-brand-dark" />
        </button>
        <h1 className="text-xl font-bold text-brand-dark">Novo Pet</h1>
      </header>

      <main className="px-6 pt-2 max-w-2xl mx-auto">
        <form className="bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-sm space-y-5" onSubmit={handleSalvar}>
          
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-28 h-28 bg-brand-purple rounded-full flex items-center justify-center border-4 border-white shadow-md relative overflow-hidden group hover:border-brand-purpleDark transition-colors">
              <Camera className="w-8 h-8 text-brand-purpleDark group-hover:scale-110 transition-transform" />
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
            </div>
            <p className="text-sm text-brand-orange font-semibold mt-3">Adicionar Foto</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Nome do Pet</label>
            <input 
              type="text" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors text-brand-dark placeholder-gray-400" 
              placeholder="Ex: Rex" 
              required 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">Espécie</label>
              <select 
                value={especie}
                onChange={(e) => setEspecie(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange appearance-none transition-colors text-brand-dark"
              >
                <option>Cachorro</option>
                <option>Gato</option>
                <option>Pássaro</option>
                <option>Outro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">Peso (kg)</label>
              <input 
                type="number" 
                step="0.1" 
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors text-brand-dark placeholder-gray-400" 
                placeholder="0.0" 
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Sobre o Pet</label>
            <textarea 
              value={sobre}
              onChange={(e) => setSobre(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors resize-none h-28 text-brand-dark placeholder-gray-400" 
              placeholder="Conte um pouco sobre a personalidade, gostos e necessidades especiais..."
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