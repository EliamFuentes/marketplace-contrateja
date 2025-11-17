import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock, Check } from "lucide-react";

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userType, setUserType] = useState("client");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("As senhas não coincidem.");
            return;
        }

        console.log({
            name,
            email,
            password,
            userType
        });
        navigate("/login");
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#F7F9FC]">

            <main className="flex-1 flex items-center justify-center p-6">
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
                        <h1 className="text-2xl font-semibold text-gray-900">Criar Conta</h1>
                        <p className="text-gray-600 text-sm mb-6">
                            Preencha os dados abaixo para começar
                        </p>

                        {error && (
                            <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Nome */}
                            <div>
                                <label className="text-sm font-medium">Nome Completo</label>
                                <div className="relative mt-1">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Seu nome"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-sm font-medium">E-mail</label>
                                <div className="relative mt-1">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="seu@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Senha */}
                            <div>
                                <label className="text-sm font-medium">Senha</label>
                                <div className="relative mt-1">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Confirmar senha */}
                            <div>
                                <label className="text-sm font-medium">Confirmar Senha</label>
                                <div className="relative mt-1">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <input
                                        type="password"
                                        placeholder="Confirme sua senha"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        className="w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Tipo de conta */}
                            <div>
                                <label className="text-sm font-medium">Tipo de Conta</label>

                                <div className="space-y-2 mt-2">
                                    {/* Cliente */}
                                    <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                                        <input
                                            type="radio"
                                            className="accent-[#2563eb]"
                                            name="userType"
                                            value="client"
                                            checked={userType === "client"}
                                            onChange={() => setUserType("client")}
                                        />
                                        <div>
                                            <span className="font-medium">Cliente</span>
                                            <p className="text-sm text-gray-500">Buscar e contratar serviços</p>
                                        </div>
                                    </label>

                                    {/* Prestador */}
                                    <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                                        <input
                                            type="radio"
                                            className="accent-[#2563eb]"
                                            name="userType"
                                            value="provider"
                                            checked={userType === "provider"}
                                            onChange={() => setUserType("provider")}
                                        />
                                        <div>
                                            <span className="font-medium">Prestador de Serviços</span>
                                            <p className="text-sm text-gray-500">Oferecer seus serviços</p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Botão */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                            >
                                Criar Conta
                            </button>

                            {/* Link login */}
                            <p className="text-center text-sm text-gray-600">
                                Já tem uma conta?{" "}
                                <Link to="/login" className="text-blue-600 font-medium hover:underline">
                                    Entrar
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}