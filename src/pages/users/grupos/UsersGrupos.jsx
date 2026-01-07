import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GroupCard from "../grupos/components/cards";

const grupos = [
  {
    id: 1,
    groupName: "Grupo React",
    owner: "Juan Pérez",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  },
  {
    id: 2,
    groupName: "Grupo Backend",
    owner: "María López",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    id: 3,
    groupName: "Grupo Diseño",
    owner: "Carlos Gómez",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
];

const Grupos = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // 👈 IMPORTANTE

  const gruposFiltrados = grupos.filter((grupo) =>
    grupo.groupName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      
      {/* Título + Buscador */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Grupos - proyectos</h1>

        {/* Buscador */}
        <div className="relative w-full sm:w-64">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            placeholder="buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              pl-9
              pr-3
              py-1.5
              text-sm
              rounded-full
              border
              border-black
              focus:outline-none
            "
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gruposFiltrados.map((grupo) => (
          <GroupCard
            key={grupo.id}
            image={grupo.image}
            groupName={grupo.groupName}
            owner={grupo.owner}
            onClick={() => navigate("/grupos-details")}
          />
        ))}
      </div>
    </div>
  );
};

export default Grupos;
