export default function AdminSidebar() {
  const userAdmin = JSON.parse(localStorage.getItem("userData"));
  return (
    <div id="mySidenav" className="sidenav">
      <div className="pl-5 pb-4 text-sm">Admin: {userAdmin?.email}</div>
      <a href="/admin/product">Products</a>
      <a href="/admin/order">Orders</a>
      {/* <a href="#">Users</a> */}
    </div>
  );
}
