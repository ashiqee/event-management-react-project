import EventCard from "./EventCard";
import PropTypes from "prop-types";

const Events = ({ events }) => {
  return (
    <div className="md:max-w-screen-xl mx-auto mt-20">
      <div className="p-5 text-center">
        <h2 className="text-4xl  text-rose-400 font-bold ">Up Coming Events</h2>
        <span>
          <progress className="progress progress-error w-32"></progress>
        </span>
      </div>
      <div className="grid mx-4 md:mx-0 md:grid-cols-3 gap-5">
        {events.map((event) => (
          <EventCard key={event.id} eventsData={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
Events.propTypes = {
  events: PropTypes.array,
};
