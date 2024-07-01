import { useNavigate, Link } from "react-router-dom";
import ProfileAvatar from "./ProfileAvatar";
import NavMenu from "./NavMenu";

const TopNavBar = () => {
  const navigate = useNavigate();
  // const { signOut, session } = useAuthContext();
  return (
    <header className="sticky top-0 z-50 h-14 w-full border-b">
      <div className="container max-w-2xl mx-auto p-2">
        <div className="flex flex-row items-center space-x-2">
          <div className="flex">
            <NavMenu />
          </div>
          <div className="flex-1 items-center h-full flex">
            <p>Memorable.ai</p>
          </div>
          <div className="flex ">
            <ProfileAvatar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavBar;
