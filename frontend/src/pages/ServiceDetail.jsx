import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/mockData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MapPin, Clock, Shield, Star, ArrowLeft } from "lucide-react";

export default function ServiceDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const service = services.find((s) => String(s.id) === id);

    if (!service) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <p className="text-lg text-gray-700">Serviço não encontrado</p>
                <button
                    onClick={() => navigate("/services")}
                    className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Voltar
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#F7F9FC]">
            <Header />

            <main className="flex-1 py-10">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Voltar */}
                    <button
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Conteúdo principal */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Imagem */}
                            <div className="aspect-video rounded-xl overflow-hidden shadow-sm bg-white">
                                <img
                                    src={service.images[0]}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Categoria + Localização */}
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-md">
                                    {service.category}
                                </span>

                                <div className="flex items-center text-gray-500 text-sm">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    {service.location}
                                </div>
                            </div>

                            {/* Título */}
                            <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>

                            {/* Avaliação */}
                            <div className="flex items-center space-x-2 text-gray-700">
                                <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                                <span className="font-medium">{service.rating}</span>
                                <span className="text-gray-500">
                                    ({service.reviewCount} avaliações)
                                </span>
                            </div>

                            {/* Descrição */}
                            <div className="pt-4 border-t border-gray-200">
                                <h2 className="text-lg font-semibold mb-2 text-gray-900">Sobre o serviço</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 bg-white border rounded-xl shadow-sm p-6 space-y-6">
                                {/* Preço */}
                                <div>
                                    <span className="text-4xl font-bold text-blue-600">
                                        R$ {service.price}
                                    </span>
                                    <span className="text-gray-500">
                                        /{service.priceType === "hour" ? "hora" : "serviço"}
                                    </span>
                                </div>

                                <button className="w-full px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                                    Contratar Serviço
                                </button>

                                {/* Benefícios */}
                                <div className="space-y-3 pt-4 border-t border-gray-200 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-blue-600" />
                                        <span>Responde em até 2 horas</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-5 h-5 text-blue-600" />
                                        <span>Pagamento seguro e protegido</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Star className="w-5 h-5 text-blue-600" />
                                        <span>Garantia de satisfação</span>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}