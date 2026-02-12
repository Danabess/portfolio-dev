export default function FormItem({ className, children, isRequired, textArea, inputName }: { className?: string, children: any, isRequired?: boolean, textArea?: boolean, inputName?: string }) {
    return (
        <div className={`form-item ${className ? className : ''}`}>
            <label htmlFor={inputName}>
                <p className="p2">
                    {children}
                    <span className="p3">{isRequired ? ' (required)' : ''}</span>
                </p>
            </label>
            {textArea ? <textarea id={inputName} name={inputName} className="p2"></textarea> : <input type="text" id={inputName} name={inputName} className="p2" />}
        </div>
    )
}