import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import EventDetailsCard from "./EventDetailsCard";
import ScheduleDetails from "../ScheduleCard/ScheduleDetails";

const EventDetails = () => {
  const [event, setEvent] = useState({});

  const { id } = useParams();
  const idInt = parseInt(id);

  const events = useLoaderData();

  const eventsData = events.events;

  useEffect(() => {
    const findEvent = eventsData?.find((event) => event.id === idInt);

    setEvent(findEvent);
  }, [idInt, eventsData]);

  return (
    <div>
      <EventDetailsCard event={event} />
    </div>
  );
};

export default EventDetails;
