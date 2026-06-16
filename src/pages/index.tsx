import React, { useState } from 'react';
import { PawPrint, Mail, Smartphone, Users } from 'lucide-react';
import { useRouter } from 'next/router';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleEntrar = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/home');
  };

  return (
    <div className="min-h-screen bg-brand-purple flex items-center justify-center p-4">
      {/* Container Principal estilo Cartão */}
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-4xl flex overflow-hidden min-h-[500px]">
        
        {/* Lado Esquerdo: Imagem (Referência image_598882.png) */}
        <div className="hidden md:block w-1/2 bg-gray-100 relative">
          <img 
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Pets" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8">
            <h2 className="text-brand-orange font-bold text-2xl tracking-widest">PETCARE</h2>
          </div>
        </div>

        {/* Lado Direito: Formulário */}
        <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-brand-dark">
              {isLogin ? 'Log in' : 'Cadastre-se'}
            </h1>
            <p className="text-brand-gray text-sm mt-2">
              {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}{' '}
              <button onClick={() => setIsLogin(!isLogin)} className="text-brand-orange font-semibold hover:underline">
                {isLogin ? 'Registre-se agora' : 'Faça Login'}
              </button>
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleEntrar}>
            {!isLogin && (
              <div>
                <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors text-brand-dark placeholder-gray-400" placeholder="Seu nome" />
              </div>
            )}
            <div>
              <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors text-brand-dark placeholder-gray-400" placeholder="E-mail ou usuário" />
            </div>
            <div>
              <input type="password" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors text-brand-dark placeholder-gray-400" placeholder="Senha" />
            </div>

            <div className="flex items-center gap-2 text-sm text-brand-gray">
              <input type="checkbox" className="rounded text-brand-orange" />
              <span>Mantenha-me logado</span>
            </div>

            <button type="submit" className="w-full bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold py-3.5 rounded-xl transition-all shadow-md mt-4">
              {isLogin ? 'ENTRAR' : 'CRIAR CONTA'}
            </button>
          </form>

          {isLogin && (
            <p className="text-center text-xs text-brand-gray mt-4 hover:underline cursor-pointer">
              Esqueceu sua senha?
            </p>
          )}

          {/* Social Login Corrigido */}
          <div className="mt-8">
            <p className="text-center text-sm text-brand-gray mb-4">Ou entre com</p>
            <div className="flex justify-center gap-3">
              <button className="p-3 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                <Mail className="w-5 h-5 text-brand-dark" />
              </button>
              <button className="p-3 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                <Smartphone className="w-5 h-5 text-brand-dark" />
              </button>
              <button className="p-3 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                <Users className="w-5 h-5 text-brand-dark" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}