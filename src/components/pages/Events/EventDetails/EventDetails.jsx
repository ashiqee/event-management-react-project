import { useLoaderData, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";
import EventDetailsCard from "./EventDetailsCard";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const EventDetails = () => {
  const [event, setEvent] = useState({});

  const { loading } = useContext(AuthContext);

  const { id } = useParams();
  const idInt = parseInt(id);

  const events = useLoaderData();

  const eventsData = events.events;

  useEffect(() => {
    const findEvent = eventsData?.find((event) => event.id === idInt);

    setEvent(findEvent);
  }, [idInt, eventsData, loading]);

  return (
    <div>
      <EventDetailsCard event={event} />
    </div>
  );
};

export default EventDetails;
