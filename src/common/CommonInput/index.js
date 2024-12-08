const CommonInput = (props) => {
    const { fieldName, placeholder, value, onChange, error, type } = props;
    return (
        <div className="w-[300px]">
            <input
                className="border border-green-300 p-1 rounded-sm w-full"
                type={type ?? 'text'}
                name={fieldName}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            /><br />
            {error && error[fieldName] && <span className="text-red-600 text-sm">{error[fieldName]}</span>}
        </div>
    )
}
export default CommonInput;