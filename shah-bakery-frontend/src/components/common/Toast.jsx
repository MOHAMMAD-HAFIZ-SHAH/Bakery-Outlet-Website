const Toast = ({ text }) => {
  return (
    <div className="fixed top-8 right-8 bg-[var(--deepBrown)] text-white px-8 py-5 rounded-full shadow-2xl z-[999]">

      {text}

    </div>
  );
};

export default Toast;