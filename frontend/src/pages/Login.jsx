import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Check } from "lucide-react";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Login enviado:", { email, password });
        navigate("/");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md">

                {/* Logo + título */}
                <div className="text-center mb-6">
                    <Link to="/" className="inline-flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                            <Check className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-gray-900">ContrateJá</span>
                    </Link>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl shadow-card p-8">

                    <h1 className="text-2xl font-semibold text-gray-900">Bem-vindo de volta</h1>
                    <p className="text-gray-600 text-sm mb-6">
                        Entre com suas credenciais para acessar sua conta
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">E-mail</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="seu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Senha</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none"
                                />
                            </div>
                        </div>

                        {/* Esqueceu a senha */}
                        <div className="flex justify-end">
                            <Link
                                to="/forgot-password"
                                className="text-sm text-blue-600 hover:underline font-medium"
                            >
                                Esqueceu a senha?
                            </Link>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
                        >
                            Entrar
                        </button>

                        {/* Link Registrar */}
                        <p className="text-center text-sm text-gray-600">
                            Não tem conta?
                            <Link
                                to="/register"
                                className="text-blue-600 font-medium hover:underline ml-1"
                            >
                                Criar conta
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}