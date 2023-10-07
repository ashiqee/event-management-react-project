import { useLoaderData } from "react-router-dom";
import SpeakersCard from "./SpeakersCard/SpeakersCard";
const Speakers = () => {
  const speakersData = useLoaderData();

  const speakers = speakersData.events;

  return (
    <div className="md: max-w-screen-xl mx-auto mt-20">
      <h2 className="text-4xl text-center text-rose-400 font-bold p-10">
        Our Speakers
      </h2>

      <div className="grid grid-cols-3 gap-10">
        {speakers.map((speaker) => (
          <SpeakersCard key={speaker.id} speakers={speaker} />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
