import { useEffect, useState } from "react";
import API from "../api/api";
import AchievementCard from "../components/AchievementCard";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    API.get("/achievements")
      .then((res) => {
        setAchievements(res.data);
      })
      .catch((err) => {
        console.error("Error fetching achievements", err);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Achievements</h2>

      {achievements.length === 0 ? (
        <p>No achievements found</p>
      ) : (
        achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
          />
        ))
      )}
    </div>
  );
};

export default Achievements;
