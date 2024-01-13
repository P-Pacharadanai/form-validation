import { useState } from "react";
import FormInput from "./FormInput";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function FormComponent() {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errorStatus, setErrorStatus] = useState({
        userName: false,
        email: false,
        password: false,
        confirmPassword: false,
    });

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
            timer: 2500,
        });
    };

    const emptyFormData = (newErrorStatus) => {
        const valueErrorStatus = Object.values(newErrorStatus);
        const findTrue = valueErrorStatus.filter((status) => status);
        if (!findTrue[0]) {
            const emptyData = {
                ...formData,
                userName: "",
                email: "",
                password: "",
                confirmPassword: "",
            };

            setFormData(emptyData);
            showModalSuccess();
        }
    };

    const handlerSubmit = (event) => {
        event.preventDefault();
        const newErrorStatus = {
            ...errorStatus,
            userName: formData.userName === "",
            email: formData.email === "",
            password: formData.password === "",
            confirmPassword: formData.confirmPassword === "",
        };

        setErrorStatus(newErrorStatus);
        emptyFormData(newErrorStatus);
    };

    const commonProps = {
        onChangeHandler: onChangeHandler,
        formDataState: formData,
        errorStatusState: errorStatus,
    };

    return (
        <div className="w-[500px] bg-white flex flex-col items-center py-8 px-10 rounded-md shadow-xl ">
            <h1 className="text-3xl font-bold mb-5">Create your account</h1>
            <form className="w-full flex flex-col gap-6" onSubmit={handlerSubmit}>
                <FormInput
                    label="Full Name"
                    forId="fullName"
                    type="text"
                    name="userName"
                    inputData="userName"
                    errorMessage="Please enter your name."
                    {...commonProps}
                ></FormInput>
                <FormInput
                    label="Email"
                    forId="email"
                    type="email"
                    name="email"
                    inputData="email"
                    errorMessage="Please enter your email."
                    {...commonProps}
                ></FormInput>
                <FormInput
                    label="Password"
                    forId="password"
                    type="password"
                    name="password"
                    inputData="password"
                    errorMessage="Please enter your password."
                    {...commonProps}
                ></FormInput>
                <FormInput
                    label="Confirm Password"
                    forId="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    inputData="confirmPassword"
                    errorMessage="Please enter your password."
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
