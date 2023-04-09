import { Link } from "react-router-dom";
import signup from "../../assets/images/signup.png";
import path from "../../assets/images/path.png";
import Input from "../../components/inputs/Input";
import "./SignupForm.css";
import Button from "../../components/button/Button";
import DateInput from "../../components/inputs/DateInput";
import "../../components/button/Button.scss";
import { useState } from "react";
import { passwordValidation } from "../../utils/validation";

const initialFormInputs = {
  name: "",
  email: "",
  password: "",
  nationalCode: "",
  mobile: "",
  date: "",
};

const SignupForm = () => {
  const [formInputs, setFormInputs] = useState(initialFormInputs);
  const { name, email, password, nationalCode, mobile, date } = formInputs;

  const [error, setError] = useState(false);

  const resetFormInputs = () => {
    setFormInputs(initialFormInputs);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

  

    if (!passwordValidation(password)) setError(true);

    
  };

  // @Dev tracking the values of the inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  //@Dev reset sing up inptus
  return (
    <div className="">
     
      <div className="container mx-auto flex justify-center items-center mt-32 ">
        <div className="flex flex-col items-center justify-center shadow-3xl rounded-2xl w-[535px] relative isolate">
      <div className="absolute inset-0 -z-10">
            <img src={path} alt="" />
          </div>
          <div className="pt-[26px]">
            <img src={signup} alt="signup icon" />
          </div>
          <h1 className="font-vazirmatnBold text-2xl text-center mb-[51px]">
            ثبت نام
          </h1>
          <form className="relative w-min" onSubmit={handleSubmit}>
            <Input
              placeholder="نام و نام خانوادگی"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              error={error}
              errorMessage="نام و نام خانوادگی را وارد نمایید"
            />

            <Input
              placeholder="ایمیل"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              error={error}
              errorMessage="ایمیل رو وارد نمایید."
            />

            <Input
              placeholder="رمز عبور"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              error={error}
              errorMessage="رمز عبور خود را وارد کنید."
            />

            <Input
              placeholder="کد ملی"
              type="text"
              name="nationalCode"
              value={nationalCode}
              onChange={handleChange}
              error={error}
              errorMessage=".کد ملی وارد شده صحبح نمیباشد"
            />

            <Input
              placeholder="شماره موبایل"
              type="text"
              name="mobile"
              value={mobile}
              onChange={handleChange}
              error={error}
              errorMessage="شماره موبایل وارد شده صحیح نمی باشد."
            />

            <DateInput name="date" value={date} />

            <Button buttonType={"form-sign-up-button"}>ثبت نام</Button>
          </form>
          <Link
            to="/sign-in"
            className="text-lg font-vazirmatnLight mt-2 mb-8 text-link-blue"
          >
            ورود به حساب کاربری
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

// import { useRef } from "react";

// export default function App() {
//   const ref = useRef();
//   return (
//     <div>
//       <input
//         type="text"
//         ref={ref}
//         onChange={(e) => console.log(e.target.value)}
//         onFocus={() => (ref.current.type = "date")}
//         onBlur={() => (ref.current.type = "text")}
//       />
//     </div>
//   );
// }
