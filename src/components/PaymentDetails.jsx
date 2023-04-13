import logo from "../assets/images/logo.png";
import Button from "./button/Button";
import "../components/button/Button.scss";
const PaymentDetails = () => {
	return (
		<div
			dir="rtl"
			className="container mx-auto flex justify-center items-center mt-32">
			<div className="shadow-3xl rounded-2xl">
				<div className="w-[535px] shadow-3xl rounded-xl my-[33px] mx-[35px] ">
					<h1 className="font-vazirmatn text-3xl pr-[20px] pb-[32px] pt-[26px]">
						جزییات پرداخت
					</h1>
					<hr className="border-dashed mx-auto w-11/12" />
					<ul className="pt-8 px-7">
						<li className="flex justify-between bg-lightgrey rounded-3xl mb-5">
							<span className="font-vazirmatnExLight p-[24px]">
								دوره نکست جی اس مقدماتی از صفر تا صد
							</span>
							<div className="p-[24px]">
								<span className="font-shabnam text-lg">90,000</span>
								<span className="font-vazirmatnExLight text-lg mr-1">
									تومان
								</span>
							</div>
						</li>
						<li className="flex justify-between bg-lightgrey rounded-3xl  mb-5">
							<span className="font-vazirmatnExLight p-[24px]">
								دوره نکست جی اس مقدماتی از صفر تا صد
							</span>
							<div className="p-[24px]">
								<span className="font-shabnam text-lg">90,000</span>
								<span className="font-vazirmatnExLight text-lg mr-1">
									تومان
								</span>
							</div>
						</li>
					</ul>
					<hr className="border-dashed mx-auto w-11/12" />
					<div className="flex justify-between items-center px-7 py-9">
						<span className="font-vazirmatnExLight text-xl">
							مبلغ قابل پرداخت
						</span>
						<div className="text-light-purple ">
							<span className="font-shabnamBold text-3xl">300,000</span>
							<span className="font-vazirmatnExLight text-lg">تومان</span>
						</div>
					</div>
					<hr className="border-dashed mx-auto w-11/12" />
					<div className="px-7">
						<div className="flex items-center  pt-[32px] pb-[9px]">
							<span className="font-vazirmatnExLight text-xl">
								پرداخت از درگاه زرین پال
							</span>
							<span>
								<img src={logo} alt="" />
							</span>
						</div>
						<div className="flex items-center">
							<input type="checkbox" />
							<span className="font-vazirmatnExLight text-lg mr-2">
								من شرایط و مقررات سایت را خوانده ام و آن را میپذیرم
							</span>
						</div>
						<div className="text-center pt-[38px] pb-[36px]">
							<Button buttonType={"paymentButton"}>ثبت سفارش</Button>
							{/* <button className="bg-green-btn w-[415px] font-vazirmatnExLight text-xl text-white pt-[18px] pb-[24px] rounded-2xl">
                ثبت سفارش
              </button> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentDetails;
