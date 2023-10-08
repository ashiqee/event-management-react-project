import PropTypes from "prop-types";

const EventDetailsCard = ({ event }) => {
  //   const { time, place_onsite, place_online } = event.schedule;

  const { name, image, price, short_description } = event;

  return (
    <div className="max-w-screen-xl md:mx-auto mx-2 ">
      <h2 className="text-4xl font-semibold text-center text-rose-500 p-5">
        {name}
      </h2>

      <div className="card my-5 mb-8 lg:card-side bg-opacity-40 bg-base-100 shadow-xl">
        <figure>
          <img className=" md:h-[650px] object-cover" src={image} alt="Album" />
        </figure>
        <div className="card-body md:w-96 mx-auto">
          <h2 className="card-title text-2xl font-extrabold text-rose-400">
            {price}$
          </h2>
          <progress className="progress progress-error w-56"></progress>
          <p className="text-justify">{short_description}</p>
          <div className="flex">
            <p className="text-2xl font-medium">
              {/* December 27,2023 <br /> Time: {event.schedule.time} */}
            </p>
            <div>
              <h2>
                Speaker <br />
                {/* {event.speaker.speaker_name} */}
              </h2>
              <img
                className="rounded-full w-40"
                // src={event.speaker.profile_pic}
                // alt={event.speaker.speaker_name}
              />
            </div>
          </div>

          <div className="card-actions ">
            <button className="bg-gradient-to-br btn text-white from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              Get Ticket
            </button>
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
