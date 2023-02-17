import React, { ReactNode, useContext } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      // <div className="h-3/4 w-full flex justify-center items-center mt-20">
      //   <ThreeCircles
      //     height="150"
      //     width="150"
      //     color="#3075FF"
      //     wrapperStyle={{}}
      //     wrapperclassName=""
      //     visible={true}
      //     ariaLabel="three-circles-rotating"
      //     outerCircleColor=""
      //     innerCircleColor=""
      //     middleCircleColor=""
      //   />
      // </div>
      <p> </p>
    );
  }
  if (!user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
