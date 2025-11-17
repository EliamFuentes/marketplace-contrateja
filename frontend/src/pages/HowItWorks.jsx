import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircle2, Search, MessageCircle, CreditCard, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HowItWorks() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-[#F7F9FC]">
            <Header />

            <main className="flex-1 py-16">
                <div className="max-w-5xl mx-auto px-6">

                    {/* Hero */}
                    <section className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                            Como funciona a <span className="text-blue-600">Contratação</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Nossa plataforma conecta você aos melhores profissionais de forma simples,
                            segura e rápida. Veja como funciona:
                        </p>
                    </section>

                    {/* Steps */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {/* Step 1 */}
                        <div className="bg-white rounded-xl p-6 shadow-card text-center">
                            <div className="h-14 w-14 mx-auto mb-4 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                                <Search className="h-7 w-7" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">1. Encontre um serviço</h3>
                            <p className="text-gray-600 text-sm">
                                Busque por categorias ou utilize nossa barra de pesquisa avançada.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white rounded-xl p-6 shadow-card text-center">
                            <div className="h-14 w-14 mx-auto mb-4 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                                <MessageCircle className="h-7 w-7" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">2. Converse com o profissional</h3>
                            <p className="text-gray-600 text-sm">
                                Envie uma solicitação e negocie os detalhes pelo chat da plataforma.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white rounded-xl p-6 shadow-card text-center">
                            <div className="h-14 w-14 mx-auto mb-4 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                                <CreditCard className="h-7 w-7" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">3. Faça o pagamento com segurança</h3>
                            <p className="text-gray-600 text-sm">
                                O pagamento só é liberado após o serviço ser concluído com sucesso.
                            </p>
                        </div>
                    </section>

                    {/* Segurança */}
                    <section className="bg-white rounded-xl p-10 shadow-card text-center mb-20">
                        <div className="flex flex-col items-center">
                            <Shield className="h-12 w-12 text-blue-600 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Segurança Garantida</h2>
                            <p className="max-w-xl text-gray-600">
                                Todos os profissionais passam por verificação. Seu pagamento é protegido e
                                só é liberado quando você estiver satisfeito.
                            </p>
                        </div>
                    </section>

                    {/* Benefícios */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <div className="flex gap-3 items-start">
                            <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                            <p className="text-gray-700">Profissionais avaliados e verificados</p>
                        </div>
                        <div className="flex gap-3 items-start">
                            <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                            <p className="text-gray-700">Pagamento protegido pela plataforma</p>
                        </div>
                        <div className="flex gap-3 items-start">
                            <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                            <p className="text-gray-700">Chat interno integrado</p>
                        </div>
                        <div className="flex gap-3 items-start">
                            <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                            <p className="text-gray-700">Confiável, rápido e prático</p>
                        </div>
                    </section>

                    {/* CTA final */}
                    <section className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            Pronto para começar?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Crie sua conta gratuitamente e contrate em minutos.
                        </p>

                        <button
                            onClick={() => navigate("/register")}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                        >
                            Criar Conta Grátis
                        </button>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}