import { useRef } from "react";
import calendar from "../../assets/images/calendar.png";
import "./DateInput.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = (props) => {
  const ref = useRef();

  return (
    <div
      className="relative"
      onClick={() => {
        ref.current.type = "date";
        ref.current.showPicker();
      }}
    >
      <img
        src={calendar}
        alt="calendar icon"
        className="absolute z-30 left-[15px] top-[15px]"
      />
      <input
        placeholder={props.placeholder}
        className="form-input pl-16 text-right"
        type="text"
        ref={ref}
        onChange={(e) => console.log(e.target.value)}
        onBlur={() => (ref.current.type = "text")}
      />
      <div className="w-full h-[40px] text-right pr-5 pt-1">
        <span className="text-red-500 font-vazirmatnBold mb-5"></span>
      </div>
    </div>
  );
};

export default DateInput;
