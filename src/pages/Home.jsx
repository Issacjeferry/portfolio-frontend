import { useEffect, useState } from "react";
import API from "../api/api";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    API.get("/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Projects error:", err));

    API.get("/skills")
      .then((res) => setSkills(res.data))
      .catch((err) => console.error("Skills error:", err));

    API.get("/achievements")
      .then((res) => setAchievements(res.data))
      .catch((err) => console.error("Achievements error:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    API.post("/contact", form)
      .then(() => {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Something went wrong ❌");
      });
  };

  return (
    <div className="space-y-32 pt-32 pb-24">

      {/* HERO */}
      <section id="home" className="scroll-mt-32 text-center">
  <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
    Building Scalable <br />
    <span className="text-blue-500">Full-Stack Applications</span>
  </h1>

  <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
    I'm Issac Jeferry — a Full-Stack Developer specializing in
    React, Spring Boot, and PostgreSQL.
  </p>

  <div className="flex justify-center gap-4 flex-wrap">
    <a
      href="#projects"
      className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
    >
      View Projects
    </a>

    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-blue-500 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition"
    >
      Download Resume
    </a>
  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-32">
  <h2 className="text-3xl font-semibold mb-6">About Me</h2>

  <p className="text-gray-400 leading-relaxed">
    I am a Full-Stack Developer with strong backend expertise in Spring Boot
    and database design using PostgreSQL. I build responsive frontends using React
    and integrate them with secure, scalable REST APIs.
  </p>

  <p className="text-gray-400 leading-relaxed mt-4">
    My focus is on clean architecture, structured code, and performance-driven
    application development across the entire stack.
  </p>
</section>
<section id="stack" className="scroll-mt-32">
  <h2 className="text-3xl font-semibold mb-6">Technology Stack</h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3 text-blue-400">
        Frontend
      </h3>
      <p className="text-gray-400">
        React • Tailwind CSS • Axios • Responsive UI Design
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3 text-green-400">
        Backend
      </h3>
      <p className="text-gray-400">
        Java • Spring Boot • REST APIs • JPA / Hibernate
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3 text-purple-400">
        Database
      </h3>
      <p className="text-gray-400">
        PostgreSQL • MongoDB • Query Optimization • Schema Design
      </p>
    </div>

  </div>
</section>

<section id="what-i-build" className="scroll-mt-32">
  <h2 className="text-3xl font-semibold mb-10">What I Build</h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* CARD 1 */}
    <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition">
      <h3 className="text-xl font-semibold mb-3 text-blue-400">
        Scalable REST APIs
      </h3>
      <p className="text-gray-400 leading-relaxed">
        Designing structured and secure RESTful APIs using Spring Boot,
        following layered architecture and clean coding principles.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-green-500 transition">
      <h3 className="text-xl font-semibold mb-3 text-green-400">
        Full-Stack Web Applications
      </h3>
      <p className="text-gray-400 leading-relaxed">
        Building responsive frontend interfaces using React and integrating
        them seamlessly with backend services and databases.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-purple-500 transition">
      <h3 className="text-xl font-semibold mb-3 text-purple-400">
        Database-Driven Systems
      </h3>
      <p className="text-gray-400 leading-relaxed">
        Designing relational database schemas, optimizing queries, and managing
        data efficiently using PostgreSQL and JPA/Hibernate.
      </p>
    </div>

    {/* CARD 4 */}
    <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-yellow-500 transition">
      <h3 className="text-xl font-semibold mb-3 text-yellow-400">
        Clean Architecture Projects
      </h3>
      <p className="text-gray-400 leading-relaxed">
        Structuring applications with clear separation of concerns
        (Controller → Service → Repository) to ensure maintainability
        and scalability.
      </p>
    </div>

  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-32">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-800 bg-gray-900 rounded-xl p-6 hover:border-blue-500 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed">
  {project.description}
</p>

<div className="text-sm text-gray-300 mb-2">
  <span className="font-semibold">Full-Stack:</span> Frontend + Backend + Database integration
</div>

<div className="text-sm text-gray-300">
  <span className="font-semibold">Tech Stack:</span> {project.technologies}
</div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-32">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill.id}
              className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg text-sm hover:border-blue-500 transition"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="scroll-mt-32">
        <h2 className="text-3xl font-semibold mb-6">Achievements</h2>

        <div className="space-y-4">
          {achievements.map((a) => (
            <div
              key={a.id}
              className="border-l-4 border-blue-500 pl-6 py-2"
            >
              <h3 className="font-semibold text-lg">{a.title}</h3>
              <p className="text-gray-400 text-sm">{a.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-32">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <div className="max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg"
            />

            <button
              type="submit"
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-sm text-gray-400">{status}</p>
            )}

          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-16 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Issac Jeferry</p>
        <p className="mt-2">
          Full-Stack Developer • React • Spring Boot • PostgreSQL
        </p>
      </footer>

    </div>
  );
};

export default Home;
