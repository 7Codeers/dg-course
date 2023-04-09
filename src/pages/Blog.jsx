import React from "react";
import { useState } from "react";

const list = [
  {
    title: "JavaScript",
    color: "bg-[yellow]",
  },
  {
    title: "TypeScripy",
    color: "bg-[red]",
  },
  {
    title: "NodeJs",
    color: "bg-[brown]",
  },
  {
    title: "ReactJs",
    color: "bg-[green]",
  },
  {
    title: "Angular",
    color: "bg-[blue]",
  },
  {
    title: "NextJs",
    color: "bg-[olive]",
  },
];

const Blog = () => {
  console.log("Blog Page Rendered!");
  const [displayMode, setDisplayMode] = useState(0);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('purple')


  return (
    <div dir="ltr" className="container grid   items-center mx-auto mt-32">
      <div className="flex flex-col justify-center items-center">
        <div>
          <ul className="flex">
            {list.map((item, index) => (
              <li
                onClick={() => setDisplayMode(index)}
                className="border m-5 py-3 px-5 rounded relative"
              >
                <span>{item.title}</span>
                {index === displayMode && (
                  <div
                    className={`w-full h-[5px] text-center rounded-full absolute bottom-0 left-0 ${item.color}`}
                  ></div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 text-center">
          <div>
            <span className="font-vazirmatnExB text-red-600 text-2xl mr-2">
              Count:
            </span>
            <span className="font-vazirmatnExB text-blue-800 text-2xl">
              {count}
            </span>
          </div>
          <div>
            <button
              onClick={() => {
                console.log("count");
                setCount(count + 1);
              }}
              className="py-2 px-4 bg-teal-500 outline-none font-bold text-white m-2 hover:bg-teal-600"
            >
              Increment
            </button>
            <button
              onClick={() => {
                console.log("count");
                setCount(count - 1);
              }}
              className="py-2 px-4 bg-red-500 outline-none font-bold text-white m-2 hover:bg-red-600"
            >
              Decrement
            </button>
            <button
              onClick={() => {
                console.log("count");
                setCount(0);
              }}
              className="py-2 px-4 bg-yellow-500 outline-none font-bold text-white m-2 hover:bg-yellow-600"
            >
              Reset
            </button>
          </div>
        </div>
        <div className="mt-5 bg-gray-100 flex flex-col p-10">
          <h1>This is a new Section and Example</h1>
          <div className="flex justify-between mt-2 text-white font-bold">
            <div onClick={()=>setColor(color)} className="bg-red-500 p-5">box 1</div>
            <div className="bg-blue-500 p-5">box 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
