import React, { useState } from 'react';
import { PawPrint } from 'lucide-react';
import { useRouter } from 'next/router';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleEntrar = (e: React.FormEvent) => {
    e.preventDefault();
    // Redireciona para o dashboard após o login
    router.push('/home');
  };

  return (
    <div className="min-h-screen bg-brand-purple flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-[2rem] shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-brand-orange p-3 rounded-full mb-4">
            <PawPrint className="text-white w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-brand-dark">
            {isLogin ? 'Bem-vindo de volta!' : 'Crie sua conta'}
          </h1>
          <p className="text-brand-gray text-sm mt-2">
            {isLogin ? 'Acesse o painel do seu pet' : 'Junte-se ao PetCare'}
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleEntrar}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">Nome</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors" placeholder="Seu nome" />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">E-mail</label>
            <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors" placeholder="seu@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Senha</label>
            <input type="password" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold py-3 rounded-xl transition-colors mt-6">
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </button>
        </form>

        <p className="text-center text-sm text-brand-gray mt-6">
          {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}{' '}
          <button onClick={() => setIsLogin(!isLogin)} type="button" className="text-brand-orange font-semibold hover:underline">
            {isLogin ? 'Cadastre-se' : 'Faça Login'}
          </button>
        </p>
      </div>
    </div>
  );
}