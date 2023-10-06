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

      <div className="relative  max-w-screen-xl mx-auto md:top-40 md:mt-20 md:flex items-center my-auto justify-between text-white ">
        <div className="text-center">
          <p className=" text-2xl md:text-6xl md:mb-5">Biggest Tech Event</p>
          <h2 className="md:text-xl">Growing The Global Technology Industry</h2>
        </div>

        <div className="p-10 flex items-center gap-10 md:max-w-lg rounded-lg hero-overlay ">
          <div className="text-center">
            <h3 className="text-2xl mb-5">December 27, 2023</h3>
            <p>BIC,Dhaka,Bangladesh and Online</p>
          </div>

          <button className="btn bg-rose-400 text-white border-none">
            Get Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
