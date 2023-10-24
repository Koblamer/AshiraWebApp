import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Admin/AdminSidebar";

export default function AdminLayout() {
  return (
    <>
      <AdminSidebar />
      <div
        style={{
          marginLeft: "200px",
        }}
      >
        <Outlet />
      </div>
    </>
  );
}
