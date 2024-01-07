import { useState } from "react";
import FormInput from "./FormInput";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [errorStatus, setErrorStatus] = useState({
    userName: false,
    email: false,
    password: false,
    repassword: false,
  });

  const showErrorMessage = (e) => {
    e.preventDefault();
    setErrorStatus({
      ...errorStatus,
      userName: formData.userName === "",
      email: formData.email === "",
      password: formData.password === "",
      repassword: formData.repassword === "",
    });
  };

  return (
    <div className="w-[600px] flex flex-col items-center py-8 px-10 rounded-md shadow-xl ">
      <h1 className="text-3xl font-bold mb-5">Sign in</h1>
      <form className="w-full flex flex-col gap-6" onSubmit={showErrorMessage}>
        <FormInput
          label="Full name"
          forToId="fullName"
          type="text"
          inputData="userName"
          errorMessage="Please enter your name."
          formDataState={formData}
          setFormDataState={setFormData}
          errorStatusState={errorStatus}
        ></FormInput>
        <FormInput
          label="Email"
          forToId="email"
          type="email"
          inputData="email"
          errorMessage="Please enter your email."
          formDataState={formData}
          setFormDataState={setFormData}
          errorStatusState={errorStatus}
        ></FormInput>
        <FormInput
          label="Password"
          forToId="password"
          type="password"
          inputData="password"
          errorMessage="Please enter your password."
          formDataState={formData}
          setFormDataState={setFormData}
          errorStatusState={errorStatus}
        ></FormInput>
        <FormInput
          label="Repassword"
          forToId="repassword"
          type="password"
          inputData="repassword"
          errorMessage="Please enter your password."
          formDataState={formData}
          setFormDataState={setFormData}
          errorStatusState={errorStatus}
        ></FormInput>
        <button type="submit" className="w-full text-white font-bold bg-sky-500 hover:bg-sky-400 mt-6 py-2 rounded-md">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default FormComponent;
