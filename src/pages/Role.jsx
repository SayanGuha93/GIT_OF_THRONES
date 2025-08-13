import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Role() {
  const navigate = useNavigate();
  const location = useLocation();

  const { name, email, password } = location.state || {};

  const [selectedRole, setSelectedRole] = useState("");

  const handleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedRole) return alert("Please select a role");
    navigate("/signup", {
      state: { name, email, password, role: selectedRole },
    });
  };

  return (
    <div className="auth-page" style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Select Your Role</h2>
      <form onSubmit={handleSubmit}>
        <select value={selectedRole} onChange={handleChange} required>
          <option value="" disabled>
            -- Select Role --
          </option>
          <option value="blood-donor">Blood Donor</option>
          <option value="ngo">NGO</option>
          <option value="health-worker">Health Worker</option>
          <option value="admin">Admin</option>
          <option value="patient">Patient</option>
        </select>
        <br /><br />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default Role;

