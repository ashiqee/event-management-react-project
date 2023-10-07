import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard";

const Events = ({ events }) => {
  return (
    <div className="md:max-w-screen-xl mx-auto mt-20">
      <h2 className="text-4xl p-4 text-center font-semibold text-rose-500">
        Up Comming Events
      </h2>
      <div className="grid mx-4 md:mx-0 md:grid-cols-3 gap-5">
        {events.map((event) => (
          <EventCard key={event.id} eventsData={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
