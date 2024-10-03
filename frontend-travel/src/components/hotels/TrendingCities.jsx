import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { trendingCities } from "../../data/dummyData";

const TrendingCities = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="heading">Trending Cities</h1>
        <p className="mt-2">The most searched-for cities on TipGuide</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        {trendingCities.map(
          ({ id, name, rating, image, number_of_reviews, price }, index) => (
            <Link
              to="hotels/1"
              key={index} // Use index as the key since id is empty
              className="p-3 bg-white !opacity-100 rounded-lg dark:bg-card-dark flex-1 basis-[20rem]"
            >
              <div className="flex items-center gap-x-4">
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h1 className="text-xl font-semibold">
                    {name || "Unknown City"}
                  </h1>
                  <div className="flex items-center gap-x-2">
                    <FaStar className="text-secondaryYellow" />
                    <p>
                      {rating || "N/A"}
                      <span className="opacity-70">
                        ({number_of_reviews || "0"})
                      </span>
                    </p>
                  </div>
                  <h1>
                    <span className="text-xl font-bold">
                      ₹{price || "0.00"}
                    </span>
                    <span className="text-sm opacity-80">/night</span>
                  </h1>
                  <Link
                    to="/hotels/1/confirm-booking"
                    className="btn btn-secondary block text-center mt-3"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default TrendingCities;
