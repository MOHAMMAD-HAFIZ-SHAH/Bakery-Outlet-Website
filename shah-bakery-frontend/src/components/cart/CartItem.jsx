const CartItem = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between border-b border-[#eee] pb-8">

      <div className="flex items-center gap-8">

        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="w-[140px] h-[140px] rounded-[25px] object-cover"
        />

        <div>

          <h2 className="serif text-4xl text-[var(--deepBrown)]">
            Chocolate Pastry
          </h2>

          <p className="mt-3 text-[#7f6a52]">
            Quantity: 2
          </p>

        </div>

      </div>

      <div className="flex items-center gap-10">

        <p className="text-3xl font-semibold text-[var(--warmBrown)]">
          ₹240
        </p>

        <button className="text-red-500 uppercase tracking-[3px] text-xs">
          Remove
        </button>

      </div>

    </div>
  );
};

export default CartItem;