import MainLayout from "../../layouts/MainLayout";

const Profile = () => {
  return (
    <MainLayout>

      <section className="pt-[140px] pb-32 bg-[var(--cream)]">

        <div className="container-custom max-w-5xl">

          <div className="bg-white rounded-[40px] p-14 shadow-lg">

            <div className="flex flex-col md:flex-row gap-10 items-center">

              <div className="w-[140px] h-[140px] rounded-full bg-[var(--parchment)]" />

              <div>

                <h1 className="serif text-[4rem] text-[var(--deepBrown)]">
                  Mohammad Hafiz
                </h1>

                <p className="text-[#7f6a52] mt-4">
                  Premium Loyalty Member
                </p>

              </div>

            </div>

            <div className="grid md:grid-cols-3 gap-10 mt-20">

              <div className="bg-[var(--parchment)] rounded-[30px] p-10 text-center">

                <h2 className="serif text-5xl text-[var(--warmBrown)]">
                  240
                </h2>

                <p className="uppercase tracking-[3px] text-xs mt-4">
                  Loyalty Points
                </p>

              </div>

              <div className="bg-[var(--parchment)] rounded-[30px] p-10 text-center">

                <h2 className="serif text-5xl text-[var(--warmBrown)]">
                  12
                </h2>

                <p className="uppercase tracking-[3px] text-xs mt-4">
                  Total Orders
                </p>

              </div>

              <div className="bg-[var(--parchment)] rounded-[30px] p-10 text-center">

                <h2 className="serif text-5xl text-[var(--warmBrown)]">
                  Gold
                </h2>

                <p className="uppercase tracking-[3px] text-xs mt-4">
                  Membership
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default Profile;