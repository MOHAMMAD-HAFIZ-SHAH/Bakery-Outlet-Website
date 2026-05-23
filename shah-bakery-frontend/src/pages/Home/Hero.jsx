import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[var(--cream)] overflow-hidden pt-[100px]">

      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center min-h-screen">

        <div>

          <motion.p
            initial={{ opacity:0,y:20 }}
            animate={{ opacity:1,y:0 }}
            transition={{ duration:0.6 }}
            className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-7"
          >

            Est. in Ganderbal Kashmir

          </motion.p>

          <motion.h1
            initial={{ opacity:0,y:40 }}
            animate={{ opacity:1,y:0 }}
            transition={{ duration:0.8 }}
            className="serif text-[4rem] md:text-[7rem] leading-none text-[var(--deepBrown)] font-light"
          >

            Baked with <br />

            <span className="italic text-[var(--warmBrown)]">
              love & heritage
            </span>

          </motion.h1>

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.4 }}
            className="mt-10 text-[#7f6a52] leading-9 text-lg max-w-xl"
          >

            Premium bakery delights, Kashmiri cuisine,
            handcrafted desserts and fast food prepared fresh daily.

          </motion.p>

          <motion.div
            initial={{ opacity:0,y:20 }}
            animate={{ opacity:1,y:0 }}
            transition={{ delay:0.5 }}
            className="flex flex-wrap gap-5 mt-12"
          >

            <button className="bg-[var(--warmBrown)] hover:bg-[var(--deepBrown)] transition text-white px-10 py-5 rounded-full uppercase tracking-[3px] text-sm">

              Explore Menu

            </button>

            <button className="border border-[var(--warmBrown)] hover:bg-[var(--warmBrown)] hover:text-white transition text-[var(--warmBrown)] px-10 py-5 rounded-full uppercase tracking-[3px] text-sm">

              Find Outlet

            </button>

          </motion.div>

        </div>

        <motion.div
          initial={{ opacity:0,scale:0.9 }}
          animate={{ opacity:1,scale:1 }}
          transition={{ duration:1 }}
          className="relative"
        >

          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="w-full h-[750px] object-cover rounded-[40px] shadow-2xl"
          />

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;