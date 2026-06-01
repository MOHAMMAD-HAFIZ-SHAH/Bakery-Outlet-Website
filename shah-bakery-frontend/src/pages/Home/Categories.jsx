import { motion } from "framer-motion";

const categories = [
  {
    title:"Bakery",
    image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title:"Fast Food",
    image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title:"Pizza",
    image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title:"Wazwan",
    image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop"
  }
];

const Categories = () => {
  return (
    <section className="py-28 bg-[var(--parchment)]">

      <div className="container-custom">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-4">
            Categories
          </p>

          <h2 className="serif text-[3rem] md:text-[5rem] text-[var(--deepBrown)]">
            Explore Our Menu
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item,index) => (

            <motion.div
              key={index}
              whileHover={{ y:-10 }}
              className="group relative overflow-hidden rounded-[35px] h-[450px] cursor-pointer"
            >

              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-10 left-10">

                <h3 className="serif text-white text-5xl">
                  {item.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;