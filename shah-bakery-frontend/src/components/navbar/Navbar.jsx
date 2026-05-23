import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y:-80 }}
        animate={{ y:0 }}
        transition={{ duration:0.6 }}
        className="fixed top-0 left-0 w-full z-50 bg-[rgba(248,243,234,0.9)] backdrop-blur-xl border-b border-[#e6d8c6]"
      >

        <div className="container-custom h-[85px] flex items-center justify-between">

          <Link
            to="/"
            className="serif text-4xl text-[var(--warmBrown)] font-semibold"
          >
            Shah Bakery
          </Link>

          <div className="hidden lg:flex items-center gap-12 uppercase tracking-[3px] text-[12px] text-[#7f6a52]">

            <Link to="/">Home</Link>

            <Link to="/menu">Menu</Link>

            <Link to="/outlets">Outlets</Link>

            <Link to="/offers">Offers</Link>

            <Link to="/orders">Orders</Link>

          </div>

          <div className="flex items-center gap-5">

            <Link
              to="/cart"
              className="hidden md:flex items-center gap-3 bg-[var(--warmBrown)] hover:bg-[var(--deepBrown)] transition text-white px-7 py-3 rounded-full uppercase tracking-[2px] text-sm"
            >

              <FaShoppingBag />

              Cart

            </Link>

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-4xl text-[var(--warmBrown)]"
            >

              <HiOutlineMenuAlt3 />

            </button>

          </div>

        </div>

      </motion.nav>

      <MobileSidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;