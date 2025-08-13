import React, { useState } from "react";

function NgoSignUp() {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    password: "",    // Added password here
  });
  const [registrationCertificate, setRegistrationCertificate] = useState(null);
  const [trustees, setTrustees] = useState("");
  const [error, setError] = useState("");

  const handleContactChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      setError("Please upload a PDF file.");
      setRegistrationCertificate(null);
    } else {
      setError("");
      setRegistrationCertificate(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (
      !contactInfo.email ||
      !contactInfo.phone ||
      !contactInfo.password ||    // Validate password as well
      !registrationCertificate ||
      !trustees
    ) {
      setError("Please fill all fields and upload a valid PDF.");
      return;
    }
    setError("");
    // Here you can handle submission logic, like sending data to backend
    console.log({
      contactInfo,
      registrationCertificate,
      trustees,
    });
    alert("NGO Sign-Up form submitted!");
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
      <h2>NGO Sign-Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:<br />
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleContactChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Phone Number:<br />
          <input
            type="tel"
            name="phone"
            value={contactInfo.phone}
            onChange={handleContactChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Password:<br />
          <input
            type="password"
            name="password"
            value={contactInfo.password}
            onChange={handleContactChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Registration Certificate (PDF):<br />
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Name of Trustees:<br />
          <input
            type="text"
            value={trustees}
            onChange={(e) => setTrustees(e.target.value)}
            placeholder="Enter trustee names separated by commas"
            required
          />
        </label>
        <br /><br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Apply</button>
      </form>
    </div>
  );
}

export default NgoSignUp;
