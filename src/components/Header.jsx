import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // This is a test template for navbar
  //@Dev Please modify the code as you want
  const navItems = [
    { title: "تماس با ما", to: "/contact" },
    { title: "دوره ها", to: "/courses" },
    { title: "خدمات", to: "/blog" },
    { title: "بلاگ", to: "/services" },
    { title: "آموزش", to: "/toturials" },
    { title: "خانه", to: "/" },
    { title: "ثبت نام", to: "/sign-up" },
  ];

  return (
    <nav className="bg-red-100">
      <ul className="flex flex-row">
        {navItems.map((nav, index) => {
          return (
            <li key={`navItem-${index}`}>
              <Link className="m-2" to={nav.to}>{nav.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
