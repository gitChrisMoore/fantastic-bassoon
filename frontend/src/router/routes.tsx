// import { lazy } from "react";

import Home from "../views/placeholder/Home";

// Auth
import Signup from "../views/auth/Signup";
import SignIn from "../views/auth/SignIn";
import AccountManagement from "../views/auth/AccountManagement/AccountManagement";

// Dashboard
import LandingPage from "../views/dashboard/LandingPage";
import ProtectedRoute from "./ProtectedRoute";

export const routes = [
  ,
  {
    id: "home",
    component: <Home />,
    path: "/home",
  },
  //
  // Auth
  //
  {
    id: "auth-signup",
    component: <Signup />,
    path: "/auth-signup",
  },
  {
    id: "auth-signin",
    component: <SignIn />,
    path: "/auth-signin",
  },
  {
    id: "auth-account-management",
    component: (
      <ProtectedRoute>
        <AccountManagement />
      </ProtectedRoute>
    ),
    path: "/auth-account-management",
  },
  //
  // Dashboard
  //
  {
    id: "dashboard-landing-page",
    component: (
      <ProtectedRoute>
        <LandingPage />
      </ProtectedRoute>
    ),
    path: "/dashboard-landing-page",
  },
];
