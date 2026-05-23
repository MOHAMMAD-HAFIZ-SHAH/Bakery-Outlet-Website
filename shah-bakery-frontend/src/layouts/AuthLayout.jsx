const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center p-6">

      {children}

    </div>
  );
};

export default AuthLayout;