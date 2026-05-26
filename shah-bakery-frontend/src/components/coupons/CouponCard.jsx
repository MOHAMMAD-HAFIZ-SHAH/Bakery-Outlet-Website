const CouponCard = ({ code, discount }) => {
  return (
    <div className="bg-[var(--deepBrown)] text-white rounded-[35px] p-10">

      <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm">
        Coupon
      </p>

      <h2 className="serif text-5xl mt-7">
        {code}
      </h2>

      <p className="mt-5 text-xl">
        {discount}
      </p>

    </div>
  );
};

export default CouponCard;