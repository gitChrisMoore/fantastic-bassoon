import { useAuthContext } from "../../contexts/AuthProvider";

const LandingPage: React.FC = () => {
  const { session } = useAuthContext();

  console.log(session);

  return (
    <div>
      <h1>Loggied In</h1>
    </div>
  );
};

export default LandingPage;
