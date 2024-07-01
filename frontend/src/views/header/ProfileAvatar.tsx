import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";

const ProfileAvatar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div onClick={toggleDropdown} className="cursor-pointer">
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      {isOpen && (
        <div className="absolute bg-white right-0 mt-2 py-2 w-48 rounded-md shadow-xl z-50">
          <Link
            to="/auth-signin"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign In
          </Link>
          <Link
            to="/auth-signup"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign Up
          </Link>
          <Link
            to="/auth-account-management"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Account Management
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
