import { twMerge } from "tailwind-merge"

const Button = ({ children, className, type, handleClick }) => {
    return (
        <button
            className={twMerge("bg-blue-500 text-white px-4 py-1 rounded-md", className)}
            type={type}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}
export default Button;