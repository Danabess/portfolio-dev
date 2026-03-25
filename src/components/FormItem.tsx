export default function FormItem(
    { className, children, isRequired, textArea, inputName, inputValue, onInput }
        : { className?: string, children: any, isRequired?: boolean, textArea?: boolean, inputName?: string, inputValue?: string, onInput?: any }
) {
    const InputFieldId = "InputField"

    return (
        <div className={`form-item ${className ? className : ''}`}>
            <label htmlFor={inputName}>
                <p className="p2">
                    {children}
                    <span className="p3">{isRequired ? ' (required)' : ''}</span>
                </p>
            </label>
            {textArea
                ? <textarea id={InputFieldId} name={inputName} className="p2"></textarea>
                : <input type="text" id={InputFieldId} name={inputName} className="p2" value={inputValue} onInput={onInput} />}
        </div>
    )
}