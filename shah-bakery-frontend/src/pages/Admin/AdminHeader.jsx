const AdminHeader = () => {

  const logout = () => {
    localStorage.removeItem("adminAuth");
    window.location.href="/";
  };

  return (
    <div className="bg-white rounded-[25px] p-6 shadow-lg flex justify-between items-center">

      <h2 className="serif text-4xl text-[var(--deepBrown)]">
        Admin Panel
      </h2>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-6 py-3 rounded-full uppercase tracking-[2px] text-xs"
      >
        Logout
      </button>

    </div>
  );
};

export default AdminHeader;