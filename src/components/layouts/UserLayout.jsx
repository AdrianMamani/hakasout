import { useState } from "react";
import { Outlet } from "react-router-dom";

import UserSidebar from "../common/sidebar.user";
import MobileHeader from "../common/header.user";

const UserLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header mobile */}
      <MobileHeader onMenuClick={() => setOpen(true)} />

      <div className="flex pt-14 md:pt-0">
        <UserSidebar open={open} onClose={() => setOpen(false)} />

        <main className="flex-1 p-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;