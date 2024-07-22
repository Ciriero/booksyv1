import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>HOME</h1>
  },
  {
    path: "/about",
    element: <h5>About</h5>
  }
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App