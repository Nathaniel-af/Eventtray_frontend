import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const userSchema = yup.object().shape({
  username: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});
