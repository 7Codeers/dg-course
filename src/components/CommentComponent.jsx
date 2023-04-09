import React, { useState } from "react";
import ph1 from "../../public/img/photo_1R.png";
import ph2 from "../../public/img/photo_2R.png";

const Component = [
	{
		name: "استاد بحر",
		hours: " 4 ساعت پیش",
		text: "چیییییییییی آفرین به خانم دارابی مثل اینکه هم گروهیاتو کچل نکردی اونا کچلت کردن ",
		img: ph1,
		like: "5",
		dislike: "2",
	},
	{
		name: "استاد نظری ",
		hours: " 6 ساعت پیش",
		text: "به به چه دیزاین زیبایی, دست دیزاینرتون درد نکنه,خیلی خیلی زیبا شده , به به به به",
		img: ph2,
		like: "8",
		dislike: "1",
	},
];
function CommentComponent() {
	const [massage, setMassage] = useState("");
	const handleChange = (e) => {
		setMassage(e.target.value);
	};
	const handdelerClick = () => {
		alert(massage);
	};
	return (
		<div className=" w-[50rem]  xl:w-[64rem] lg:w-[40rem]  justify-end flex flex-col">
			<div className=" w-full flex  px-8  font-vazirmatnBold text-2xl justify-end gap-10 ">
				<div className="px-10 py-5 shadow-[0_0_8px_0_#d3d3d3] rounded-t-[20px] bg-[#F6F6F6] flex items-center gap-1">
					<span className="font-vazirmatnMedium px-3 py-0 rounded-full bg-[#FF0000] text-white text-[16px]">
						{Component.length}
					</span>
					نظرات
				</div>
				<div className="px-10 py-5 shadow-[0_0_8px_0_#d3d3d3] rounded-t-[20px]  bg-white">
					{" "}
					توضیحات
				</div>
			</div>
			<div className="w-full flex flex-col items-center justify-center px-8 gap-7 font-vazirmatn bg-[#F6F6F6] py-12 shadow-[0_0_3px_0_#d3d3d3] rounded-[20px]">
				{Component.map((item) => {
					return (
						<div className="w-full flex flex-row-reverse text-right rounded- ">
							<div>
								<img src={item.img} className="absolute z-10 -translate-x-16" />
							</div>

							<div className="w-full bg-white relative flex flex-col justify-around mr-[3.5rem] pr-14 shadow-[0_0_9px_0_#d3d3d3] borer rounded-[20px_0px_50px_20px] gap-4 py-7">
								{/* <div className="w-[50px]  h-[100px] bg-white absolute -top-1  -right-10 "></div> */}
								<div className="w-[50px]  h-[150px] bg-[#F6F6F6] absolute -top-0 rounded-full -right-8 border-l-[#d3d3d3]"></div>
								<div>
									<span>{item.name}</span>
									<span>|</span>
									<span>{item.hours}</span>
								</div>
								<div>
									<span>{item.text}</span>
								</div>

								<div className="flex justify-end gap-4">
									<div className="flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="15.165"
											height="14.443"
											viewBox="0 0 15.165 14.443">
											<g id="Page-1" transform="translate(0.001)">
												<g
													id="Dribbble-Light-Preview"
													transform="translate(-0.001)">
													<g id="icons">
														<path
															id="like-_1385_"
															data-name="like-[#1385]"
															d="M218.165,600h-3.033v8.666h3.033Zm-15.11,6.243,1.316-4.719A2.051,2.051,0,0,1,206.392,600h7.223v8.651l-1.3,4.475a1.64,1.64,0,0,1-3.246-.237v-4.223h-3.991a2,2,0,0,1-2.021-2.423Z"
															transform="translate(-203 -600)"
															fill="#ec0a19"
															fill-rule="evenodd"
														/>
													</g>
												</g>
											</g>
										</svg>
										<span className="text-[#EC0A19]">{item.like}</span>
									</div>
									<div className="flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="15.165"
											height="14.443"
											viewBox="0 0 15.165 14.443">
											<g id="Page-1" transform="translate(-0.001)">
												<g
													id="Dribbble-Light-Preview"
													transform="translate(0.001)">
													<g id="icons">
														<path
															id="like-_1385_"
															data-name="like-[#1385]"
															d="M203,614.443h3.033v-8.666H203Zm15.111-6.243-1.316,4.719a2.051,2.051,0,0,1-2.021,1.524H207.55v-8.651l1.3-4.475a1.64,1.64,0,0,1,3.246.237v4.223h3.991a2,2,0,0,1,2.021,2.423Z"
															transform="translate(-203 -600)"
															fill="#36c54e"
															fill-rule="evenodd"
														/>
													</g>
												</g>
											</g>
										</svg>
										<span className="text-[#36C54E]">{item.dislike}</span>
									</div>
								</div>
							</div>
						</div>
					);
				})}
				<div className="w-full  h-40 shadow-[0_0_3px_0_#d3d3d3] rounded-[20px] relative">
					<textarea
						onChange={handleChange}
						class=" w-full h-full rounded-[20px]  resize-none border border-blue-gray-200 border-t-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#C262D7]  focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"></textarea>
					<span class="absolute right-5 top-3 text-[14px] text-[rgba(0,0,0,0.4)]">
						نوشتن پیام
					</span>
				</div>
				<button
					onClick={handdelerClick}
					className="w-full font-vazirmatnBold text-center text-white py-2  shadow-[0_0_3px_0_#d3d3d3] rounded-[20px] bg-[#36C54E]">
					ارسال متن
				</button>
			</div>
		</div>
	);
}

export default CommentComponent;
