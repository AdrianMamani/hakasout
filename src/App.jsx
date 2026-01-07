import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLayout from "./components/layouts/UserLayout";
//import AdminLayout from "@/layouts/AdminLayout";

// User pages
import Grupos from "./pages/users/grupos/UsersGrupos";
import GruposDetails from "./pages/users/grupos-details/UsersGruposDetails";


// Admin pages


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* RUTAS USUARIO */}
        <Route element={<UserLayout />}>
          <Route path="/grupos" element={<Grupos />} />
          <Route path="/grupos-details" element={<GruposDetails />} />
        </Route>

        {/* RUTAS ADMIN 
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="usuarios" element={<Usuarios />} />
        </Route>*/}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
