import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Sign-In";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Donate from "./pages/donate";
import Role from "./pages/Role";
import SignUp from "./pages/SignUp";  // new component you will create

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/role-select" element={<Role />} />  {/* role selector */}
        <Route path="/signup" element={<SignUp />} />   {/* dynamic signup based on role */}
        <Route path="/donate" element={<Donate />} />
        {/* Protected Admin Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
