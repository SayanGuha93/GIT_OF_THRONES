import React, { useState } from "react";

function HealthWorkerSignUp() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    helpType: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, location, helpType, email, password } = formData;

    if (!name || !location || !helpType || !email || !password) {
      setError("Please fill all the fields.");
      return;
    }

    setError("");
    // Handle form submission (API call or whatever you want)
    console.log(formData);
    alert("Health Worker Sign-Up form submitted!");
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
      <h2>Health Worker Sign-Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:<br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />

        <label>
          Location:<br />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />

        <label>
          Type of Help:<br />
          <select
            name="helpType"
            value={formData.helpType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              -- Select an option --
            </option>
            <option value="volunteer">Volunteer</option>
            <option value="medicine-provider">Medicine Provider</option>
            <option value="others">Others</option>
          </select>
        </label>
        <br /><br />

        <label>
          Email:<br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />

        <label>
          Password:<br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default HealthWorkerSignUp;
