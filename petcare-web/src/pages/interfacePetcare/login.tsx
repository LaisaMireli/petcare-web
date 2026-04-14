import React, { useState } from 'react';
import { Eye, EyeOff, PawPrint } from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login:', { email, password });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full">
                {/* Header com logo */}
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                        <PawPrint className="w-8 h-8 text-orange-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-white">PetCare</h1>
                    <p className="text-orange-100 mt-1">Cuide do seu melhor amigo</p>
                </div>

                {/* Formulário de login */}
                <form onSubmit={handleSubmit} className="p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Bem-vindo de volta!
                    </h2>

                    <div className="space-y-5">
                        {/* Campo de email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                placeholder="seu@email.com"
                                required
                            />
                        </div>

                        {/* Campo de senha */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Senha
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all pr-12"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Lembrar-me e Esqueceu a senha */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                                />
                                <span className="ml-2 text-sm text-gray-600">Lembrar-me</span>
                            </label>
                            <a href="#" className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                                Esqueceu a senha?
                            </a>
                        </div>

                        {/* Botão de login */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-[1.02] shadow-md"
                        >
                            Entrar
                        </button>
                    </div>

                    {/* Link para cadastro */}
                    <p className="text-center mt-6 text-gray-600">
                        Não tem uma conta?{' '}
                        <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">
                            Cadastre-se
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;