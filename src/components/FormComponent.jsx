import { useState } from "react";
import FormInput from "./FormInput";
import validateForm from "./ValidateForm";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function FormComponent() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState({});

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    const inputData = { ...formData, [name]: value };
    setFormData(inputData);
  };

  const showModalSuccess = () => {
    withReactContent(Swal).fire({
      icon: "success",
      title: "Your account has been created.",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length === 0) {
      const emptyData = {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
      setErrorMessage({});
      setFormData(emptyData);
      showModalSuccess();
    } else {
      setErrorMessage(formErrors);
    }
  };

  const commonProps = {
    onChangeHandler: onChangeHandler,
    formDataState: formData,
  };

  return (
    <div className="w-[500px] bg-white flex flex-col items-center py-8 px-10 rounded-md shadow-xl ">
      <h1 className="text-3xl text-gray-600 font-bold mb-5">
        Create your account
      </h1>
      <form className="w-full flex flex-col gap-6" onSubmit={handlerSubmit}>
        <FormInput
          label="Full Name"
          forId="fullName"
          type="text"
          name="userName"
          inputData="userName"
          errorMessage={errorMessage?.userName}
          {...commonProps}
        ></FormInput>
        <FormInput
          label="Email"
          forId="email"
          type="email"
          name="email"
          inputData="email"
          errorMessage={errorMessage?.email}
          {...commonProps}
        ></FormInput>
        <FormInput
          label="Password"
          forId="password"
          type="password"
          name="password"
          inputData="password"
          errorMessage={errorMessage?.password}
          {...commonProps}
        ></FormInput>
        <FormInput
          label="Confirm Password"
          forId="confirmPassword"
          type="password"
          name="confirmPassword"
          inputData="confirmPassword"
          errorMessage={errorMessage?.confirmPassword}
          {...commonProps}
        ></FormInput>
        <button
          className="w-full text-white font-bold bg-sky-500 hover:bg-sky-400 mt-6 py-3 rounded-md"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
export default FormComponent;
