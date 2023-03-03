import { createBrowserRouter } from "react-router-dom";
import SingleNote from "../Components/SingleNote/SingleNote";
import Layout from "../Layout/Layout";
import AddNote from "../Pages/AddNote/AddNote";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-notes",
        element: (
          <PrivateRoute>
            <AddNote />
          </PrivateRoute>
        ),
      },
      {
        path: "/note/:id",
        loader: async ({ params }) => {
          return (
            fetch(`http://localhost:8000/api/v1/note/single/${params.id}`)
          )
        },
        element: <SingleNote />
      }
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);
export default router;
