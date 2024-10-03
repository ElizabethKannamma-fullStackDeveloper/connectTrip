import React from "react";
import Banner from "../components/common/Banner";
import NavFilters from "../components/common/NavFilters";
import ActivitiesBanner from "../banners/activities.jpg";
import { BestWay, Deals, FAQs } from "../components/activities";

const Activities = () => {
  return (
    <div>
      <Banner
        banner={ActivitiesBanner}
        title="Discover Exciting Adventures and Experiences"
      />
      <NavFilters url="/activities/search" type={"activities"} />
      <div className="mt-5 px-[3%] md:px-[6%]">
        <BestWay />
        <Deals />
        <FAQs />
      </div>
    </div>
  );
};

export default Activities;
