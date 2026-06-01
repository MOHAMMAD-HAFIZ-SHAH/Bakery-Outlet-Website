import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const FloatingCart = () => {
  return (
    <Link
      to="/cart"
      className="fixed bottom-8 right-8 bg-[var(--warmBrown)] hover:bg-[var(--deepBrown)] transition text-white px-8 py-5 rounded-full shadow-2xl flex items-center gap-4 z-50"
    >

      <FaShoppingBag />

      <span className="uppercase tracking-[3px] text-sm">
        Cart · ₹540
      </span>

    </Link>
  );
};

export default FloatingCart;