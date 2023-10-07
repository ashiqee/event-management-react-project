const ScheduleCard = ({ scheduleData }) => {
  const { time, place_onsite, place_online } = scheduleData.schedule;
  const { speaker_name, company, profile_pic } = scheduleData.speaker;
  const { name } = scheduleData;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="border-2 bg-rose-200  h-full font-semibold rounded-lg text-2xl py-20 px-10 my-auto">
          {time}
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <br />
          <div className="flex gap-5">
            {place_onsite ? (
              <h2 className="p-2 bg-slate-200 rounded-lg">{place_onsite}</h2>
            ) : (
              ""
            )}
            {place_online ? (
              <h2 className="p-2 bg-slate-200 rounded-lg">{place_online}</h2>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="avatar items-center p-5">
          <div className="w-28 h-28 rounded-full">
            <img src={profile_pic} />
          </div>
        </div>
        <div className="justify-end pr-5 my-auto">
          <p className="text-xl">{speaker_name}</p>
          <p>{company}</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
