import MainLayout from "../../layouts/MainLayout";

import MenuHero from "./MenuHero";
import CategorySidebar from "./CategorySidebar";
import ProductGrid from "./ProductGrid";

import FloatingCart from "../../components/cart/FloatingCart";

const Menu = () => {
  return (
    <MainLayout>

      <MenuHero />

      <section className="py-20 bg-[var(--cream)]">

        <div className="container-custom grid lg:grid-cols-[280px_1fr] gap-12">

          <CategorySidebar />

          <ProductGrid />

        </div>

      </section>

      <FloatingCart />

    </MainLayout>
  );
};

export default Menu;