import {
  BiBadgeCheck,
  BiHeadphone,
  BiStreetView,
  BiTag,
  BiUser,
} from "react-icons/bi";

const Deals = () => {
  return (
    <div className="pt-8 pb-10">
      <div className="flex flex-wrap gap-8">
        <div className="flex-1 basis-[18rem]">
          <img
            src="/images/activities/activities.png"
            alt="Adventure activities"
            className="sm:h-[600px] sm:w-[600px] object-contain mx-auto"
          />
        </div>
        <div className="flex-1 basis-[18rem]">
          <div className="pb-3 border-b dark:border-b-dark">
            <h1 className="heading">
              Experience the best adventures <br /> with our activity deals
            </h1>
          </div>
          <div className="mt-5 flex-1">
            <div className="flex gap-x-3">
              <div className="icon-box !rounded-md bg-slate-200 dark:bg-dark-light border dark:border-dark">
                <BiStreetView />
              </div>
              <div>
                <h1 className="text-lg font-semibold">
                  Activities for every thrill-seeker
                </h1>
                <p>Wide range of adventures for all tastes and skill levels.</p>
              </div>
            </div>

            <div className="flex gap-x-3 mt-8">
              <div className="icon-box !rounded-md bg-slate-200 dark:bg-dark-light border dark:border-dark">
                <BiHeadphone />
              </div>
              <div>
                <h1 className="text-lg font-semibold">
                  Expert Adventure Guides
                </h1>
                <p>Experienced guides ensuring safety and local expertise.</p>
              </div>
            </div>

            <div className="flex gap-x-3 mt-8">
              <div className="icon-box !rounded-md bg-slate-200 dark:bg-dark-light border dark:border-dark">
                <BiTag />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Flexible Bookings</h1>
                <p>Easy modification options for your adventure plans.</p>
              </div>
            </div>

            <div className="flex gap-x-3 mt-8">
              <div className="icon-box !rounded-md bg-slate-200 dark:bg-dark-light border dark:border-dark">
                <BiBadgeCheck />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Safety First</h1>
                <p>Top-notch equipment and adherence to safety standards.</p>
              </div>
            </div>

            <div className="flex gap-x-3 mt-8">
              <div className="icon-box !rounded-md bg-slate-200 dark:bg-dark-light border dark:border-dark">
                <BiUser />
              </div>
              <div>
                <h1 className="text-lg font-semibold">
                  Small Group Experiences
                </h1>
                <p>Personalized attention in small adventure groups.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
