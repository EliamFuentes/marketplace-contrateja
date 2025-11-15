import * as Icons from "lucide-react";

export default function CategoryCard({ category }) {
    const IconComponent = Icons[category.icon];

    return (
        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md cursor-pointer text-center transition group">

            {/* Ícone */}
            <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition">
                {IconComponent && (
                    <IconComponent className="h-8 w-8 text-blue-600" />
                )}
            </div>

            {/* Nome */}
            <h3 className="font-semibold text-gray-900">
                {category.name}
            </h3>

            {/* Quantidade */}
            <p className="text-sm text-gray-500">
                {category.count} profissionais
            </p>
        </div>
    );
}