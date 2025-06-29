import { useState } from "react";

export default function Report() {
  const [formData, setFormData] = useState({
    animal: "",
    condition: "",
    location: "",
    description: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", formData);
    
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">Report a Stray Animal</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Animal Type */}
        <select
          name="animal"
          value={formData.animal}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Select Animal</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Other">Other</option>
        </select>

        {/* Condition */}
        <input
          name="condition"
          type="text"
          placeholder="Condition (injured, hungry...)"
          value={formData.condition}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />

        {/* Location */}
        <input
          name="location"
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Additional details"
          value={formData.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        {/* Photo Upload */}
        <input
          name="photo"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
}
