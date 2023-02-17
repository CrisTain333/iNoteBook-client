import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute: any = ({ children }: any) => {
  const location = useLocation();
  if (!localStorage.getItem("iNoteAuthToken")) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
