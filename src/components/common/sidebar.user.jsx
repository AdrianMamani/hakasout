import { NavLink } from "react-router-dom";
import {
  User,
  Calendar,
  Users,
  ClipboardList,
  LogOut,
  X,
} from "lucide-react";

const linkBase =
  "flex items-center gap-3 px-4 py-2 rounded-lg transition";

const linkInactive =
  "text-gray-600 hover:bg-gray-100";

const linkActive =
  "bg-blue-100 text-blue-600 font-medium";

const MenuContent = ({ onClose }) => (
  <>
    {/* Logo */}
    <div className="h-24 flex items-center justify-center border-b">
      <span className="font-bold text-xl">Logo</span>
    </div>

    {/* Menú */}
    <nav className="flex-1 px-3 py-6 space-y-1">
      <NavLink to="/grupos" end onClick={onClose}
        className={({ isActive }) =>
          `${linkBase} ${isActive ? linkActive : linkInactive}`
        }>
        <Users size={20} /> Grupos
      </NavLink>

      <NavLink to="/perfil" onClick={onClose}
        className={({ isActive }) =>
          `${linkBase} ${isActive ? linkActive : linkInactive}`
        }>
        <User size={20} /> Perfil
      </NavLink>

      <NavLink to="/calendario" onClick={onClose}
        className={({ isActive }) =>
          `${linkBase} ${isActive ? linkActive : linkInactive}`
        }>
        <Calendar size={20} /> Calendario
      </NavLink>

      <NavLink to="/asignaciones" onClick={onClose}
        className={({ isActive }) =>
          `${linkBase} ${isActive ? linkActive : linkInactive}`
        }>
        <ClipboardList size={20} /> Asignaciones
      </NavLink>
    </nav>

    <div className="p-4 border-t">
      <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-red-600 hover:bg-red-50">
        <LogOut size={20} /> Cerrar sesión
      </button>
    </div>
  </>
);

const UserSidebar = ({ open, onClose }) => {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex h-screen w-64 bg-white border-r shadow-md flex-col">
        <MenuContent />
      </aside>

      {/* Mobile modal */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
          />
          <aside className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col">
            <div className="flex justify-end p-2 border-b">
              <button onClick={onClose}>
                <X size={20} />
              </button>
            </div>
            <MenuContent onClose={onClose} />
          </aside>
        </div>
      )}
    </>
  );
};

export default UserSidebar;
