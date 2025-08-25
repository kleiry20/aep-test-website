import React, { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    dob: "",
    company: "",
    message: "",
    testField: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
      alert("Email is required");
      return;
    }

    // Fallback defaults if fields are empty
    const finalData = {
      name: formData.name || "name",
      email: formData.email || "email@test.com",
      age: formData.age || 0,
      gender: formData.gender || "Female",
      dob: formData.dob || "2018-01-12",
      company: formData.company || "company",
      message: formData.message || "message",
      testField: formData.testField || "test",
    };

    // Save data to sessionStorage (for Adobe Data Elements)
    sessionStorage.setItem("formSubmit", JSON.stringify(finalData));

    // Dispatch Adobe Launch custom event
    document.dispatchEvent(new CustomEvent("formSubmitComplete"));

    console.log("✅ Form submitted:", finalData);
    console.log("SessionStorage value:", sessionStorage.getItem("formSubmit"));

    alert("Form submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          User Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 mb-1">Gender</label>
            <div className="flex gap-4">
              {["Male", "Female", "Other"].map((g) => (
                <label key={g} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          {/* DOB */}
          <div>
            <label className="block text-gray-700 mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-gray-700 mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 mb-1">Your Message</label>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Test Field */}
          <div>
            <label className="block text-gray-700 mb-1">Test Field</label>
            <input
              type="text"
              name="testField"
              value={formData.testField}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
