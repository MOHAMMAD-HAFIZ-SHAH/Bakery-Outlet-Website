const notifications = [
  "New order received",
  "Outlet updated",
  "New customer registered"
];

const AdminNotifications = () => {
  return (
    <div className="bg-white rounded-[35px] p-8 shadow-lg">

      <h2 className="serif text-4xl text-[var(--deepBrown)] mb-8">
        Notifications
      </h2>

      <div className="space-y-4">

        {notifications.map((item,index) => (

          <div
            key={index}
            className="border-b pb-4"
          >
            {item}
          </div>

        ))}

      </div>

    </div>
  );
};

export default AdminNotifications;