const GroupCard = ({ image, groupName, owner }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      
      {/* Imagen */}
      <div className="h-48 w-full">
        <img
          src={image}
          alt={groupName}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {groupName}
        </h3>
        <p className="text-sm text-gray-500">
          Dueño: <span className="font-medium">{owner}</span>
        </p>
      </div>
    </div>
  );
};

export default GroupCard;
