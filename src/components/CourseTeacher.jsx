import React from "react";
import ph1 from "../../public/img/photo.png";

const courseteacher = {
	img: ph1,
	name: "استاد بحرالعلوم",
	email: "bahroolom@gmail.com",
	instegram: "bahr_ac",
};
function CourseTeacher() {
	return (
		<>
			<div className="flex flex-col w-96 gap-4 px-6 border rounded-2xl ml-[2.5rem]">
				<div className="flex justify-between mt-5 items-center font-vazirmatnBold text-2xl">
					<svg
						id="icons8-teacher-50"
						xmlns="http://www.w3.org/2000/svg"
						width="24.585"
						height="20.543"
						viewBox="0 0 24.585 20.543">
						<path
							id="Path_777"
							data-name="Path 777"
							d="M3-42.894c0,2,0,2.054,1.13,1.284,1.746-1.233,3.39-.976,5.084.668,1.643,1.695,1.9,3.338.719,5.033-.77,1.079-.719,1.181.514,1.489,1.027.257,1.695,0,2.773-1.027,1.489-1.438,3.082-1.695,4.057-.719,1.181,1.181.668,3.133-1.489,5.649l-2.054,2.465H25.6V-45H3ZM17.894-41.4c0,.308-1.387.514-3.082.514s-3.082-.205-3.082-.514,1.387-.514,3.082-.514S17.894-41.713,17.894-41.4Zm5.136,0c0,.257-.822.514-1.8.514s-1.8-.257-1.8-.514c0-.308.822-.514,1.8-.514S23.03-41.713,23.03-41.4Zm0,2.568c0,.308-2.208.514-5.649.514s-5.649-.205-5.649-.514,2.208-.514,5.649-.514S23.03-39.145,23.03-38.837Z"
							transform="translate(-1.973 45)"
							fill="rgba(0,0,0,0.7)"
						/>
						<path
							id="Path_778"
							data-name="Path 778"
							d="M4.1-36.973a3.327,3.327,0,0,0,2.311,5.649,3.632,3.632,0,0,0,3.338-3.338A3.632,3.632,0,0,0,6.407-38,3.79,3.79,0,0,0,4.1-36.973Z"
							transform="translate(-2.042 41.595)"
							fill="rgba(0,0,0,0.7)"
						/>
						<path
							id="Path_779"
							data-name="Path 779"
							d="M12.556-25.375c-1.181,1.438-1.489,1.592-2.619,1.027a14.183,14.183,0,0,0-4.263-.565C1.616-24.913,1-24.194,1-19.366v3.7H9.217v-5.6l1.592.565c1.438.514,1.695.411,2.773-.924,1.849-2.26,2.465-3.646,2.157-4.52C15.226-27.429,14.045-27.121,12.556-25.375Z"
							transform="translate(-1 36.212)"
							fill="rgba(0,0,0,0.7)"
						/>
						<path
							id="Path_780"
							data-name="Path 780"
							d="M19-8.765v1.284h7.755c7.7,0,7.7,0,7.55-1.181-.154-1.13-.308-1.13-7.7-1.284L19-10.1Z"
							transform="translate(-9.755 28.024)"
							fill="rgba(0,0,0,0.7)"
						/>
					</svg>
					<span>مدرس</span>
				</div>
				<div className="flex items-center justify-end bg-[rgba(0,0,0,0.03)] rounded-[22px] gap-4 text-xl">
					<span >{courseteacher.name}</span>
					<img src={courseteacher.img} className="h-auto w-24 rounded-[22px]" />
				</div>
				<div className="flex justify-end font-vazirmatn">
					<span> راه های ارتباطی</span>
				</div>
				<div className="flex flex-col gap-2 text-sm font-vazirmatnExLight">
					<div className="flex justify-between ">
						<span>{courseteacher.email} </span>
						<span>آدرس ایمیل</span>
					</div>
					<div className="flex justify-between ">
						<span>{courseteacher.instegram} </span>
						<span>اینستاگرام</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default CourseTeacher;
