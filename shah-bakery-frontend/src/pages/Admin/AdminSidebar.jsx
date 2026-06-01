import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="w-[280px] min-h-screen bg-[var(--deepBrown)] text-white p-10">

      <h2 className="serif text-4xl mb-16">
        Admin
      </h2>

      <div className="flex flex-col gap-8 uppercase tracking-[3px] text-sm">

        <Link to="/admin/dashboard">
          Dashboard
        </Link>

        <Link to="/admin/menu">
          Menu
        </Link>

        <Link to="/admin/orders">
          Orders
        </Link>

        <Link to="/admin/outlets">
          Outlets
        </Link>

        <Link to="/admin/customers">
          Customers
        </Link>

        <Link to="/admin/analytics">
          Analytics
        </Link>

      </div>

    </aside>
  );
};

export default AdminSidebar;