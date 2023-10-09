import AllEventsCard from "./AllEventsCard";
import PropTypes from "prop-types";

const EventsPage = ({ eData }) => {
  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="grid mx-4 md:mx-0 md:grid-cols-2 gap-5">
        {eData.map((e) => (
          <AllEventsCard key={e.id} e={e} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

EventsPage.propTypes = {
  eData: PropTypes.array,
};
