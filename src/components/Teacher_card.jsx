import React from "react";
import ph1 from "../../public/img/photo.png";
import ph2 from "../../public/img/photo_2.png";
import ph3 from "../../public/img/photo_3.png";
import ph4 from "../../public/img/photo_4.png";
import teachercard from "../../public/img/teachercard.svg";
import teachercardright from "../../public/img/teacher_cardright.svg";
import WomanSvg from "./WomanSvg";

const TeachersCard = [
	{
		img: ph2,
		name: "دکتر بحر العلوم",
		course: "مدیریت",
		Description:
			"مدرس در آموزشگاه  , مدرس در دانشگاه علم و فناوری مازندران مستقر در بهشهر , مدرس دوره های وب",
	},
	{
		img: ph3,
		name: "دکتر بحر العلوم",
		course: "مدیریت",
		Description:
			"مدرس در آموزشگاه  , مدرس در دانشگاه علم و فناوری مازندران مستقر در بهشهر , مدرس دوره های وب",
	},
	{
		img: ph4,
		name: "دکتر بحر العلوم",
		course: "مدیریت",
		Description:
			"مدرس در آموزشگاه  , مدرس در دانشگاه علم و فناوری مازندران مستقر در بهشهر , مدرس دوره های وب",
	},
];
function Teacher_card() {
	return (
		<div className="content-center flex flex-col items-center relative">
			<img src={teachercard} className="absolute -left-16 overflow-hidden  top-[12rem]" />
			<img
				src={teachercardright}
				className="absolute right-0 overflow-hidden bottom-4"
			/>
			<div className="newsTitleOstad mb-12">
				<span className="text-[40px] font-vazirmatnBold">اساتید برتر</span>
				<span>استادای مهربون و دوستداشتنی</span>
			</div>

			<div className="flex flex-row-reverse rounded-[25px] justify-end items-center w-[53rem]  mx-96 h-80 bg-white shadow-[0_0_6px_0_#575757] content-center">
				<div className="flex flex-col  px-12 gap-2 translate-x-28">
					<span className={` font-vazirmatnBold text-4xl pt-1 `}>
						دکتر بحر العلوم
					</span>
					<span className={` font-vazirmat text-[1.75rem] pt-1 `}>مدیریت </span>
					<span className="text-gray-500 font-vazirmatn text-xl ">
						مدرس در آموزشگاه , مدرس در دانشگاه علم و فناوری مازندران مستقر در
						بهشهر , مدرس دوره های وب
					</span>
				</div>
				<img className="img translate-x-28" src={ph1} />
			</div>

			<div className="flex rounded-[25px] pt-48 content-center gap-12  justify-center">
				{TeachersCard.map((item) => (
					<div className="flex flex-row-reverse  rounded-[25px] w-[29rem] justify-end items-center bg-white shadow-[0_0_6px_0_#575757] content-center">
						<div className="pr-5 flex flex-col gap-2 -translate-x-8">
							<span className={` font-vazirmatnBold text-xl pt-1 `}>
								{item.name}
							</span>
							<span className={` font-vazirmat text-xl pt-1 `}>
								{item.course}
							</span>
						</div>
						<div className="flex -translate-y-12 -translate-x-8">
							<img src={item.img} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Teacher_card;
