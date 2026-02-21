import { useEffect, useState } from "react";
import API from "../api/api";

const Skills = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    API.get("/skills")
      .then((res) => {
        const grouped = res.data.reduce((acc, skill) => {
          acc[skill.category] = acc[skill.category] || [];
          acc[skill.category].push(skill);
          return acc;
        }, {});
        setSkills(grouped);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>

      {Object.keys(skills).length === 0 ? (
        <p>No skills found</p>
      ) : (
        <div className="space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-3">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill.id}
                    className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm hover:border-blue-500 transition"
                  >
                    {skill.name}
                    {skill.level && (
                      <span className="text-gray-400 ml-1">
                        ({skill.level})
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
