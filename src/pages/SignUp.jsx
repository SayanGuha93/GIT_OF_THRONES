import { useLocation, Navigate } from "react-router-dom";
import NgoSignUp from "../components/NGO-Sign-Up";
import DoctorSignUp from "../components/DOCTOR-Sign-Up";
import HealthWorkerSignUp from "../components/HealthWorkers-Sign-Up";
import PatientSignUp from "../components/Patient-Sign-Up";
import BloodDonorsRole from "../components/BloodDonorsRole"; // if needed

function SignUp() {
  const location = useLocation();
  const state = location.state || {};
  const { role } = state;

  if (!role) {
    // If no role selected, redirect back to role selection page
    return <Navigate to="/role-select" />;
  }

  switch (role) {
    case "ngo":
      return <NgoSignUp />;
    case "doctor":
      return <DoctorSignUp />;
    case "health-worker":
      return <HealthWorkerSignUp />;
    case "patient":
      return <PatientSignUp />;
    case "blood-donor":
      return <BloodDonorsRole />;
    case "admin":
      // Admin sign-up if you have it; else redirect
      return <Navigate to="/" />;
    default:
      return <Navigate to="/role-select" />;
  }
}

export default SignUp;
