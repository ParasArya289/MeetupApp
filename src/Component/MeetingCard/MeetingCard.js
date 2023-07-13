import { useNavigate } from "react-router-dom";
import { dateFormatter } from "../../utils/Utils";
import "./MeetingCard.css";

export const MeetingCard = ({ meeting }) => {
  const navigate = useNavigate();

  const navigateToMeeting = () => {
    navigate("/meetup/" + meeting?.id);
  };

  return (
    <div className="meetingcard" onClick={navigateToMeeting}>
      <img src={meeting?.eventThumbnail} />
      <div className="meetingcard-eventtype">{meeting?.eventType} Event</div>
      <div>{dateFormatter(meeting?.eventStartTime)}</div>
      <h3>{meeting?.title}</h3>
    </div>
  );
};
