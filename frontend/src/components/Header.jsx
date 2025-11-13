import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
                ContrateJá
            </Link>

            <nav className="flex gap-6 text-gray-700">
                <Link to="/">Início</Link>
                <Link to="/services">Serviços</Link>
                <Link to="/login">Entrar</Link>
            </nav>
        </header>
    );
}