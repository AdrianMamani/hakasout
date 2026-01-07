import Banners from "../grupos-details/components/banner";
import Options from "../grupos-details/components/options";
import Cards from "../grupos-details/components/cards";

const UsersGruposDetails = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Banner superior */}
      <Banners />

      {/* Opciones / acciones */}
      <Options />

      {/* Cards / contenido */}
      <Cards />
    </div>
  );
};

export default UsersGruposDetails;
