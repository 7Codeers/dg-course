import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Services from "./pages/Services";
import Toturials from "./pages/Toturials";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "/toturials", element:<Toturials /> },
        { path: "/services", element:<Services /> },
        { path: "/blog", element:<Blog /> },
        { path: "/courses", element:<Courses /> },
        { path: "/contact", element:<Contact /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
