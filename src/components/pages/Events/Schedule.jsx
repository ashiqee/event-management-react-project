import ScheduleCard from "./ScheduleCard/ScheduleCard";

const Schedule = ({ scheduleData }) => {
  return (
    <div className="md:max-w-4xl mb-20 mx-auto mt-20">
      <div className="p-5 text-center">
        <h2 className="text-4xl  text-rose-400 font-bold ">
          Our Session Schedule
        </h2>
        <span>
          <progress className="progress progress-error w-32"></progress>
        </span>
      </div>
      <div className="grid grid-cols-1 mx-2 gap-10">
        {scheduleData?.map((data) => (
          <ScheduleCard key={data.id} scheduleData={data} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
