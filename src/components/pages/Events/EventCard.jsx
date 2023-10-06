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
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn bg-rose-400 border-none text-white">
              Details
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- */}
      {/* <div className="  bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a className="object-cover w-full" href="#">
          <img className="rounded-t-lg    " src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {short_description.length > 100 ? (
              <p>
                {short_description.slice(0, 100)}
                <Link to={`/event/${id}`} className="text-rose-500">
                  {" "}
                  Read More
                </Link>
              </p>
            ) : (
              <p>{short_description}</p>
            )}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default EventCard;
