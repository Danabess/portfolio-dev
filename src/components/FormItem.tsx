export default function FormItem({ className, children, isRequired }: { className?: string, children: any, isRequired?: boolean }) {
    return (
        <div className={`form-item ${className ? className : ''}`}>
            <label htmlFor="">
                <p className="p2">
                    {children}
                    <span className="p3">{isRequired ? ' (required)' : ''}</span>
                </p>
            </label>
            <input type="text" />
        </div>
    )
}