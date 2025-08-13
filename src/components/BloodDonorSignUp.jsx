import React, { useState } from "react";

function BloodDonorSignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, password } = formData;
    if (!name || !email || !phone || !password) {
      setError("Please fill all fields.");
      return;
    }
    setError("");
    console.log("Donor Sign-Up Data:", formData);
    alert("Blood Donor Sign-Up submitted!");
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
      <h2>Blood Donor Sign-Up</h2>
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
          Phone:<br />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
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
        {error && <p style={{color:"red"}}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default BloodDonorSignUp;
