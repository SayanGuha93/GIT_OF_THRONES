import React, { useState } from "react";

function DoctorSignUp() {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    location: "",
    email: "",
    password: "",
  });
  const [medicalLicense, setMedicalLicense] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      setError("Please upload a PDF file for the medical license.");
      setMedicalLicense(null);
    } else {
      setError("");
      setMedicalLicense(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, specialization, location, email, password } = formData;

    if (
      !name ||
      !specialization ||
      !location ||
      !email ||
      !password ||
      !medicalLicense
    ) {
      setError("Please fill all fields and upload your medical license.");
      return;
    }

    setError("");
    // Handle submission (e.g. API call)
    console.log({
      ...formData,
      medicalLicense,
    });
    alert("Doctor Sign-Up form submitted!");
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
      <h2>Doctor Sign-Up</h2>
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
          Specialization:<br />
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
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
          Medical License (PDF):<br />
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            required
          />
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

export default DoctorSignUp;
