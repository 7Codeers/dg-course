import { NavLink } from "react-router-dom";

const SubMenu = () => {

  return (
    <ul className="items-center gap-4 hidden lg:flex"
     
      variants={variants}
      initial="initial"
      animate="animate">

      <li variants={subMenuVariants} className="flex items-center justify-center">
        <NavLink
          className="flex items-center justify-center py-[10px] px-[12px] bg-custom-third-button-bg bg-opacity-80 text-primary  rounded-[50px] overflow-hidden w-[60px] h-[60px]">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-primary text-lg block w-full h-full"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </motion.svg>
        </NavLink>
      </li>
      <li variants={subMenuVariants} className="flex items-center justify-center">
        <NavLink className="flex items-center justify-center py-[10px] px-[12px] bg-custom-third-button-bg text-primary  rounded-[50px] overflow-hidden w-[142px] h-[60px]">
          ثبت نام
        </NavLink>
      </li>
      <li variants={subMenuVariants} className="flex items-center justify-center">
        <button onClick={clickHandler} className="flex items-center justify-center py-[10px] px-[12px] bg-custom-third-button-bg bg-opacity-80 text-primary  rounded-[50px] overflow-hidden w-[142px] h-[60px]">
          ورود
        </button>
      </li>
      <li variants={subMenuVariants} className="flex items-center justify-center">
        <NavLink variants={subMenuVariants} className="flex items-center justify-center py-[10px] px-[12px] bg-custom-third-button-bg bg-opacity-80 text-primary  rounded-[50px] overflow-hidden w-[60px] h-[60px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-primary text-lg block w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </NavLink>
      </li>
    </ul>
  );
};

export default memo(SubMenu);
