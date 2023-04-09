import React, { useState } from "react";
import Card from "../components/Card";
import CardList from "../components/CardList";
import wrap from "../assets/images/wrap.png";
import menuu from "../assets/images/menuu.png";

const Courses = () => {
  const [displayMode, setDisplayMode] = useState("box");

  // when i get to this page the first state is on the box mode if I click on the list mode
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 gap-5 mt-32">
        <h1 className="text-center rounded-3xl shadow-3xl mx-auto text-[40px] px-[114px] py-[29px] font-vazirmatnBold">
          دوره ها
        </h1>
        <div className="flex justify-between rounded-xl mb-16">
          <ul className="flex rounded-3xl shadow-3xl py-4 px-5">
            <li
              onClick={() => setDisplayMode("box")}
              className="flex flex-col items-center ml-4 relative pr-[22px]"
            >
              <img
                className="cursor-pointer"
                src={wrap}
                alt="wrap-courses in page"
              />
              {displayMode !== "list" && (
                <div className="w-[37px] bg-grey h-[5px] text-center rounded-full absolute bottom-[-12px] right-[21px]"></div>
              )}
            </li>
            <li
              onClick={() => setDisplayMode("list")}
              className="flex flex-col items-center relative pl-[22px]"
            >
              <img className="cursor-pointer" src={menuu} alt="list courses" />
              {displayMode !== "box" && <div className="w-[40px] bg-grey h-[5px] text-center rounded-full absolute bottom-[-12px] left-[25px]"></div>}
            </li>
          </ul>
          <div className="rounded-3xl shadow-3xl py-4 px-9 flex justify-center">
            <select name="" id="" className="outline-none">
              <option value="">5</option>
              <option value="">5</option>
              <option value="">5</option>
              <option value="">5</option>
            </select>
          </div>
        </div>

        {displayMode === "box" ? <Card /> : <CardList />}
      </div>
    </div>
  );
};

export default Courses;



/*

Initial State ==> box at first it is on the box mode 
setState ==> I will have to change the state of this const 
setDisplayMode('box)==> box 
displayMode !== "list" && <div></div>


state ==> box 
li ==> menu (List) ==> state must change to this list format 
state must change now we have to set a new state using the useState 
const [displayMode, setDisplayMode] = useState('box')



*/