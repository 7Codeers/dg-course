import React from "react";
import photo1 from "../../public/img/Ellipos.png";
import photo2 from "../../public/img/Path291.png";
import fizik from "../../public/img/fizik.svg";
import shimi from "../../public/img/shimi.svg";
import bargh from "../../public/img/bargh.svg";
import sanat from "../../public/img/sanat.svg";
import camputer from "../../public/img/camputer.svg";
import riyazi from "../../public/img/riyazi.svg";
import bazarsaham from "../../public/img/bazarsaham.svg";
import memari from "../../public/img/memari.svg";

const category = [
	{
		color: "#AF2ECC",
		image: memari,
		category: "معماری",
	},
	{
		color: "#FF3320",
		image: riyazi,
		category: "ریاضی",
	},
	{
		color: "#3282D8",
		image: camputer,
		category: "کامپیوتر",
	},
	{
		color: "#32D835",
		image: shimi,
		category: "شیمی",
	},
	{
		color: "#B20000",
		image: bargh,
		category: "برق",
	},
	{
		color: "#20F9FF",
		image: fizik,
		category: "فیزیک",
	},
	{
		color: "#FF9515",
		image: sanat,
		category: "صنعت",
	},
	{
		color: "#FF0065",
		image: bazarsaham,
		category: "بازار سهام",
	},
];
function Category_card() {
	// 	function reveal() {
	// 	let reveals = document.querySelectorAll(".reveal");

	// 	for (let i = 0; i < reveals.length; i++) {
	// 		let windowHeight = window.innerHeight;
	// 		let elementTop = reveals[i].getBoundingClientRect().top;
	// 		let elementVisible = 150;

	// 		if (elementTop < windowHeight - elementVisible) {
	// 			reveals[i].classList.add("opacity-100 translate-y-0");
	// 		} else {
	// 			reveals[i].classList.remove("opacity-100 translate-y-0");
	// 		}
	// 	}
	// }
	// window.addEventListener("scroll", reveal);
	return (
		<div className="grid container items-center justify-center mb-20 m-auto ">
			<img src={photo1} className="absolute -left-20 top-20 -z-10" />
			<img src={photo1} className="absolute -left-20 top-20 -z-10" />
			<img src={photo2} className="absolute left-[30rem] bottom-20 -z-10 " />
			<ul className="grid xl:grid-cols-[repeat(4,minmax(0,18rem))] md:grid-cols-[repeat(2,minmax(0,15rem))] lg:grid-cols-[repeat(4,minmax(0,12rem))] gap-12 px-12">
				{category.map((item) => (
					<li className=" text-center rounded-[25px] justify-center items-center xl:h-64 grid bg-white shadow-[0_0_6px_0_#575757] content-center lg:h-44">
						<img src={item.image} className="xl:w-auto lg:w-[86px]" />
						<span
							style={{ color: `${item.color}` }}
							className={` text-[${item.color}]  font-vazirmatnBold xl:text-3xl pt-1 lg:text-2xl  animate-spin-slow`}>
							{item.category}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Category_card;
