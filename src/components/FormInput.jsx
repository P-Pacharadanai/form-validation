const FormInput = (props) => {
    const { label, forId, type, name, inputData, formDataState, onChangeHandler, errorMessage, errorStatusState } =
        props;
    return (
        <div className="flex flex-col">
            <label htmlFor={forId} className="text-lg font-bold">
                {label}
            </label>
            <input
                className={`text-xl px-2 py-1 border rounded-sm bg-slate-50 ${
                    errorStatusState[inputData] ? "border-red-500" : "border-gray-200"
                }`}
                type={type}
                id={forId}
                name={name}
                onChange={onChangeHandler}
                value={formDataState[inputData]}
            />
            {errorStatusState[inputData] && <small className="text-red-500">{errorMessage}</small>}
        </div>
    );
};

export default FormInput;
