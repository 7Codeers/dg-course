// aos
// animation
import Aos from 'aos'
import 'aos/dist/aos.css';

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
// import Course_benefit from './components/Course_benefit'
import Info_Card from './components/Info_Card';
// import Timeline_cart from './components/Timeline_cart';
import Information_Course_Card from './components/Information_Course_Card';
import Success_Card from './components/Success_Card';
import CardList from "./components/CardList";
import Capacity from "./components/Capacity";
import CardCourseItem from "./components/CardCourseItem";
import PaymentDetails from "./components/PaymentDetails";
import SignupForm from "./pages/sign-up-form/SignupForm";

function App() {

  Aos.init({
    duration: 2500,
    delay:500
  })

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "/toturials", element:<Info_Card /> },
        { path: "/services", element:<Services /> },
        { path: "/blog", element:<Blog /> },
        { path: "/courses", element:<Success_Card /> },
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

