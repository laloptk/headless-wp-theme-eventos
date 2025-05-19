const Box = ({ children, ...props }) => {
    return (
        <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
            {children}
        </div>
    )
}