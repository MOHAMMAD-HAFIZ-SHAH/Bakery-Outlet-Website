import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const MobileSidebar = ({ open, setOpen }) => {
  return (
    <AnimatePresence>

      {open && (

        <>

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-[90]"
          />

          <motion.div
            initial={{ x:"100%" }}
            animate={{ x:0 }}
            exit={{ x:"100%" }}
            transition={{ duration:0.4 }}
            className="fixed top-0 right-0 w-[85%] max-w-[400px] h-screen bg-[var(--cream)] z-[100] p-10 flex flex-col"
          >

            <div className="flex items-center justify-between mb-16">

              <h2 className="serif text-4xl text-[var(--warmBrown)]">
                Shah Bakery
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-4xl text-[var(--warmBrown)]"
              >

                <IoClose />

              </button>

            </div>

            <div className="flex flex-col gap-10 uppercase tracking-[3px] text-sm text-[#7f6a52]">

              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>

              <Link to="/menu" onClick={() => setOpen(false)}>
                Menu
              </Link>

              <Link to="/outlets" onClick={() => setOpen(false)}>
                Outlets
              </Link>

              <Link to="/offers" onClick={() => setOpen(false)}>
                Offers
              </Link>

              <Link to="/orders" onClick={() => setOpen(false)}>
                Orders
              </Link>

            </div>

          </motion.div>

        </>

      )}

    </AnimatePresence>
  );
};

export default MobileSidebar;