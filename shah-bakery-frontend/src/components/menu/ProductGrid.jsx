import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import MenuFilters from "./MenuFilters";

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
  },
  {
    name:"Kashmiri Wazwan",
    price:"₹850",
    image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop"
  }
];

const ProductGrid = () => {
  return (
    <div>

      <div className="flex flex-col lg:flex-row gap-6 justify-between mb-14">

        <div className="w-full lg:w-[420px]">

          <SearchBar />

        </div>

        <MenuFilters />

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

        {products.map((item,index) => (

          <ProductCard key={index} item={item} />

        ))}

      </div>

    </div>
  );
};

export default ProductGrid;