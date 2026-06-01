import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--cream)]">

      <h1 className="serif text-[8rem] text-[var(--warmBrown)]">
        404
      </h1>

      <p className="text-[#7f6a52] text-lg mb-8">
        Page not found
      </p>

      <Link
        to="/"
        className="bg-[var(--warmBrown)] text-white px-8 py-4 rounded-full"
      >
        Go Home
      </Link>

    </div>
  );
};

export default NotFound;