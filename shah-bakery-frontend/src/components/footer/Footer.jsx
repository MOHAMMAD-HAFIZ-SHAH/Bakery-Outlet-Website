const Footer = () => {
  return (
    <footer className="bg-[var(--deepBrown)] text-white pt-24 pb-10 mt-32">

      <div className="container-custom">

        <div className="grid lg:grid-cols-4 gap-16 border-b border-[#5b4731] pb-16">

          <div>

            <h2 className="serif text-5xl mb-6">
              Shah Bakery
            </h2>

            <p className="text-[#d4c3ae] leading-8">
              Premium bakery delights, Kashmiri cuisine,
              fast food and handcrafted desserts made with heritage.
            </p>

          </div>

          <div>

            <h3 className="uppercase tracking-[3px] text-sm mb-8 text-[#c9a46a]">
              Navigation
            </h3>

            <div className="flex flex-col gap-5 text-[#d4c3ae]">

              <a href="#">Home</a>

              <a href="#">Menu</a>

              <a href="#">Offers</a>

              <a href="#">Orders</a>

            </div>

          </div>

          <div>

            <h3 className="uppercase tracking-[3px] text-sm mb-8 text-[#c9a46a]">
              Branches
            </h3>

            <div className="flex flex-col gap-5 text-[#d4c3ae]">

              <p>Nuner, Ganderbal</p>

              <p>Babawayil, Ganderbal</p>

            </div>

          </div>

          <div>

            <h3 className="uppercase tracking-[3px] text-sm mb-8 text-[#c9a46a]">
              Contact
            </h3>

            <div className="flex flex-col gap-5 text-[#d4c3ae]">

              <p>+91 91495 83349</p>

              <p>Open Daily · 8 AM – 10 PM</p>

              <p>FSSAI Certified</p>

            </div>

          </div>

        </div>

        <div className="pt-10 flex flex-col md:flex-row gap-6 items-center justify-between text-[#a8937c] text-sm">

          <p>
            © 2026 Shah Bakery & Fastfood. All rights reserved.
          </p>

          <p>
            Crafted with premium Kashmiri aesthetics.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;