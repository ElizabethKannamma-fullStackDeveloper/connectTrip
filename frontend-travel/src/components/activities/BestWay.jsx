const BestWay = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center max-w-[400px] mx-auto">
        <h1 className="heading">
          Discover the best local activities in your destination
        </h1>
        <p>
          Immerse yourself in thrilling experiences and create unforgettable
          memories with our curated selection of local adventures.
        </p>
      </div>
      <div className="mt-8 flex justify-center gap-4 flex-col sm:flex-row">
        <div className="text-center  flex-1">
          <img
            src="/images/choose-car.png"
            alt=""
            className="w-36 h-36 mx-auto object-contain"
          />
          <div className="mt-3">
            <h1 className="text-lg font-semibold capitalize">
              choose your adventure
            </h1>
            <p className="mt-1">
              Browse through exciting options like river rafting, hiking, and
              local tours
            </p>
          </div>
        </div>

        <div className="text-center  flex-1">
          <img
            src="/images/contact-dealer.png"
            alt=""
            className="w-36 h-36 mx-auto object-contain"
          />
          <div className="mt-3">
            <h1 className="text-lg font-semibold capitalize">
              book your experience
            </h1>
            <p className="mt-1">
              Select your preferred date and time, then secure your spot
              instantly
            </p>
          </div>
        </div>

        <div className="text-center  flex-1">
          <img
            src="/images/get-car.png"
            alt=""
            className="w-36 h-36 mx-auto object-contain"
          />
          <div className="mt-3">
            <h1 className="text-lg font-semibold capitalize">
              enjoy your activity
            </h1>
            <p className="mt-1">
              Get ready for an unforgettable adventure with our expert local
              guides
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestWay;
