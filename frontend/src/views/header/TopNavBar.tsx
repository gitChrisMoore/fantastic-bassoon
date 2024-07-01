import { useNavigate } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";

const Logo = () => {
  return (
    <>
      <Avatar>
        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
        <AvatarFallback>++</AvatarFallback>
      </Avatar>
    </>
  );
};

const ProfileAvatar = () => {
  return (
    <>
      <Avatar>
        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  );
};

const Profile = () => {
  return <div>Profile Component</div>;
};

const Dropdown = () => {
  return (
    <div>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </div>
  );
};
const TopNavBar = () => {
  const navigate = useNavigate();
  // const { signOut, session } = useAuthContext();
  return (
    <header className="sticky top-0 z-50 h-14 w-full border-b">
      <div className="container max-w-2xl mx-auto p-2">
        <div className="flex flex-row items-center space-x-2">
          <div className="flex bg-blue-400">
            <Logo />
          </div>
          <div className="flex-1 bg-blue-400 items-center h-full flex">asd</div>
          <div className="flex bg-blue-400">
            <ProfileAvatar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavBar;
