import Header from "../../components/Header";

export default function Home() {
    return (
        <>
            <Header />

            <section className="h-[70vh] bg-blue-600 flex flex-col items-center justify-center text-white px-6">
                <h1 className="text-5xl font-bold mb-4">Encontre profissionais perto de você</h1>
                <p className="text-lg mb-6">Contrate serviços de forma rápida, segura e eficiente.</p>

                <div className="w-full max-w-xl flex">
                    <input
                        type="text"
                        placeholder="Buscar serviços, categorias ou profissionais..."
                        className="w-full p-3 rounded-l-lg text-gray-800"
                    />
                    <button className="bg-yellow-400 px-6 text-gray-900 font-semibold rounded-r-lg">
                        Buscar
                    </button>
                </div>
            </section>
        </>
    );
}