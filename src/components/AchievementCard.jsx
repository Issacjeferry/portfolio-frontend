const AchievementCard = ({ achievement }) => {
  return (
    <div
      style={{
        border: "1px solid #666",
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,
      }}
    >
      <h3>{achievement.title}</h3>

      {achievement.description && (
        <p style={{ opacity: 0.85 }}>{achievement.description}</p>
      )}

      <p>
        <strong>Type:</strong> {achievement.type}
      </p>

      {achievement.year && (
        <p>
          <strong>Year:</strong> {achievement.year}
        </p>
      )}
    </div>
  );
};

export default AchievementCard;
