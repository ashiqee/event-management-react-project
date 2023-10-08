import { useLoaderData } from "react-router-dom";

const ScheduleDetails = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h2 className="text-4xl">SCG</h2>
    </div>
  );
};

export default ScheduleDetails;
