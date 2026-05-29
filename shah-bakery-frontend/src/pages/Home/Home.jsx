import MainLayout from "../../layouts/MainLayout";

import Hero from "./Hero";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import Outlets from "./Outlets";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <MainLayout>

      <Hero />

      <Categories />

      <FeaturedProducts />

      <Outlets />

      <Testimonials />

    </MainLayout>
  );
};

export default Home;