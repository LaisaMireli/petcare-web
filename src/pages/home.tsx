import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Bell, Plus, User, LogOut } from 'lucide-react';

export default function HomeDashboard() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    // Aqui no futuro você limpa o cache/token do usuário
    router.push('/'); // Redireciona de volta para o login
  };

  return (
    <div className="min-h-screen bg-brand-purple pb-20">
      
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-white rounded-b-[2rem] shadow-sm relative z-20">
        <div>
          <p className="text-sm text-brand-gray">Olá, Laisa!</p>
          <h1 className="text-xl font-bold text-brand-dark">Seus Pets 🐾</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 bg-gray-50 rounded-full border border-gray-100 hover:bg-gray-100 transition-colors">
            <Bell className="w-5 h-5 text-brand-dark" />
          </button>

          {/* Menu Dropdown do Usuário */}
          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 bg-brand-purple border border-brand-purpleDark/30 rounded-full flex items-center justify-center hover:bg-brand-purpleDark/50 transition-colors focus:outline-none"
            >
              <User className="w-5 h-5 text-brand-dark" />
            </button>

            {/* Caixinha do Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl py-2 border border-gray-100 z-50">
                <Link href="/perfil">
                 <button className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 text-brand-dark transition-colors">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-semibold">Meu Perfil</span>
                </button>
                </Link>
               
                <div className="h-px bg-gray-100 my-1"></div>
                
                <button 
                  onClick={handleLogout}
                  className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-red-50 text-red-500 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-semibold">Sair</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content (Layout original mantido) */}
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
          
          {/* Pet Card */}
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