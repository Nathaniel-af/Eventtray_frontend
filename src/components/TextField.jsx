import React from "react";
import { ErrorMessage, useField } from "formik";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`bg-gray-200 h-12 w-80 rounded-2xl p-5 outline-[#98afd6] block ${
          meta.touched && meta.error && "ring-red-500 ring-2"
        }`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        className="text-red-500"
        name={field.name}
      />
    </div>
  );
}

export default TextField;
