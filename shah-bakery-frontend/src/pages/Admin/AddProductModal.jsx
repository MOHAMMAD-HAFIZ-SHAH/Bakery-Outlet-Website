const AddProductModal = () => {
  return (
    <div className="bg-white rounded-[35px] p-10 shadow-lg">

      <h2 className="serif text-4xl text-[var(--deepBrown)] mb-8">
        Add Product
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Product Name"
          className="border border-[#eee] rounded-full px-6 py-4"
        />

        <input
          type="number"
          placeholder="Price"
          className="border border-[#eee] rounded-full px-6 py-4"
        />

        <select className="border border-[#eee] rounded-full px-6 py-4">

          <option>Bakery</option>

          <option>Fast Food</option>

          <option>Pizza</option>

          <option>Biryani</option>

          <option>Wazwan</option>

        </select>

        <select className="border border-[#eee] rounded-full px-6 py-4">

          <option>Pieces</option>

          <option>Grams</option>

        </select>

      </div>

      <button className="mt-8 bg-[var(--warmBrown)] text-white px-8 py-4 rounded-full uppercase tracking-[3px] text-sm">

        Save Product

      </button>

    </div>
  );
};

export default AddProductModal;