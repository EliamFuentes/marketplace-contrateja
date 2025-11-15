import { useNavigate } from "react-router-dom";
import { Star, MapPin } from "lucide-react";

export default function ServiceCard({ service }) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/services/${service.id}`)}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition cursor-pointer group"
        >
            {/* Imagem */}
            <div className="aspect-video relative overflow-hidden">
                <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badge categoria */}
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 text-sm rounded-md shadow">
                    {service.category}
                </span>
            </div>

            <div className="p-4">
                {/* Título */}
                <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
                    {service.title}
                </h3>

                {/* Prestador */}
                <div className="flex items-center gap-2 mb-3">
                    <img
                        src={service.providerAvatar}
                        className="w-8 h-8 rounded-full"
                        alt={service.providerName}
                    />
                    <span className="text-sm text-gray-600">{service.providerName}</span>
                </div>

                {/* Descrição */}
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {service.description}
                </p>

                {/* Info inferior */}
                <div className="flex items-center justify-between text-sm">

                    {/* Avaliação */}
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{service.rating}</span>
                        <span className="text-gray-500">({service.reviewCount})</span>
                    </div>

                    {/* Localização */}
                    <div className="flex items-center text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-xs">
                            {service.location.split(",")[0]}
                        </span>
                    </div>
                </div>
            </div>

            {/* Rodapé */}
            <div className="px-4 pb-4 flex items-center justify-between">
                <div>
                    <span className="text-2xl font-bold text-blue-600">
                        R$ {service.price}
                    </span>
                    <span className="text-sm text-gray-500">
                        /{service.priceType === "hour" ? "hora" : "serviço"}
                    </span>
                </div>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/services/${service.id}`);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm font-medium"
                >
                    Ver Detalhes
                </button>
            </div>
        </div>
    );
}