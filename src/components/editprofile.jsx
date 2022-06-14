import React from "react";
import { Formik, Form, useFormikContext } from "formik";
import * as yup from "yup";
import TextField from "./TextField";
import Nav from "./Nav";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const formikProps = useFormikContext();
  const userSchema = yup.object().shape({
    username: yup.string().required("Update user name "),
    firstName: yup.string().required("Enter First Name"),
    lastName: yup.string().required("Enter Last Name"),
    // profilePicture: yup.mixed().required("Photo is required"),
    // coverPicture: yup.mixed().required("Photo is required"),
  });

  return (
    <>
      <Nav />
      <div className="bg-[url(https://i.imgur.com/hrSm5dw.png)] bg-[length:1920px_1080px]  w-full h-screen">
        <div className="">
          <div className="container flex justify-center py-20">
            <div className="p-3 bg-white rounded-xl max-w-lg h-full flex flex-col justify-between hover:shadow-lg">
              <Formik
                initialValues={{
                  username: "",
                  firstName: "",
                  lastName: "",
                  profilePicture: "",
                  coverPicture: "",
                }}
                validationSchema={userSchema}
                onSubmit={async (values) => {
                  const data = {
                    username: values.username,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    phoneNumber: user.data.phoneNumber,
                    role: "User",
                    profilePicture: values.profilePicture,
                    coverPicture: values.coverPicture,
                  };
                  const axiosConfig = {
                    headers: {
                      Authorization: `token ${user.data.token}`,
                      "Content-Type": "multipart/form-data",
                    },
                  };
                  await axios
                    .put(
                      `${process.env.REACT_APP_API}user/profile/`,
                      data,
                      axiosConfig
                    )
                    .then((response) => {
                      console.log(response);
                      navigate("/");
                    })
                    .catch((err) => {
                      console.log(err);
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
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                    <TextField
                      label="Last Name"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                    <TextField
                      label="Profile Photo"
                      name="profilePicture"
                      type="file"
                      placeholder="Select Photo"
                      value={undefined}
                      onChange={(event) =>
                        formik.setFieldValue(
                          "profilePicture",
                          event.currentTarget.files[0]
                        )
                      }
                    />
                    <TextField
                      label="Cover Photo"
                      name="coverPicture"
                      type="file"
                      placeholder="Select Photo"
                      value={undefined}
                      onChange={(event) =>
                        formik.setFieldValue(
                          "coverPicture",
                          event.currentTarget.files[0]
                        )
                      }
                    />
                    <button
                      type="submit"
                      className="bg-[#5995fd] h-10 mt-4 w-40 self-center rounded-2xl text-white "
                    >
                      UPDATE
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
