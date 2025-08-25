import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </label>

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </label>

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
