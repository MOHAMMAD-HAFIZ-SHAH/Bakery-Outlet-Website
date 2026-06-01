const Invoice = () => {
  return (
    <div className="bg-white rounded-[35px] p-12 shadow-lg">

      <h2 className="serif text-5xl text-[var(--deepBrown)] mb-10">
        Invoice
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Chocolate Pastry × 2</span>
          <span>₹240</span>
        </div>

        <div className="flex justify-between">
          <span>Chicken Burger × 1</span>
          <span>₹180</span>
        </div>

      </div>

      <div className="border-t mt-10 pt-6 flex justify-between text-2xl font-semibold">

        <span>Total</span>

        <span>₹420</span>

      </div>

    </div>
  );
};

export default Invoice;