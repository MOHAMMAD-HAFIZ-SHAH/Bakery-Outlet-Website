import { useState } from "react";

const AdminLogin = () => {

  const [password,setPassword] = useState("");

  const handleLogin = () => {
    if(password === "admin123"){
      localStorage.setItem("adminAuth","true");
      window.location.href="/admin/dashboard";
    }else{
      alert("Invalid Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--cream)] p-6">

      <div className="bg-white rounded-[40px] p-14 w-full max-w-[500px] shadow-2xl">

        <div className="text-center mb-12">

          <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-4">
            Restricted Access
          </p>

          <h1 className="serif text-5xl text-[var(--deepBrown)]">
            Admin Login
          </h1>

        </div>

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full border border-[#eee] rounded-full px-7 py-5 outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full mt-8 bg-[var(--warmBrown)] text-white py-5 rounded-full uppercase tracking-[3px] text-sm"
        >
          Login
        </button>

      </div>

    </div>
  );
};

export default AdminLogin;