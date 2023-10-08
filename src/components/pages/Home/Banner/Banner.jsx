import bgVideo from "../../../../assets/video/bg-video.mp4";

const Banner = () => {
  return (
    <div className="md:max-h-screen lg:h-[800px] ">
      <video
        className="object-cover absolute -z-1 top-0  "
        src={bgVideo}
        autoPlay
        loop
        muted></video>

      <div
        data-aos="fade-up"
        className="relative  max-w-screen-xl mx-auto md:top-40 md:mt-20 md:flex items-center my-auto justify-between text-white ">
        <div className="text-center">
          <p className=" text-2xl md:text-6xl md:mb-5">Biggest Tech Event</p>
          <h2 className="md:text-xl">Growing The Global Technology Industry</h2>
        </div>

        <div className="p-10 flex items-center gap-10 md:max-w-lg rounded-lg hero-overlay ">
          <div className="text-center">
            <h3 className="text-2xl mb-5">December 27, 2023</h3>
            <p>BIC,Dhaka,Bangladesh and Online</p>
          </div>

          <button
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Get Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
