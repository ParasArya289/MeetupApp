import { useMemo, useState } from "react";
import { MeetingCard } from "../../Component/MeetingCard/MeetingCard";
import { data } from "../../db";
import "./Home.css";

export const Home = () => {
  const [sortPerameter, setSortPerameter] = useState("both");

  const { meetups } = data;

  const sorted = useMemo(() => {
    if (sortPerameter !== "both") {
      const sortedMeetups = [...meetups].sort((a, b) => {
        if (sortPerameter === "online") {
          return b.eventType === "Offline" ? -1 : 1;
        } else {
          return a.eventType === "Offline" ? -1 : 1;
        }
      });
      return sortedMeetups;
    }
    return meetups;
  }, [meetups, sortPerameter]);

  return (
    <div className="home">
      <div className="home-heading">
        <h2>Meetup Events</h2>
        <select
          value={sortPerameter}
          onChange={(e) => setSortPerameter(e.target.value)}
        >
          <option value="both">Both</option>
          <option value="offline">Offline</option>
          <option value="online">Online</option>
        </select>
      </div>
      <div className="home-meetings">
        {sorted?.map((meeting) => (
          <MeetingCard meeting={meeting} />
        ))}
      </div>
    </div>
  );
};
