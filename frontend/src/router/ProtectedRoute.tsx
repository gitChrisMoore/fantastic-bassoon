import { Navigate } from "react-router-dom";
import { useAuthContext } from "@/contexts/AuthProvider";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { session } = useAuthContext();

  if (!session) {
    console.log("No session, redirecting to signin", session);
    return <Navigate to="/auth-signin" />;
  }
  return children;
};

export default ProtectedRoute;
