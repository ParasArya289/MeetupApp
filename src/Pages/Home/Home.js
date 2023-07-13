import { MeetingCard } from "../../Component/MeetingCard/MeetingCard";
import { data } from "../../db";
import "./Home.css";

export const Home = () => {
  const { meetups } = data;
  return (
    <div className="home">
      <h2>Meetup Events</h2>
      <div className="home-meetings">
        {meetups?.map((meeting) => (
          <MeetingCard meeting={meeting} />
        ))}
      </div>
    </div>
  );
};
