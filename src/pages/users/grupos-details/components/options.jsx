const Options = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex gap-4">
      <button className="px-4 py-2 rounded-lg border border-black text-sm hover:bg-gray-100 transition">
        Miembros
      </button>

      <button className="px-4 py-2 rounded-lg border border-black text-sm hover:bg-gray-100 transition">
        Proyectos
      </button>

      <button className="px-4 py-2 rounded-lg border border-black text-sm hover:bg-gray-100 transition">
        Configuración
      </button>
    </div>
  );
};

export default Options;
