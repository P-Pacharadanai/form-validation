const FormInput = (props) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor={props.forToId} className="text-lg font-bold">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.forToId}
        className="text-xl px-2 border-2 rounded-md"
        onChange={(e) => props.setFormDataState({ ...props.formDataState, [props.inputData]: e.target.value })}
        value={props.formDataState[props.inputData]}
      />
      {props.errorStatusState[props.inputData] && <small className="text-red-500">{props.errorMessage}</small>}
    </div>
  );
};

export default FormInput;
