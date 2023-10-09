import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div
        className="hero min-h-[25vh] bg-[#053B50]"
        // style={{
        //   backgroundImage: "url(https://i.ibb.co/CHCh7fv/cool-background.png)",
        // }}
      >
        <div className="hero-overlay  bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
            <p className="mb-5">The Biggest Event in the World</p>
          </div>
        </div>
      </div>
      <div className="hero mt-10   ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/p3GymwB/pexels-cowomen-2041627.jpg"
            className="max-w-full rounded-lg shadow-2xl"
          />
          <div className="pr-4">
            <h4 className="border-b-4 border-rose-400 w-52">About Us</h4>
            <h1 className="md:text-5xl text-2xl font-bold">
              Learn The Newest Strategy Of The Technology Industry
            </h1>
            <p className="py-6 text-justify">
              Of course, you have a homepage and dedicated pages for your
              products, but summarizing your offerings on the About Us page is
              crucial to tie them in with brand values in your messaging.
            </p>
            <Link
              to="/events"
              className="text-white w-full mt-2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              See Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
