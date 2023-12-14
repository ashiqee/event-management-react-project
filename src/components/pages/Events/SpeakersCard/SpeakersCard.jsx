import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsFillArrowRightCircleFill,
} from "react-icons/Bs";

const SpeakersCard = ({ speakers }) => {
  const { speaker_name, company, profile_pic } = speakers.speaker;

  return (
    <div>
      <div
        data-aos="flip-right"
        className="card mb-20 w-full h-[650px] bg-base-100 shadow-xl  image-full">
        <figure>
          <img className="object-cover" src={profile_pic} alt={speaker_name} />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-medium">{speaker_name}</h2>
          <p>{company}</p>
          <div className="flex justify-between">
            <p>
              <BsFillArrowRightCircleFill className="text-4xl text-rose-400 hover:text-blue-600" />
            </p>
            <p className="flex gap-4 text-4xl">
              <BsFacebook className="text-blue-500" />
              <BsTwitter className="text-blue-500" />
              <BsInstagram className="text-red-600" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersCard;
