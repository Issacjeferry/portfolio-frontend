const SkillBadge = ({ skill }) => {
  return (
    <div
      style={{
        border: "1px solid #555",
        padding: "10px 14px",
        borderRadius: 20,
        margin: 8,
        display: "inline-block",
      }}
    >
      <strong>{skill.name}</strong>
      <div style={{ fontSize: 12, opacity: 0.8 }}>
        {skill.category} {skill.level && `• ${skill.level}`}
      </div>
    </div>
  );
};

export default SkillBadge;
