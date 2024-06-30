// import { lazy } from "react";

import Home from "../views/placeholder/Home";

// Auth
import Signup from "../views/auth/Signup";
import SignIn from "../views/auth/SignIn";

// Dashboard
import LandingPage from "../views/dashboard/LandingPage";

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
  //
  // Dashboard
  //
  {
    id: "dashboard-landing-page",
    component: <LandingPage />,
    path: "/dashboard-landing-page",
  },
];
