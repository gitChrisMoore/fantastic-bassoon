import { useAuthContext } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

// import { Button } from "@/components/ui/button";
import { Button } from "@components/ui/button";

const AccountManagement = () => {
  const navigate = useNavigate();
  const { signOut, session } = useAuthContext();

  const onSignOut = async () => {
    try {
      await signOut();
      console.log("Signed out successfully!");
      navigate("/auth-signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  console.log(session);

  return (
    <div>
      <h1>Account Management</h1>
      {session && (
        <div>
          <h2>Session Information</h2>
          <p>User ID: {session.user.email}</p>
          <p>Last Signin: {session.user.last_sign_in_at}</p>
        </div>
      )}

      <Button onClick={() => onSignOut()}>Sign Out</Button>
    </div>
  );
};

export default AccountManagement;
