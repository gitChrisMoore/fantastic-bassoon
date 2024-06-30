import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import Home from "../views/placeholder/Home";

export default function Router() {
  return (
    <Suspense fallback={<Home />}>
      <Routes>
        {/* Auto redirect root to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        {/*  @ts-ignore */}
        {routes.map(({ id, component, path }) => (
          <Route key={id} element={component} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
}
