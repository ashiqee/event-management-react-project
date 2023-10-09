import { Link } from "react-router-dom";
import bgVideo from "../../../../assets/video/bg-video.mp4";

const Banner = () => {
  return (
    <div className="md:max-h-screen  mx-auto  lg:h-[800px] ">
      <video
        className="object-cover h-[400px] md:h-fit w-screen lg:h-screen  absolute -z-1 top-0  "
        src={bgVideo}
        autoPlay
        loop
        muted
      ></video>

      <div
        data-aos="fade-up"
        className="relative  max-w-screen-xl mx-auto lg:top-40 mt-12 md:mt-20 lg:flex items-center my-auto justify-between text-white "
      >
        <div className="text-center">
          <p className=" text-2xl lg:text-6xl md:mb-5">Biggest Tech Event</p>
          <h2 className="md:text-xl">Growing The Global Technology Industry</h2>
        </div>

        <div className="lg:p-10 p-5 flex items-center justify-center mx-auto lg:gap-10 lg:max-w-lg rounded-2xl bg-orange-600 bg-opacity-10 ">
          <div className="text-center text-white">
            <h3 className="lg:text-2xl md:mb-5">December 27, 2023</h3>
            <p className="text-sm lg:text-xl">
              BIC,Dhaka,Bangladesh and Online
            </p>
          </div>

          <Link
            to="/events"
            type="button"
            className="text-white bg-gradient-to-br md:w-[20vh] from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            See Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
