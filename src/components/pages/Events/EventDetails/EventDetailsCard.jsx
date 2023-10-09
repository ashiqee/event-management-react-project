import PropTypes from "prop-types";

import Payment from "../../payment/Payment";

const EventDetailsCard = ({ event }) => {
  const { name, image, price, short_description } = event;

  if (!event) {
    return <div>Loading...</div>;
  }

  const speakerName = event?.speaker?.speaker_name;
  const company = event?.speaker?.company;
  const profilePic = event?.speaker?.profile_pic;

  return (
    <div className="max-w-screen-xl md:mx-auto mx-2 ">
      <h2 className="text-4xl font-semibold text-center text-rose-500 p-5">
        {name}
      </h2>

      <div className="card my-5 mb-8 lg:card-side bg-opacity-40  shadow-xl">
        <figure>
          <img
            data-aos="zoom-in"
            className=" md:h-[650px] object-cover"
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body md:w-[650px] mx-auto">
          <h2 className="card-title text-2xl font-extrabold text-rose-400">
            {price}$
          </h2>
          <progress className="progress progress-error w-56"></progress>
          <p data-aos="flip-right" className="text-justify">
            {short_description}
          </p>
          <div className="flex">
            <p className="text-xl font-medium">
              December 27,2023 <br /> {event?.schedule?.time} <br />
              <div className="md:flex mt-10 gap-5">
                {event?.schedule?.place_onsite ? (
                  <h2 className="p-2  mb-1  bg-opacity-50 bg-rose-200 rounded-lg">
                    {event?.schedule?.place_onsite}
                  </h2>
                ) : (
                  ""
                )}
                {event?.schedule?.place_online ? (
                  <h2 className="p-2  mb-1 bg-opacity-50 bg-rose-200 rounded-lg">
                    {event?.schedule?.place_online}
                  </h2>
                ) : (
                  ""
                )}
              </div>
            </p>
            <div data-aos="zoom-in">
              <img
                className="rounded-t-full w-36"
                src={profilePic}
                alt={speakerName}
              />
              <h2 className="text-lg font-bold text-center relative -top-7 bg-pink-400 text-white  bg-opacity-30">
                {speakerName}
                <br />
                {company}
              </h2>
            </div>
          </div>

          <div className="card-actions items-center justify-between ">
            <label
              htmlFor="my_modal_6"
              className="btn bg-gradient-to-br text-white from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            >
              Get Ticket
            </label>
            <h3 className="text-xl shadow-2xl  rounded-b-lg px-10 p-3 font-semibold text-rose-400 ">
              Speaker
            </h3>
          </div>
        </div>

        {/* The button to open modal */}

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <Payment event={event} />
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn">
                Close!
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsCard;

EventDetailsCard.propTypes = {
  event: PropTypes.object,
};
