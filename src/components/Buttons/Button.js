const Button = ({ children, type, handleClick }) => {
    return (
        <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md"
            type={type}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}
export default Button;