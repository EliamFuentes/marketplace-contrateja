import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Check } from "lucide-react";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Depois você vai trocar isso pelo backend real
        console.log("E-mail para recuperação:", email);

        setSubmitted(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="text-center mb-6">
                    <Link to="/" className="inline-flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                            <Check className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-gray-900">
                            Contrate<span className="text-blue-600">Já</span>
                        </span>
                    </Link>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl shadow-card p-8">

                    {submitted ? (
                        // 🔵 MENSAGEM DE CONFIRMAÇÃO
                        <div className="text-center space-y-4">
                            <h1 className="text-2xl font-semibold text-gray-900">
                                Verifique seu e-mail
                            </h1>
                            <p className="text-gray-600 text-sm">
                                Se um cadastro com <strong>{email}</strong> existir,
                                você receberá um link para redefinir sua senha.
                            </p>

                            <Link
                                to="/login"
                                className="text-blue-600 hover:underline font-medium"
                            >
                                Voltar ao login
                            </Link>
                        </div>
                    ) : (
                        // FORMULÁRIO PADRÃO
                        <>
                            <h1 className="text-2xl font-semibold text-gray-900">
                                Esqueceu sua senha?
                            </h1>
                            <p className="text-gray-600 text-sm mb-6">
                                Informe seu e-mail para receber um link de recuperação.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">

                                {/* E-mail */}
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

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
                                >
                                    Enviar link de recuperação
                                </button>

                                {/* Voltar */}
                                <p className="text-center text-sm text-gray-600">
                                    Lembrou sua senha?
                                    <Link
                                        to="/login"
                                        className="text-blue-600 font-medium hover:underline ml-1"
                                    >
                                        Entrar
                                    </Link>
                                </p>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );

}