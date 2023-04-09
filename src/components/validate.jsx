export const validate = (data) => {
  const errors = {};

  if (!data.email) {
    errors.email = "* ایمیل مورد نیاز است";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "* آدرس ایمیل معتبر نیست";
  } else {
    delete errors.email;
  }

  if (!data.number) {
    errors.number = "* پر کردن فیلد الزامی است";
  } else if (data.number.length > 11) {
    errors.number = " *شماره تلفن نا معتبر است";
  } else {
    delete errors.number;
  }

  if (!data.fName) {
    errors.fName = "* پر کردن فیلد الزامی است";
  } else {
    delete errors.fName;
  }
  if (!data.lName) {
    errors.lName = "* پر کردن فیلد الزامی است";
  } else {
    delete errors.lName;
  }

  return errors;
};
