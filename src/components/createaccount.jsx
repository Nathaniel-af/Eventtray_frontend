import { Formik, Form } from "formik";
import React from "react";
import * as yup from "yup";
import TextField from "./TextField";
import vector from "../img/Vector.png";
import logo from "../img/logobig.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function CreateAccount() {
  const navigate = useNavigate();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const userSchema = yup.object().shape({
    username: yup.string().required("Required"),
    firstname: yup.string().required("Required"),
    lastname: yup.string().required("Required"),
    phoneNumber: yup
      .string()
      .max(10)
      .matches(phoneRegExp, "Phone number is not valid"),
  });
  return (
    <>
      <div className="max-h-screen w-full bg-white flex justify-between">
        <div className="w-1/3 max-h-screen ">
          <div className="flex flex-col items-end py-2 ">
            <img className=" h-24 self-start ml-32" src={logo} alt="" />
            <div className="flex flex-col ">
              <h2 className="self-center text-gray-400 text-xl font-semibold">
                Create account
              </h2>
              <Formik
                initialValues={{
                  username: "",
                  firstname: "",
                  lastname: "",
                  phoneNumber: "",
                }}
                validationSchema={userSchema}
                onSubmit={async (values) => {
                  const data = {
                    username: values.username,
                    firstName: values.firstname,
                    lastName: values.lastname,
                    phoneNumber: values.phoneNumber,
                    role: "User",
                    password: values.phoneNumber,
                  };
                  const axiosConfig = {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  };
                  await axios
                    .post(
                      `${process.env.REACT_APP_API}auth/create/`,
                      data,
                      axiosConfig
                    )
                    .then((response) => {
                      console.log(response);
                      navigate("/otp");
                    })
                    .catch((e) => {
                      console.log(e.response.data.message);
                    });
                }}
              >
                {(formik) => (
                  <Form className="flex flex-col gap-3">
                    <TextField
                      label="User Name"
                      name="username"
                      type="text"
                      placeholder="User Name"
                    />
                    <TextField
                      label="First Name"
                      name="firstname"
                      type="text"
                      placeholder="First Name"
                    />
                    <TextField
                      label="Last Name"
                      name="lastname"
                      type="text"
                      placeholder="Last Name"
                    />
                    <TextField
                      label="Phone Number"
                      name="phoneNumber"
                      type="text"
                      placeholder=" Ex. 09xxxxxxxx"
                    />
                    <button
                      type="submit"
                      className="bg-[#5995fd] h-10 mt-4 w-40 self-center rounded-2xl text-white "
                    >
                      SIGN UP
                    </button>
                  </Form>
                )}
              </Formik>

              <Link className="self-center mt-3" to="/otp">
                already have account ? Login
              </Link>
            </div>
          </div>
        </div>
        <div className="max-h-screen">
          <img className="h-screen" src={vector} alt="" />
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
