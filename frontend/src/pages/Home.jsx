import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import ServiceCard from "../components/ServiceCard";
import SearchBar from "../components/SearchBar";
import { CheckCircle2, Shield, Clock } from "lucide-react";

//mocks temporários
import { categories, services } from "../data/mockData";

export default function Home() {
    const navigate = useNavigate();
    const popularServices = services.slice(0, 6);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">

                <section className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">

                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Encontre Profissionais <br />
                            <span className="text-blue-600">Perto de Você</span>
                        </h1>

                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                            Conectamos você aos melhores prestadores de serviços da sua região.
                            Rápido, seguro e confiável.
                        </p>

                        <SearchBar />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

                            <div className="flex items-start gap-4 p-6 rounded-lg bg-white shadow-sm">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2 text-gray-900">
                                        Profissionais Verificados
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Todos os prestadores passam por verificação de identidade e qualificação.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 rounded-lg bg-white shadow-sm">
                                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <Shield className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2 text-gray-900">
                                        Pagamento Seguro
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Transações protegidas e garantia de satisfação em todos os serviços.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 rounded-lg bg-white shadow-sm">
                                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                                    <Clock className="h-6 w-6 text-yellow-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2 text-gray-900">
                                        Atendimento Rápido
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Encontre profissionais disponíveis e agende serviços em minutos.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">

                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-semibold mb-2 text-gray-900">
                                Categorias Populares
                            </h2>
                            <p className="text-lg text-gray-600">
                                Explore os serviços mais procurados
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {categories.map((category) => (
                                <CategoryCard key={category.id} category={category} />
                            ))}
                        </div>


                        <div className="text-center mt-8">
                            <button
                                onClick={() => navigate("/services")}
                                className="px-6 py-3 rounded-md border bg-white hover:bg-gray-100 transition text-gray-800 font-medium"
                            >
                                Ver Todas as Categorias
                            </button>
                        </div>

                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4">

                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-semibold mb-2 text-gray-900">
                                Serviços em Destaque
                            </h2>
                            <p className="text-lg text-gray-600">
                                Profissionais mais bem avaliados da plataforma
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {popularServices.map((service) => (
                                <ServiceCard key={service.id} service={service} />
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <button
                                onClick={() => navigate("/services")}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
                            >
                                Ver Todos os Serviços
                            </button>
                        </div>

                    </div>
                </section>

                <section className="py-20 bg-blue-600 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">

                        <h2 className="text-3xl font-bold mb-4">
                            Você é um Profissional?
                        </h2>

                        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                            Cadastre-se gratuitamente e comece a receber solicitações de clientes na sua região.
                        </p>

                        <button
                            onClick={() => navigate("/register")}
                            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition"
                        >
                            Cadastrar como Prestador
                        </button>

                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}