import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Check } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Marca */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                                <span className="text-white text-lg font-bold"><Check /></span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">
                                Contrate<span className="text-blue-600">Já</span>
                            </span>
                        </div>

                        <p className="text-sm text-gray-600">
                            Conectando você aos melhores profissionais da sua região.
                        </p>

                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links - Empresa */}
                    <div>
                        <h3 className="font-semibold mb-4 text-gray-900">Empresa</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition">
                                    Sobre Nós
                                </Link>
                            </li>
                            <li>
                                <Link to="/como-funciona" className="text-sm text-gray-600 hover:text-gray-900 transition">
                                    Como Funciona
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition">
                                    Carreiras
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links - Profissionais */}
                    <div>
                        <h3 className="font-semibold mb-4 text-gray-900">Para Profissionais</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/register" className="text-sm text-gray-600 hover:text-gray-900 transition">
                                    Cadastre-se
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/provider" className="text-sm text-gray-600 hover:text-gray-900 transition">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition">
                                    Central de Ajuda
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition">
                                    Políticas
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links - Suporte */}
                    <div>
                        <h3 className="font-semibold mb-4 text-gray-900">Suporte</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="/contato" className="text-sm text-gray-600 hover:text-gray-900 transition">
                                    Contato
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition">
                                    Termos de Uso
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition">
                                    Privacidade
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Rodapé inferior */}
                <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
                    <p>© 2025 ContrateJá. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}