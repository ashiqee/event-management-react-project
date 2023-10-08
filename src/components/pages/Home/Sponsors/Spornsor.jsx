const Spornsor = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className=" text-center">
        <h2 className="text-4xl">The Sponsors</h2>
        <progress
          className="progress progress-error mx-auto w-56"
          value="100"
          max="100"></progress>
      </div>
      <div
        data-aos="zoom-in"
        className="grid p-10 grid-cols-3 md:grid-cols-6 mb-10 items-center mx-auto gap-5">
        <img
          className="w-40"
          src="https://json-schema.org/img/logos/sponsors/asyncapi-logo-dark.svg"
          alt=""
        />
        <img
          className="w-40"
          src="https://json-schema.org/img/logos/sponsors/airbnb-logo.svg"
          alt=""
        />
        <img
          className="w-40"
          src="https://json-schema.org/img/logos/sponsors/stoplight-logo.svg"
          alt=""
        />
        <img
          className="w-40 h-20"
          src="https://images.squarespace-cdn.com/content/v1/562eae05e4b05a3bfe465a20/1492814236595-X3GEADVJ5PV198PCO649/image-asset.png"
          alt=""
        />
        <img
          className="w-40"
          src="https://media1.giphy.com/media/DWUEBCadFCSc0/giphy.gif"
          alt=""
        />
        <img
          src="https://e7.pngegg.com/pngimages/913/289/png-clipart-logo-brand-sponsor-video-game-trademark-twitch-donate-blue-game.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Spornsor;
