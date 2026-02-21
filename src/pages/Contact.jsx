import { useState } from "react";
import API from "../api/api";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

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
        setStatus("Failed to send message ❌");
      });
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-800 p-6 rounded-xl border border-gray-700"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold"
        >
          Send Message
        </button>

        {status && (
          <p className="text-sm mt-2">{status}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
