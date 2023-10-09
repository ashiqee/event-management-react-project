import { useLoaderData } from "react-router-dom";
import SpeakersCard from "./SpeakersCard/SpeakersCard";
const Speakers = () => {
  const speakersData = useLoaderData();

  const speakers = speakersData.events;

  return (
    <div>
      <div className="hero min-h-[25vh] bg-[#053B50]">
        <div className="hero-overlay  bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Our Speakers</h1>
            <p className="mb-5">Meet our Expert Speakers</p>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Speakers;
