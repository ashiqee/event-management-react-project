import ScheduleCard from "./ScheduleCard/ScheduleCard";

const Schedule = ({ scheduleData }) => {
  return (
    <div className="md:max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl p-5 text-center font-bold text-rose-500">
        Our Session Schedule
      </h2>
      <div className="grid grid-cols-1 mx-2 gap-10">
        {scheduleData?.map((data) => (
          <ScheduleCard key={data.id} scheduleData={data} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
