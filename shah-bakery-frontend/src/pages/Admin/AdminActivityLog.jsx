const logs = [
  "Product Added",
  "Order Updated",
  "Coupon Created"
];

const AdminActivityLog = () => {
  return (
    <div className="bg-white rounded-[35px] p-8 shadow-lg">

      <h2 className="serif text-4xl text-[var(--deepBrown)] mb-8">
        Activity Log
      </h2>

      <div className="space-y-4">

        {logs.map((item,index) => (

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

export default AdminActivityLog;