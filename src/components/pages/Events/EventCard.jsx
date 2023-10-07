import { Link } from "react-router-dom";

const EventCard = ({ eventsData }) => {
  console.log(eventsData);
  const { id, name, image, price, short_description } = eventsData;

  return (
    <div>
      <div className="card  w-full  bg-base-100 shadow-xl">
        <figure>
          <img className="object-cover w-full h-96" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{short_description.slice(0, 60)}</p>
          <div className="card-actions justify-end">
            <button className="text-white w-full mt-2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
