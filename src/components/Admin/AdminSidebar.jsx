export default function AdminSidebar() {
  const userAdmin = JSON.parse(localStorage.getItem("userData"));
  return (
    <div id="mySidenav" className="sidenav">
      <div className="pl-5 pb-4 text-sm">User: {userAdmin?.email}</div>
      <a href="/admin/order">Orders</a>
      <a href="#">Products</a>
      <a href="#">Users</a>
    </div>
  );
}
