import React from "react";
import Button from "./button/Button";
import "../components/button/Button.scss";
function Checkoutcard() {
	return (
		<div
			dir="rtl"
			className="container mx-auto flex justify-center items-center mt-32">
			<div className="shadow-3xl rounded-2xl">
				<div className="w-[535px] shadow-3xl rounded-xl my-[33px] mx-[35px] ">
					<h1 className="font-vazirmatn text-3xl pr-[20px] pb-[32px] pt-[26px]">
						اطلاعات پرداخت
					</h1>
					<hr className="border-dashed mx-auto w-11/12" />
					<ul className="pt-8 px-7">
						<li className="relative h-[60px] flex  bg-lightgrey rounded-3xl  mb-5 w-full">
							<input
								placeholder="کد تخفیف خود را وارد کنید"
								className="shadow-3xl  rounded-lg w-full placeholder:font-vazirmatn   pr-4"
							/>

							<span className="absolute font-vazirmatn p-2 rounded-xl text-lg bg-[#A542C0] text-white left-4 top-2">
								اعمال تخفیف
							</span>
						</li>
					</ul>
					<hr className="border-dashed mx-auto w-11/12" />
					<div className="flex justify-between items-center px-7 py-9">
						<span className="font-vazirmatnExLight text-xl">جمع</span>
						<div className="text-[#666666] ">
							<span className="font-shabnamBold text-3xl">360,000</span>
							<span className="font-vazirmatnExLight text-lg">تومان</span>
						</div>
					</div>
					<div className="flex justify-between items-center px-7 py-9">
						<span className="font-vazirmatnExLight text-xl">تخفیف</span>
						<div className="text-[#666666] ">
							<span className="font-shabnamBold text-3xl">60,000</span>
							<span className="font-vazirmatnExLight text-lg">تومان</span>
						</div>
					</div>
					<div className="flex justify-between items-center px-7 py-9">
						<span className="font-vazirmatnExLight text-xl">مجموع کل</span>
						<div className="text-[#666666] ">
							<span className="font-shabnamBold text-3xl">300,000</span>
							<span className="font-vazirmatnExLight text-lg">تومان</span>
						</div>
					</div>
					<hr className="border-dashed mx-auto w-11/12" />
					<div className="px-7">
						<div className="flex justify-between items-center px-7 py-9">
							<span className="font-vazirmatnExLight text-xl">مجموع کل</span>
							<div className="text-light-purple ">
								<span className="font-shabnamBold text-4xl">300,000</span>
								<span className="font-vazirmatnExLight text-lg">تومان</span>
							</div>
						</div>

						<div className="text-center pt-[38px] pb-[36px]">
							<Button buttonType={"paymentButton"}>تکمیل فرایند خرید</Button>
							{/* <button className="bg-green-btn w-[415px] font-vazirmatnExLight text-xl text-white pt-[18px] pb-[24px] rounded-2xl">
                ثبت سفارش
              </button> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Checkoutcard;
