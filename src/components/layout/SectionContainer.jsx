const SectionContainer = ({ children }) => {
    return (
        <section>
            <div className="bg-white shadow-md rounded-lg p-4">
                {children}
            </div>
        </section>
    )
}

export default SectionContainer