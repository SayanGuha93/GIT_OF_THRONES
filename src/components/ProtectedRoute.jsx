import { Navigate } from "react-router-dom";

// Mocked user role — in real app, get this from authentication context or backend
const mockUser = {
  role: "admin", // change to "ngo", "blood-donor", "health-worker" to test
};

function ProtectedRoute({ children, requiredRole }) {
  if (!mockUser || mockUser.role !== requiredRole) {
    // Redirect to Sign In if not authorized
    return <Navigate to="/signin" replace />;
  }
  return children;
}

export default ProtectedRoute;