import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Bell, Plus, User, LogOut, PawPrint, Calendar, Heart, ShieldCheck, Stethoscope, AlertCircle } from 'lucide-react';

export default function HomeDashboard() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pets, setPets] = useState<any[]>([]);

  /*useEffect(() => {
    const petsSalvos = localStorage.getItem('@petcare:pets');
    if (petsSalvos && JSON.parse(petsSalvos).length > 0) {
      setPets(JSON.parse(petsSalvos));
    } else {
      const oscarPadrao = [{
        id: '1',
        nome: 'Oscar',
        especie: 'Gato',
        peso: '3.2',
        sobre: 'Oscar é um gatinho muito dócil e brincalhão. Ele adora sachê de salmão e tem o costume de dormir na janela durante a tarde. Precisa de acompanhamento constante com hidratação, pois tem histórico de beber pouca água.',
        imagem: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        status: 'Saudável'
      }];
      setPets(oscarPadrao);
      localStorage.setItem('@petcare:pets', JSON.stringify(oscarPadrao));
    }
  }, []);*/

  useEffect(() => {
    async function carregarPets() {
      try {
        const resposta = await fetch('http://localhost:3001/pets/owner');
        const dados = await resposta.json();

        if (dados && dados.length > 0) {
          const petsFormatados = dados.map((pet: any, index: number) => {
            const ehPrimeiro = index === 0;
            return {
              id: pet.id,
              nome: pet.name,
              especie: ehPrimeiro ? 'Gato' : 'Cão',
              peso: ehPrimeiro ? '4.2' : '7.4',
              sobre: ehPrimeiro 
                ? 'Oscar é super dócil e tranquilo. Passa boa parte da tarde dormindo perto da janela do quarto e tem preferência exclusiva por ração úmida de sachê de salmão.'
                : 'Rex é um companheiro extremamente ativo e brincalhão. Adora correr no quintal, gasta muita energia e precisa de atenção redobrada com a hidratação.',
              imagem: ehPrimeiro 
                ? 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                : 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
              status: 'Saudável'
            };
          });
          
          setPets(petsFormatados);
          localStorage.setItem('@petcare:pets', JSON.stringify(petsFormatados));
        }
      } catch (erro) {
        console.error('Erro ao conectar com a API:', erro);
      }
    }

    carregarPets();
  }, []);

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#F8F8FC] pb-20 font-sans">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        
        {/* Cabeçalho */}
        <header className="py-6 mb-4 flex justify-between items-center border-b border-gray-200/50 relative z-30">
          <div className="flex items-center gap-4">
            <div className="bg-brand-orange p-3 rounded-2xl shadow-sm">
              <PawPrint className="text-white w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-brand-gray font-bold uppercase tracking-widest">Painel de Controle</p>
              <h1 className="text-3xl font-extrabold text-brand-dark tracking-tight">PetCare</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right mr-2">
              <p className="text-sm font-bold text-brand-dark">Laisa Mireli</p>
              <p className="text-xs text-brand-gray">Tutora Premium</p>
            </div>
            <button className="p-3 bg-white rounded-full shadow-sm hover:shadow transition-all relative">
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
              <Bell className="w-5 h-5 text-brand-dark" />
            </button>
            <div className="relative">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-14 h-14 bg-brand-purple border-4 border-white shadow-md rounded-full flex items-center justify-center hover:bg-brand-purpleDark/40 transition-all focus:outline-none">
                <User className="w-6 h-6 text-brand-dark" />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-4 w-56 bg-white rounded-2xl shadow-xl py-3 border border-gray-100 z-50">
                  <Link href="/perfil"><button className="w-full px-5 py-3 text-left flex items-center gap-3 hover:bg-gray-50 text-brand-dark transition-colors"><User className="w-5 h-5 text-brand-orange" /><span className="text-base font-semibold">Meu Perfil</span></button></Link>
                  <div className="h-px bg-gray-100 my-2"></div>
                  <button onClick={handleLogout} className="w-full px-5 py-3 text-left flex items-center gap-3 hover:bg-red-50 text-red-500 transition-colors"><LogOut className="w-5 h-5" /><span className="text-base font-semibold">Sair da Conta</span></button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="space-y-10 mt-6">
          
          {/* Banner Hero */}
          <div className="w-full bg-brand-purpleDark rounded-[3rem] p-12 flex items-center justify-between relative overflow-hidden shadow-lg border-4 border-white h-80">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/20 rounded-full blur-2xl"></div>
            <div className="absolute left-40 -bottom-20 w-64 h-64 bg-brand-purple/40 rounded-full blur-xl"></div>
            <PawPrint className="absolute right-1/3 bottom-10 w-40 h-40 text-white/10 -rotate-12" />
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-bold rounded-full mb-4 backdrop-blur-md">Lembrete Importante</span>
              <h2 className="text-white font-extrabold text-4xl leading-tight mb-6">A vacina anual do Oscar está próxima!</h2>
              <button className="bg-brand-orange hover:bg-brand-orangeHover transition-all text-white text-base font-bold px-8 py-4 rounded-full shadow-lg flex items-center gap-2 hover:scale-105"><Calendar className="w-5 h-5" /> Agendar Agora</button>
            </div>
            <div className="relative z-10 w-64 h-64 mr-8 xl:mr-24">
              <img src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Cat" className="w-full h-full object-cover rounded-[2.5rem] border-8 border-white shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300" />
            </div>
          </div>

          {/* Cards Rápidos */}
          <div className="w-full grid grid-cols-4 gap-6 xl:gap-8">
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5 hover:border-brand-purple transition-colors"><div className="bg-brand-purple/50 p-4 rounded-2xl text-brand-purpleDark"><ShieldCheck className="w-8 h-8" /></div><div><p className="text-3xl font-extrabold text-brand-dark">2</p><p className="text-sm text-brand-gray font-semibold">Pet Vacinado</p></div></div>
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5 hover:border-brand-orange transition-colors"><div className="bg-brand-orange/20 p-4 rounded-2xl text-brand-orange"><Heart className="w-8 h-8" /></div><div><p className="text-3xl font-extrabold text-brand-dark">Bom</p><p className="text-sm text-brand-gray font-semibold">Humor Geral</p></div></div>
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5 hover:border-blue-300 transition-colors"><div className="bg-blue-50 p-4 rounded-2xl text-blue-500"><Stethoscope className="w-8 h-8" /></div><div><p className="text-3xl font-extrabold text-brand-dark">0</p><p className="text-sm text-brand-gray font-semibold">Consultas no Mês</p></div></div>
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5 hover:border-red-300 transition-colors"><div className="bg-red-50 p-4 rounded-2xl text-red-500"><AlertCircle className="w-8 h-8" /></div><div><p className="text-3xl font-extrabold text-brand-dark">1</p><p className="text-sm text-brand-gray font-semibold">Alerta Pendente</p></div></div>
          </div>

          {/* Seção: Meus Animais */}
          <div className="w-full">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h3 className="font-extrabold text-brand-dark text-2xl">Meus Pets</h3>
                <p className="text-base text-brand-gray mt-1">Gerencie a saúde dos seus melhores amigos</p>
              </div>
            </div>

            <div className="w-full grid grid-cols-4 xl:grid-cols-5 gap-6 xl:gap-8">
              
              {/* Loop para desenhar os pets COM O LINK DINÂMICO */}
              {pets.map((pet) => (
                <Link 
                  key={pet.id} 
                  href={`/pets/detalhes?id=${pet.id}`} 
                  className="group bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all border-2 border-transparent hover:border-brand-orange relative flex flex-col items-center cursor-pointer"
                >
                  <div className="absolute top-4 right-4 bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full z-10">
                    {pet.status || 'Saudável'}
                  </div>
                  <div className="w-36 h-36 bg-brand-purple rounded-full mb-6 overflow-hidden shadow-inner border-[6px] border-white group-hover:scale-105 transition-transform">
                     <img src={pet.imagem} alt={pet.nome} className="object-cover w-full h-full" />
                  </div>
                  <h4 className="font-extrabold text-brand-dark text-xl">{pet.nome}</h4>
                  <p className="text-sm text-brand-gray font-semibold mt-1">{pet.especie} • {pet.peso} kg</p>
                </Link>
              ))}
              
              {/* Botão de Adicionar Novo Pet */}
              <Link href="/pets/novo" className="bg-brand-purple/20 border-2 border-dashed border-brand-purpleDark rounded-[2rem] p-6 flex flex-col items-center justify-center text-brand-purpleDark hover:bg-white hover:border-brand-orange hover:text-brand-orange hover:shadow-lg transition-all cursor-pointer min-h-[260px] group">
                <div className="bg-white p-4 rounded-full mb-4 group-hover:bg-brand-orange/10 transition-colors shadow-sm">
                  <Plus className="w-10 h-10" />
                </div>
                <span className="font-bold text-base">Adicionar Pet</span>
              </Link>

            </div>
          </div>

          {/* Dicas de Cuidado */}
          <div className="w-full pt-8 border-t border-gray-200/60 pb-10">
             <h3 className="font-extrabold text-brand-dark text-2xl mb-6">Dicas de Cuidado</h3>
             <div className="w-full grid grid-cols-3 gap-6 xl:gap-8">
              <a href="https://www.petz.com.br/blog/cachorros/alimentacao-natural-para-cachorro/" target="_blank" rel="noopener noreferrer" className="bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5 cursor-pointer hover:border-brand-purple hover:shadow-md transition-all group">
                <div className="w-24 h-24 bg-blue-50 rounded-2xl overflow-hidden shrink-0 border-4 border-white shadow-sm"><img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Dog" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                <div><h4 className="font-extrabold text-brand-dark text-lg leading-tight mb-1 group-hover:text-brand-orange transition-colors">Alimentação Natural</h4><p className="text-sm text-brand-gray font-medium">Como começar hoje a transição</p></div>
              </a>
              <a href="https://www.petz.com.br/blog/pets/brincadeiras-para-gatos/" target="_blank" rel="noopener noreferrer" className="bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5 cursor-pointer hover:border-brand-purple hover:shadow-md transition-all group">
                <div className="w-24 h-24 bg-orange-50 rounded-2xl overflow-hidden shrink-0 border-4 border-white shadow-sm"><img src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Cat Toy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                <div><h4 className="font-extrabold text-brand-dark text-lg leading-tight mb-1 group-hover:text-brand-orange transition-colors">Brincadeiras Indoor</h4><p className="text-sm text-brand-gray font-medium">Gaste a energia do seu gato</p></div>
              </a>
              <a href="https://www.petz.com.br/blog/cachorros/higiene-e-cuidados/banho-em-cachorro/" target="_blank" rel="noopener noreferrer" className="bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5 cursor-pointer hover:border-brand-purple hover:shadow-md transition-all group">
                <div className="w-24 h-24 bg-teal-50 rounded-2xl overflow-hidden shrink-0 border-4 border-white shadow-sm"><img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Pet Bath" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                <div><h4 className="font-extrabold text-brand-dark text-lg leading-tight mb-1 group-hover:text-brand-orange transition-colors">Higiene Pet</h4><p className="text-sm text-brand-gray font-medium">Cuidados com banho e tosa</p></div>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}