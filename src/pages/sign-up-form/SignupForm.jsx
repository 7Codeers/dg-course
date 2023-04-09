import { Link } from "react-router-dom";
import signup from "../../assets/images/signup.png";
import Input from "../../components/inputs/Input";
import "./SignupForm.css";
import Button from "../../components/button/Button";
import DateInput from "../../components/inputs/DateInput";
import "../../components/button/Button.scss";
import { useState } from "react";
import {
  emailValidation,
  mobileValidation,
  nameValidation,
  nationalCodeValidation,
  passwordValidation,
} from "../../utils/validation";

const initialFormInputs = {
  name: "",
  email: "",
  password: "",
  nationalCode: "",
  mobile: "",
  date: "",
};

const initialErrorInputs = {
  nameError: "",
  emailError: "",
  passwordError: "",
  nationalCodeError: "",
  mobileError: "",
  dateError: "",
};

const SignupForm = () => {
  const [formInputs, setFormInputs] = useState(initialFormInputs);
  const [errorForm, setErrorForm] = useState(initialErrorInputs);

  const { name, email, password, nationalCode, mobile, date } = formInputs;
  const {
    nameError,
    emailError,
    passwordError,
    nationalCodeError,
    mobileError,
    dateError,
  } = errorForm;

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formInputs);

    // Validation

    if (!nameValidation(name).isValid)
      return setErrorForm({
        ...errorForm,
        nameError: nameValidation(name).message,
      });
    if (!emailValidation(email).isValid)
      return setErrorForm({
        ...errorForm,
        emailError: emailValidation(email).message,
      });
    if (!passwordValidation(password).isValid)
      return setErrorForm({
        ...errorForm,
        passwordError: passwordValidation(password).message,
      });
    if (!nationalCodeValidation(nationalCode).isValid)
      return setErrorForm({
        ...errorForm,
        nationalCodeError: nationalCodeValidation(nationalCode).message,
      });
    if (!mobileValidation(mobile).isValid)
      return setErrorForm({
        ...errorForm,
        mobileError: mobileValidation(mobile).message,
      });
  };

  // @Dev tracking the values of the inputs
  const handleChange = (event) => {
    setErrorForm(initialErrorInputs)
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  //@Dev reset sing up inptus
  return (
    <div className="">
      <div className="container mx-auto flex justify-center items-center mt-7">
        <div className="flex flex-col items-center justify-center shadow-3xl rounded-2xl w-[535px]">
          <div className="pt-[26px]">
            <img src={signup} alt="signup icon" />
          </div>
          <h1 className="font-vazirmatnBold text-2xl text-center mb-[51px]">
            ثبت نام
          </h1>
          <form className="w-min" onSubmit={handleSubmit}>
            <Input
              placeholder="نام و نام خانوادگی"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              errorMessage={nameError}
            />

            <Input
              placeholder="ایمیل"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              errorMessage={emailError}
            />

            <Input
              placeholder="رمز عبور"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              errorMessage={passwordError}
            />

            <Input
              placeholder="کد ملی"
              type="text"
              name="nationalCode"
              value={nationalCode}
              onChange={handleChange}
              errorMessage={nationalCodeError}
            />

            <Input
              placeholder="شماره موبایل"
              type="text"
              name="mobile"
              value={mobile}
              onChange={handleChange}
              errorMessage={mobileError}
            />

            <DateInput name="date" value={date} placeholder="تاریخ تولد" />

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
