const Banners = () => {
  return (
    <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-md">
      
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="Banner del grupo"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-[30%_center]
          sm:object-center
        "
      />
    </div>
  );
};

export default Banners;
