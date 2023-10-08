import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const ScheduleCard = ({ scheduleData }) => {
  const { time, place_onsite, place_online } = scheduleData.schedule;
  const { speaker_name, company, profile_pic } = scheduleData.speaker;
  const { name, id } = scheduleData;

  return (
    <div>
      <Link to={`/event/${id}`}>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="card card-side bg-base-100 bg-gradient-to-br from-blue-100
          to-orange-300 shadow-xl">
          <div className=" text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 text-center  h-full font-semibold rounded-lg text-2xl py-20 px-10 my-auto">
            {time}
          </div>
          <div className="card-body">
            <h2 className="card-title absolute top-2">{name}</h2>
            <br />
            <div className="md:flex mt-10 gap-5">
              {place_onsite ? (
                <h2 className="p-2  mb-1 text-sm bg-opacity-50 bg-rose-200 rounded-lg">
                  {place_onsite}
                </h2>
              ) : (
                ""
              )}
              {place_online ? (
                <h2 className="p-2  mb-1 bg-opacity-50 bg-rose-200 rounded-lg">
                  {place_online}
                </h2>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className=" flex items-center mr-4 md:mr-6 ">
            <div className="avatar items-center p-5 md:mb-6">
              <div className="w-18 mb-1 md:w-28 md:h-28 rounded-full">
                <img src={profile_pic} />
              </div>
            </div>

            <div className="absolute z-10 md:-bottom-1 text-center top-52 md:top-36 right-16 md:right-16">
              <p className="text-md font-medium">
                {speaker_name}
                <br></br>
                {company}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ScheduleCard;
ScheduleCard.propTypes = {
  scheduleData: PropTypes.object,
};
