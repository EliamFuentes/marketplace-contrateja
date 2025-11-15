import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

import { services, categories } from "../data/mockData";

import { Search, SlidersHorizontal } from "lucide-react";

function FilterContent({
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    minRating,
    setMinRating,
    categories,
}) {
    return (
        <div className="space-y-6">
            {/* Buscar */}
            <div className="space-y-2">
                <label className="font-medium">Buscar</label>

                <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Buscar serviços..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
            </div>

            {/* Categoria */}
            <div className="space-y-2">
                <label className="font-medium">Categoria</label>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full border rounded-lg py-2 px-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                    <option value="all">Todas as Categorias</option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                            {cat.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Faixa de preço */}
            <div className="space-y-3">
                <label className="font-medium">Faixa de Preço</label>

                <input
                    type="range"
                    min={0}
                    max={500}
                    step={10}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className="w-full"
                />

                <div className="flex justify-between text-sm text-gray-600">
                    <span>R$ {priceRange[0]}</span>
                    <span>R$ {priceRange[1]}</span>
                </div>
            </div>

            {/* Avaliação mínima */}
            <div className="space-y-2">
                <label className="font-medium">Avaliação Mínima</label>

                <select
                    value={minRating}
                    onChange={(e) => setMinRating(Number(e.target.value))}
                    className="w-full border rounded-lg py-2 px-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                    <option value={0}>Todas as Avaliações</option>
                    <option value={3}>3+ Estrelas</option>
                    <option value={4}>4+ Estrelas</option>
                    <option value={4.5}>4.5+ Estrelas</option>
                </select>
            </div>
        </div>
    );
}

export default function Services() {
    const [searchParams] = useSearchParams();

    const initialCategory = searchParams.get("category") || "all";

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [priceRange, setPriceRange] = useState([0, 500]);
    const [minRating, setMinRating] = useState(0);
    const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    // Filtragem
    const filteredServices = services.filter((service) => {
        const matchesCategory =
            selectedCategory === "all" || service.category === selectedCategory;

        const matchesPrice =
            service.price >= priceRange[0] && service.price <= priceRange[1];

        const matchesRating = service.rating >= minRating;

        const matchesSearch =
            searchTerm.trim() === "" ||
            service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase());

        return (
            matchesCategory && matchesPrice && matchesRating && matchesSearch
        );
    });


    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* Conteúdo */}
            <main className="flex-1 py-10">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Título */}
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Buscar Serviços</h1>
                            <p className="text-gray-600">
                                {filteredServices.length} serviços encontrados
                            </p>
                        </div>

                        {/* Filtros Mobile */}
                        <button
                            onClick={() => setMobileFiltersOpen(true)}
                            className="md:hidden px-4 py-2 border rounded-lg flex items-center gap-2"
                        >
                            <SlidersHorizontal className="h-4 w-4" />
                            Filtros
                        </button>
                    </div>

                    <div className="flex gap-8">

                        {/* Sidebar Desktop */}
                        <aside className="hidden md:block w-64 flex-shrink-0">
                            <div className="sticky top-24 bg-white border rounded-lg p-6 shadow-sm">
                                <h2 className="font-semibold mb-6 flex items-center">
                                    <SlidersHorizontal className="h-5 w-5 mr-2" />
                                    Filtros
                                </h2>
                                <FilterContent
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                    selectedCategory={selectedCategory}
                                    setSelectedCategory={setSelectedCategory}
                                    priceRange={priceRange}
                                    setPriceRange={setPriceRange}
                                    minRating={minRating}
                                    setMinRating={setMinRating}
                                    categories={categories}
                                />
                            </div>
                        </aside>

                        {/* Lista de Serviços */}
                        <div className="flex-1">
                            {filteredServices.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredServices.map((service) => (
                                        <ServiceCard key={service.id} service={service} />
                                    ))}
                                </div>
                            ) : (
                                <p className="text-center text-gray-600 mt-10">
                                    Nenhum serviço encontrado com os filtros selecionados.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            {/* Modal Mobile */}
            {mobileFiltersOpen && (
                <div className="fixed inset-0 bg-black/40 flex justify-start">
                    <div className="w-72 h-full bg-white p-6 shadow-xl animate-slideIn">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="font-semibold text-lg">Filtros</h2>
                            <button
                                onClick={() => setMobileFiltersOpen(false)}
                                className="text-gray-500 hover:text-gray-800"
                            >
                                ✕
                            </button>
                        </div>

                        <FilterContent
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            minRating={minRating}
                            setMinRating={setMinRating}
                            categories={categories}
                        />
                    </div>

                    {/* Clique fora para fechar */}
                    <div
                        className="flex-1"
                        onClick={() => setMobileFiltersOpen(false)}
                    />
                </div>
            )}
        </div>
    );
}