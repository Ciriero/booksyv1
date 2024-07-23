import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddBook,
  Admin,
  AllBooks,
  DashboardLy,
  DeleteBook,
  EditBook,
  Error,
  HomeLy,
  Login,
  Profile,
  Register,
  Stats,
  Landing
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLy />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLy />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
