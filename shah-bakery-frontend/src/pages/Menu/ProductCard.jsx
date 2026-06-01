import QuantitySelector from "./QuantitySelector";

const ProductCard = ({ item }) => {
  return (
    <div className="bg-white rounded-[35px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-500">

      <div className="overflow-hidden">

        <img
          src={item.image}
          alt=""
          className="w-full h-[320px] object-cover hover:scale-110 transition duration-700"
        />

      </div>

      <div className="p-8">

        <div className="flex items-center justify-between">

          <h3 className="serif text-4xl text-[var(--deepBrown)]">
            {item.name}
          </h3>

          <p className="text-xl font-semibold text-[var(--warmBrown)]">
            {item.price}
          </p>

        </div>

        <p className="mt-5 text-[#7f6a52] leading-7">
          Premium handcrafted speciality freshly prepared daily.
        </p>

        <div className="mt-8">

          <QuantitySelector />

        </div>

        <button className="w-full mt-8 bg-[var(--warmBrown)] hover:bg-[var(--deepBrown)] transition text-white py-4 rounded-full uppercase tracking-[3px] text-sm">

          Add To Cart

        </button>

      </div>

    </div>
  );
};

export default ProductCard;