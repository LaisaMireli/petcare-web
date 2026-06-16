import React from 'react';
import { ChevronLeft, Camera, User, Mail, Phone, MapPin } from 'lucide-react';
import { useRouter } from 'next/router';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-brand-purple pb-10">
      
      <header className="p-6 flex items-center gap-4 relative z-10">
        <button 
          onClick={() => router.back()} 
          className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-brand-dark" />
        </button>
        <h1 className="text-xl font-bold text-brand-dark">Meu Perfil</h1>
      </header>

      <main className="px-6 pt-4">
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-sm">
          
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="w-28 h-28 bg-brand-purple rounded-full flex items-center justify-center border-4 border-white shadow-md relative overflow-hidden group hover:border-brand-purpleDark transition-colors">
              <User className="w-10 h-10 text-brand-purpleDark group-hover:hidden" />
              <Camera className="w-8 h-8 text-brand-purpleDark hidden group-hover:block transition-transform scale-110" />
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
            </div>
            <h2 className="text-xl font-bold text-brand-dark mt-4">Laisa Mireli</h2>
            <p className="text-sm text-brand-gray">Tutora desde 2026</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1 flex items-center gap-2">
                <User className="w-4 h-4 text-brand-orange" /> Nome Completo
              </label>
              <input type="text" defaultValue="Laisa Mireli de Oliveira Vidal" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors text-brand-dark placeholder-gray-400 font-medium" />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1 flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-orange" /> E-mail
              </label>
              <input type="email" defaultValue="laisa@petcare.com.br" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors text-brand-dark placeholder-gray-400 font-medium" />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1 flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-orange" /> Celular
              </label>
              <input type="tel" defaultValue="(88) 99999-9999" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors text-brand-dark placeholder-gray-400 font-medium" />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-orange" /> Endereço Principal
              </label>
              <input type="text" defaultValue="Sobral, CE" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors text-brand-dark placeholder-gray-400 font-medium" />
            </div>

            <button className="w-full bg-brand-dark hover:bg-gray-800 text-white font-semibold py-4 rounded-2xl shadow-md transition-all mt-8 text-lg">
              Salvar Alterações
            </button>
          </form>

        </div>
      </main>
    </div>
  );
}