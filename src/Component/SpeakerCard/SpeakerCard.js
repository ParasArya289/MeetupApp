import "./SpeakerCard.css";

export const SpeakerCard = ({ speaker }) => {
  return (
    <div className="speakercard">
      <img src={speaker?.image} />
      <h5>{speaker?.name}</h5>
      <span>{speaker?.designation}</span>
    </div>
  );
};
