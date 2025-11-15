import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin } from "lucide-react";

export default function SearchBar() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/services?search=${searchTerm}&location=${location}`);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="w-full max-w-4xl mx-auto mt-8"
        >
            <div className="flex flex-col md:flex-row gap-3 p-3 bg-white rounded-xl shadow-md border">

                {/* Campo: O que você precisa */}
                <div className="flex flex-1 items-center gap-2 bg-gray-50 rounded-lg px-4 py-2 border">
                    <Search className="h-5 w-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="O que você precisa?"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-transparent outline-none text-gray-700"
                    />
                </div>

                {/* Campo: Onde? */}
                <div className="flex flex-1 items-center gap-2 bg-gray-50 rounded-lg px-4 py-2 border">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Onde?"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-transparent outline-none text-gray-700"
                    />
                </div>

                {/* Botão Buscar */}
                <button
                    type="submit"
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
                >
                    Buscar
                </button>

            </div>
        </form>
    );
}