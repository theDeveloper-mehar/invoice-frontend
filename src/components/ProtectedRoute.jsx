/* Protected Route COmponent

This component protects private routes in website.
It checks if JWT toekn exists in localstorage.
 
if no token is found  , user is redirected to login page 
if token exits the requested componenet is rendered.
this ensuers only authenticated users only */





import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
