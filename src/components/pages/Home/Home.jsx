import { useLoaderData } from "react-router-dom";

import Events from "../Events/Events";
import AboutFea from "./AboutFea/AboutFea";
import Banner from "./Banner/Banner";
import Schedule from "./../Events/Schedule";
import Spornsor from "./Sponsors/Spornsor";

const Home = () => {
  const data = useLoaderData();
  const events = data.events;
  return (
    <div>
      <div className="md:mb-40">
        <Banner />
      </div>

      <div data-aos="fade-right">
        <AboutFea />
      </div>
      <Events events={events} />

      <Schedule scheduleData={events} />
      <Spornsor />
    </div>
  );
};

export default Home;
