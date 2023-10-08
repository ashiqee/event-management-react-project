import { useLoaderData } from "react-router-dom";
import SpeakersCard from "./SpeakersCard/SpeakersCard";
const Speakers = () => {
  const speakersData = useLoaderData();

  const speakers = speakersData.events;

  return (
    <div className="md: max-w-screen-xl  mx-auto mt-2">
      <div className="p-5 text-center">
        <h2 className="text-4xl  text-rose-400 font-bold ">Our Speakers</h2>
        <span>
          <progress className="progress progress-error w-32"></progress>
        </span>
      </div>
      <div className="grid mx-6 mb-14 md:grid-cols-3 gap-12">
        {speakers.map((speaker) => (
          <SpeakersCard key={speaker.id} speakers={speaker} />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
