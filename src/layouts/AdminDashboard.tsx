import { Outlet } from "react-router-dom";


import {

  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/DashboardSidebar";

const AdminDashboard = () => {
  return (
    <SidebarProvider>
     <DashboardSidebar/>
      <div>
        <SidebarTrigger />
        <Outlet />
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
