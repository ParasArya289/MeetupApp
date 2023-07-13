import { useParams } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { RxTimer } from "react-icons/rx";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { data } from "../../db";
import "./Meetup.css";
import { SpeakerCard } from "../../Component/SpeakerCard/SpeakerCard";

export const Meetup = () => {
  const { meetupId } = useParams();
  const { meetups } = data;
  const foundMeeting = meetups?.find(({ id }) => id === meetupId);

  return (
    <div className="meetup">
      <div className="meetup-info">
        <h2>{foundMeeting?.title}</h2>

        <div className="meetup-info-host">
          <span>Hosted By:</span>
          <span>{foundMeeting?.hostedBy}</span>
        </div>

        <img src={foundMeeting?.eventThumbnail} />

        <div className="meetup-info-description">
          <h4>Details</h4>
          <p>{foundMeeting?.eventDescription}</p>
        </div>
        <div className="meetup-info-additionalinfo">
          <h4>Additional Information</h4>
          <div>
            <span>Dress Code:</span>
            <span> {foundMeeting?.additionalInformation?.dressCode}</span>
          </div>

          <div>
            <span>Age Restriction:</span>
            <span> {foundMeeting?.additionalInformation?.ageRestrictions}</span>
          </div>
        </div>
        <h4>Event Tags</h4>
        <div className="event-tags">
          {foundMeeting?.eventTags?.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
      </div>
      <div className="meetup-misc">
        <div className="metup-time">
          <div>
            <RxTimer />
            <span>
              {foundMeeting?.eventStartTime} to {foundMeeting?.eventEndTime}
            </span>
          </div>

          <div>
            <HiOutlineLocationMarker />
            <span>{foundMeeting?.address}</span>
          </div>

          {foundMeeting?.isPaid && (
            <div>
              <LiaRupeeSignSolid />
              <span>{foundMeeting?.price}</span>
            </div>
          )}
        </div>
        <h4>Speakers({foundMeeting?.speakers?.length}):</h4>
        <div className="metup-speaker">
          {foundMeeting?.speakers?.map((speaker) => (
            <SpeakerCard speaker={speaker} />
          ))}
        </div>
      <button>RSVP</button>
      </div>
    </div>
  );
};
