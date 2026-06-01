import AuthLayout from "../../layouts/AuthLayout";

const Register = () => {
  return (
    <AuthLayout>

      <div className="bg-white rounded-[40px] p-14 w-full max-w-[650px] shadow-2xl">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-4">
            Join Us
          </p>

          <h1 className="serif text-[4rem] text-[var(--deepBrown)]">
            Create Account
          </h1>

        </div>

        <div className="grid md:grid-cols-2 gap-7">

          <input
            type="text"
            placeholder="First Name"
            className="border border-[#eee] rounded-full px-7 py-5 outline-none"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="border border-[#eee] rounded-full px-7 py-5 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border border-[#eee] rounded-full px-7 py-5 outline-none md:col-span-2"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="border border-[#eee] rounded-full px-7 py-5 outline-none md:col-span-2"
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-[#eee] rounded-full px-7 py-5 outline-none md:col-span-2"
          />

        </div>

        <button className="w-full mt-10 bg-[var(--warmBrown)] hover:bg-[var(--deepBrown)] transition text-white py-5 rounded-full uppercase tracking-[3px] text-sm">

          Register

        </button>

      </div>

    </AuthLayout>
  );
};

export default Register;