import { useLoaderData } from "react-router-dom";

import Events from "../Events/Events";
import AboutFea from "./AboutFea/AboutFea";
import Banner from "./Banner/Banner";
import Schedule from "./../Events/Schedule";

const Home = () => {
  const data = useLoaderData();
  const events = data.events;
  return (
    <div>
      <div className="md:mb-40">
        <Banner />
      </div>

      <div>
        <AboutFea />
      </div>
      <Events events={events} />

      <Schedule scheduleData={events} />
    </div>
  );
};

export default Home;
