import { Link, useNavigate } from 'react-router-dom';
import { Menu, User, LogOut, Check } from 'lucide-react';
import { useState } from 'react';

export default function Header() {

    const navigate = useNavigate();
    const [isLoggedIn] = useState(false) // mocked authentication state
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                            <Check className="h-5 w-5 text-white" />
                        </div>

                        <span className="text-xl font-bold text-gray-900">
                            Contrate<span className="text-blue-600">Já</span>
                        </span>
                    </Link>

                    {/* Navegação Desktop */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            to="/services"
                            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
                        >
                            Buscar Serviços
                        </Link>

                        <Link
                            to="/como-funciona"
                            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
                        >
                            Como Funciona
                        </Link>

                        <Link
                            to="/dashboard/provider"
                            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
                        >
                            Seja um Prestador
                        </Link>
                    </nav>

                    {/* Ações Desktop */}
                    <div className="hidden md:flex items-center gap-4">
                        {isLoggedIn ? (
                            <>
                                <button
                                    onClick={() => navigate("/profile")}
                                    className="text-sm flex items-center gap-2 text-gray-700 hover:text-gray-900 transition"
                                >
                                    <User className="h-4 w-4" />
                                    Perfil
                                </button>

                                <button className="text-sm flex items-center gap-2 text-gray-700 hover:text-red-600 transition">
                                    <LogOut className="h-4 w-4" />
                                    Sair
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => navigate("/login")}
                                    className="text-sm text-gray-700 hover:text-gray-900 transition"
                                >
                                    Entrar
                                </button>

                                <button
                                    onClick={() => navigate("/register")}
                                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-md transition"
                                >
                                    Cadastrar
                                </button>
                            </>
                        )}
                    </div>

                    {/* Menu Mobile */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu className="h-6 w-6 text-gray-800" />
                    </button>
                </div>

                {/* Menu Mobile */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <nav className="flex flex-col gap-4">
                            <Link
                                to="/services"
                                className="text-sm text-gray-600 hover:text-gray-900 transition"
                            >
                                Buscar Serviços
                            </Link>

                            <Link
                                to="/como-funciona"
                                className="text-sm text-gray-600 hover:text-gray-900 transition"
                            >
                                Como Funciona
                            </Link>

                            <Link
                                to="/dashboard/provider"
                                className="text-sm text-gray-600 hover:text-gray-900 transition"
                            >
                                Seja um Prestador
                            </Link>

                            <div className="flex flex-col gap-2 pt-4 border-t">
                                {isLoggedIn ? (
                                    <>
                                        <button
                                            onClick={() => navigate("/profile")}
                                            className="flex items-center gap-2 text-sm text-gray-700"
                                        >
                                            <User className="h-4 w-4" />
                                            Perfil
                                        </button>

                                        <button className="flex items-center gap-2 text-sm text-gray-700">
                                            <LogOut className="h-4 w-4" />
                                            Sair
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => navigate("/login")}
                                            className="text-sm text-gray-700"
                                        >
                                            Entrar
                                        </button>

                                        <button
                                            onClick={() => navigate("/register")}
                                            className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-md transition"
                                        >
                                            Cadastrar
                                        </button>
                                    </>
                                )}
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}