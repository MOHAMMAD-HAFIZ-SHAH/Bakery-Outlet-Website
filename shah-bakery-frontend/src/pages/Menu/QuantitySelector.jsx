import { useState } from "react";

const QuantitySelector = () => {

  const [count,setCount] = useState(1);

  return (
    <div className="flex items-center justify-between border border-[#eee] rounded-full px-6 py-4">

      <button
        onClick={() => count > 1 && setCount(count - 1)}
        className="text-2xl text-[var(--warmBrown)]"
      >
        -
      </button>

      <span className="text-lg font-semibold">
        {count}
      </span>

      <button
        onClick={() => setCount(count + 1)}
        className="text-2xl text-[var(--warmBrown)]"
      >
        +
      </button>

    </div>
  );
};

export default QuantitySelector;