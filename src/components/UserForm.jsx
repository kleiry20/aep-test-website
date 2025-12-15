import React, { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nationality: "",
    age: "",
    gender: "",
    dob: "",
    company: "",
    customMessage: "",
    customNumber: "",
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
      firstName: formData.firstName || "Joe",
      lastName: formData.lastName || "Keery",
      email: formData.email || "email@test.com",
      nationality: formData.nationality || "Indian",
      age: formData.age || 0,
      gender: formData.gender || "Male",
      dob: formData.dob || "2018-01-12",
      company: formData.company || "company",
      customMessage: formData.customMessage || "customMessage",
      customNumber: formData.customNumber || "test",
    };

    // Save data to sessionStorage (for Adobe Data Elements)
    sessionStorage.setItem("formSubmit", JSON.stringify(finalData));

    // Dispatch Adobe Launch custom event
    document.dispatchEvent(new CustomEvent("formSubmitComplete"));

    console.log("Form submitted:", finalData);
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
            <label className="block text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
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

          {/* Nationality */}
          <div>
            <label className="block text-gray-700 mb-1">Nationality</label>
            <input
              type="text"
              name="nationality"
              required
              value={formData.nationality}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Age */}
          {/* <div>
            <label className="block text-gray-700 mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div> */}

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

          {/* customMessage */}
          <div>
            <label className="block text-gray-700 mb-1">
              Your customMessage
            </label>
            <input
              type="text"
              name="customMessage"
              value={formData.customMessage}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* customNumber */}
          <div>
            <label className="block text-gray-700 mb-1">Custom Number</label>
            <input
              type="text"
              name="customNumber"
              value={formData.customNumber}
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
