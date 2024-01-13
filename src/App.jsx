import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormComponent from "./components/FormComponent";

function App() {
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center">
            <FormComponent></FormComponent>
        </div>
    );
}

export default App;
