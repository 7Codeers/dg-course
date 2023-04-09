import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./components/Card";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Services from "./pages/Services";
import Toturials from "./pages/Toturials";
import CardList from "./components/CardList";
import Capacity from "./components/Capacity";
import CardCourseItem from "./components/CardCourseItem";
import PaymentDetails from "./components/PaymentDetails";
import SignupForm from "./pages/sign-up-form/SignupForm";

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
        // { path: "/courses", element:<Courses /> },
        // { path: "/courses", element:<Capacity /> },
        // { path: "/courses", element:<CardCourseItem /> },
        { path: "/courses", element:<PaymentDetails /> },
        { path: "/contact", element:<Contact /> },
        { path: "/contact", element:<Contact /> },
        { path: "/sign-up", element:<SignupForm /> },
      ],
    },
  ]);

  return (
    <div className="rtl">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


// pure function 
// Impure Function 
// SideEffect

// Alireza Naghavi ==> 09102145718


/*/
Some good tips about components that I made until here and mention here which one needs change and which is done
1. <Capacity />: This is component is done and no need more changes 
2. <Input /> : Styling is done but still some work needs to be done about it.
3.



*/