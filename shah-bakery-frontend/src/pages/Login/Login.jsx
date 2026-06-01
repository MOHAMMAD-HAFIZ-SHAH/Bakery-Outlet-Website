import AuthLayout from "../../layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>

      <div className="bg-white rounded-[40px] p-14 w-full max-w-[550px] shadow-2xl">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-4">
            Welcome Back
          </p>

          <h1 className="serif text-[4rem] text-[var(--deepBrown)]">
            Login
          </h1>

        </div>

        <div className="flex flex-col gap-7">

          <input
            type="email"
            placeholder="Email Address"
            className="border border-[#eee] rounded-full px-7 py-5 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-[#eee] rounded-full px-7 py-5 outline-none"
          />

          <button className="bg-[var(--warmBrown)] hover:bg-[var(--deepBrown)] transition text-white py-5 rounded-full uppercase tracking-[3px] text-sm mt-4">

            Login

          </button>

        </div>

      </div>

    </AuthLayout>
  );
};

export default Login;