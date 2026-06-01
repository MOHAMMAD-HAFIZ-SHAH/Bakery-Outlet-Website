const BillingSummary = () => {
  return (
    <div className="bg-white rounded-[35px] p-10 shadow-lg">

      <h2 className="serif text-4xl text-[var(--deepBrown)] mb-10">
        Billing Summary
      </h2>

      <div className="space-y-6">

        <div className="flex justify-between">

          <span>Subtotal</span>

          <span>₹540</span>

        </div>

        <div className="flex justify-between">

          <span>GST</span>

          <span>₹40</span>

        </div>

        <div className="border-t pt-6 flex justify-between text-3xl font-semibold text-[var(--warmBrown)]">

          <span>Total</span>

          <span>₹580</span>

        </div>

      </div>

      <button className="w-full mt-10 bg-[var(--warmBrown)] hover:bg-[var(--deepBrown)] transition text-white py-5 rounded-full uppercase tracking-[3px] text-sm">

        Checkout

      </button>

    </div>
  );
};

export default BillingSummary;