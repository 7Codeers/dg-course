import nest from "../assets/images/nest.png";
import Star from "./Star";
import group66 from "../assets/images/Group 66.png";

const Card = () => {
  const cards = [
    {
      id: "1",
      title: "دوره آموزشی نست جی اس",
      instructor: "مهدی محمدزاده",
      rating: "74,7893",
      price: "854800",
    },
    {
      id: "2",
      title: "دوره آموزشی وی اس کد",
      instructor: "مهدی علوی",
      rating: "12,458",
      price: "15200",
    },
    {
      id: "3",
      title: "دوره آموزشی گراف اس کیو ال",
      instructor: "همایون مسعودی",
      rating: "74,7893",
      price: "854800",
    },
    {
      id: "4",
      title: "دوره آموزشی ری اکت",
      instructor: "مهدی محمدزاده",
      rating: "74,7893",
      price: "854800",
    },
    {
      id: "5",
      title: "دوره آموزشی نکست جی اس",
      instructor: "علی تقوایی",
      rating: "74,7893",
      price: "854800",
    },
    {
      id: "6",
      title: "دوره آموزشی نود جی اس", 
      instructor: "احسان مولایی ",
      rating: "74,7893",
      price: "854800",
    },
    {
      id: "7",
      title: "دوره آموزشی تیلویند سی اس اس",
      instructor: "امین یغمایی ",
      rating: "74,7893",
      price: "854800",
    },
    {
      id: "8",
      title: "دوره آموزشی ری اکت نیتیو",
      instructor: "علی محمدعلیزاده",
      rating: "85وو450",
      price: "98700",
    },
  ];

  return (
    <div
      dir="rtl"
      className="container mx-auto grid grid-cols-12 gap-5 justify-center mt-32"
    >
      {cards.map((item) => {
        return (
          <div className="flex flex-col col-span-3 justify-center shadow-3xl rounded-2xl p-7">
            <div>
              <img className="w-[330px] h-[205px]" src={nest} alt="" />
            </div>
            <h1 className="mt-5  font-vazirmatn text-2xl">{item.title}</h1>
            <div className="flex justify-between items-center">
              <div className="mt-14 flex flex-col">
                <span className="font-vazirmatnLight mb-[25px]">
                  {item.instructor}
                </span>
                <div className="flex  mb-[21px]">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <span className="font-shabnam">({item.rating})</span>
                </div>
                <div className="flex justify-center items-center w-[127px] rounded-full border-green border-2">
                  <span className="text-green font-shabnamBold text-xl">
                    {item.price}
                  </span>
                  <span className="text-green font-vazirmatn">تومان</span>
                </div>
              </div>
              {/* This vertical list starts */}
              <div className="mt-14">
                <ul className="rounded-3xl py-3 shadow-3xl text-center h-[116px]">
                  <li className="p-1 w-[47px]">
                    <img className="m-auto" src={group66} alt="" />
                  </li>
                  <li className="p-1 bg-lightgrey w-[47px]  font-shabnamBold text-light-gray text-xl">
                    55
                  </li>
                  <li className="p-1 w-[47px] font-shabnamBold text-light-gray text-xl">
                    33
                  </li>
                </ul>
              </div>
              {/* That vertical list ends  */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

