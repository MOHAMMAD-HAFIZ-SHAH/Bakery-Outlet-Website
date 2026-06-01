import { motion } from "framer-motion";

const products = [
  {
    name:"Chocolate Pastry",
    price:"₹120",
    image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name:"Chicken Burger",
    price:"₹180",
    image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name:"Special Pizza",
    price:"₹450",
    image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-32 bg-[var(--cream)]">

      <div className="container-custom">

        <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-20">

          <div>

            <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-4">
              Featured
            </p>

            <h2 className="serif text-[3rem] md:text-[5rem] text-[var(--deepBrown)]">
              Signature Specials
            </h2>

          </div>

          <button className="border border-[var(--warmBrown)] text-[var(--warmBrown)] hover:bg-[var(--warmBrown)] hover:text-white transition px-8 py-4 rounded-full uppercase tracking-[3px] text-sm">

            View Full Menu

          </button>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {products.map((item,index) => (

            <motion.div
              key={index}
              whileHover={{ y:-12 }}
              className="bg-white rounded-[35px] overflow-hidden shadow-lg"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt=""
                  className="w-full h-[350px] object-cover hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8">

                <div className="flex items-center justify-between">

                  <h3 className="serif text-4xl text-[var(--deepBrown)]">
                    {item.name}
                  </h3>

                  <p className="text-xl text-[var(--warmBrown)] font-semibold">
                    {item.price}
                  </p>

                </div>

                <button className="mt-8 w-full bg-[var(--warmBrown)] hover:bg-[var(--deepBrown)] transition text-white py-4 rounded-full uppercase tracking-[3px] text-sm">

                  Add To Cart

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;