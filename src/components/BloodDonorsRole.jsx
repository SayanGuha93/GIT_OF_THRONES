import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BloodDonorsRole() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role) {
      alert("Please select a role");
      return;
    }
    if (role === "donor") {
      navigate("/blood-donate-signup");
    } else if (role === "organizer") {
      navigate("/organizer-signup");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Blood Donors Sign-Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Role:<br />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="" disabled>
              -- Select Role --
            </option>
            <option value="donor">Donor</option>
            <option value="organizer">Organizer</option>
          </select>
        </label>
        <br /><br />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default BloodDonorsRole;
