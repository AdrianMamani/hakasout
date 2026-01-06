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
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mis Grupos</h1>

      {/* Grid 3 por fila */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {grupos.map((grupo) => (
          <GroupCard
            key={grupo.id}
            image={grupo.image}
            groupName={grupo.groupName}
            owner={grupo.owner}
          />
        ))}
      </div>
    </div>
  );
};

export default Grupos;
