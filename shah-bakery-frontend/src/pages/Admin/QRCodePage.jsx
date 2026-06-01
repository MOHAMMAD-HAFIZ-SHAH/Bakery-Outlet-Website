import MainLayout from "../../layouts/MainLayout";

const QRCodePage = () => {
  return (
    <MainLayout>
      <section className="pt-[140px] pb-24">
        <div className="container-custom">

          <h1 className="serif text-6xl text-[var(--deepBrown)] mb-12">
            QR Ordering
          </h1>

          <div className="bg-white rounded-[35px] p-12 shadow-lg text-center">

            <div className="w-[250px] h-[250px] mx-auto bg-gray-200 rounded-2xl mb-8"></div>

            <p className="text-[#7f6a52]">
              Scan this QR code to open the menu directly.
            </p>

          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default QRCodePage;