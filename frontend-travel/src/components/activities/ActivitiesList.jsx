import { useSelector } from "react-redux";
import { dataStore } from "../../features/dataSlice";
import SingleActivities from "./SingleActivities";

const ActivitiesList = () => {
  const { currentDataItems } = useSelector(dataStore);
  return (
    <div className="mt-10">
      {currentDataItems.map((flight) => (
        <SingleActivities {...flight} key={flight.id} />
      ))}
    </div>
  );
};

export default ActivitiesList;
