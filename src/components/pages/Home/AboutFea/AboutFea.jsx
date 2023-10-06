import gifOne from "../../../../assets/video/main-macaron-1_A.gif";
import gifTwo from "../../../../assets/video/main-macaron-2_A.gif";

const AboutFea = () => {
  return (
    <div className=" text-rose-400 text-center">
      <img
        className="w-52 md:absolute -bottom-60 left-60 mx-auto"
        src={gifOne}
        alt=""
      />
      <img
        className="w-52 md:absolute right-48 -bottom-96 mx-auto"
        src={gifTwo}
        alt=""
      />
      <h2 className="md:text-9xl text-4xl font-semibold"> Welcome to TecH.e</h2>

      <p className="text-lg font-light  mt-5">
        Explore the future of what is possible at TecH.e Join developers,
        <br></br>
        creators, and designers to learn the latest tech, connect with experts,
        and get inspired.
      </p>
    </div>
  );
};

export default AboutFea;
