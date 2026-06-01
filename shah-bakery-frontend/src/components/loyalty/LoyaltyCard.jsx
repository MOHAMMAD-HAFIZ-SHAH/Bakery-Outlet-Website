const LoyaltyCard = () => {
  return (
    <div className="bg-gradient-to-r from-[var(--warmBrown)] to-[var(--gold)] text-white rounded-[40px] p-14 shadow-2xl">

      <p className="uppercase tracking-[5px] text-sm">
        Loyalty Rewards
      </p>

      <h2 className="serif text-[4rem] mt-6">
        Gold Member
      </h2>

      <p className="mt-6 text-lg">
        Earn points with every purchase and unlock premium rewards.
      </p>

      <div className="mt-12 flex items-center justify-between">

        <div>

          <h3 className="serif text-5xl">
            240
          </h3>

          <p className="uppercase tracking-[3px] text-xs mt-3">
            Points
          </p>

        </div>

        <button className="bg-white text-[var(--warmBrown)] px-8 py-4 rounded-full uppercase tracking-[3px] text-sm">

          Redeem

        </button>

      </div>

    </div>
  );
};

export default LoyaltyCard;