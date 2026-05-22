import { FaShoppingBag } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y:-80 }}
      animate={{ y:0 }}
      transition={{ duration:0.6 }}
      className="fixed top-0 left-0 w-full z-50 glass border-b border-[#e7dac7]"
    >

      <div className="container-custom h-[82px] flex items-center justify-between">

        <div className="serif text-4xl text-[var(--warmBrown)] font-semibold tracking-wide">
          Shah Bakery
        </div>

        <div className="hidden lg:flex items-center gap-12 uppercase tracking-[3px] text-[13px] text-[#7f6a52]">

          <a href="#" className="hover:text-[var(--warmBrown)] transition">
            Home
          </a>

          <a href="#" className="hover:text-[var(--warmBrown)] transition">
            About
          </a>

          <a href="#" className="hover:text-[var(--warmBrown)] transition">
            Menu
          </a>

          <a href="#" className="hover:text-[var(--warmBrown)] transition">
            Outlets
          </a>

          <a href="#" className="hover:text-[var(--warmBrown)] transition">
            Offers
          </a>

        </div>

        <div className="flex items-center gap-4">

          <button className="hidden md:flex items-center gap-3 bg-[var(--warmBrown)] text-white px-6 py-3 rounded-full text-sm tracking-[2px] uppercase hover:bg-[var(--deepBrown)] transition">

            <FaShoppingBag />

            Cart

          </button>

          <button className="lg:hidden text-4xl text-[var(--warmBrown)]">
            <HiOutlineMenuAlt3 />
          </button>

        </div>

      </div>

    </motion.nav>
  );
};

export default Navbar;