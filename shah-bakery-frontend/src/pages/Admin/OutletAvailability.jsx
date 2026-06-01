const outlets = [
  "Nuner",
  "Babawayil"
];

const OutletAvailability = () => {
  return (
    <div className="space-y-5">

      {outlets.map((item,index) => (

        <div
          key={index}
          className="flex items-center justify-between bg-white p-5 rounded-[20px]"
        >

          <span>{item}</span>

          <input
            type="checkbox"
            defaultChecked
          />

        </div>

      ))}

    </div>
  );
};

export default OutletAvailability;