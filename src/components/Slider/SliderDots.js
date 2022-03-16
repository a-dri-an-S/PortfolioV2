const SliderDots = ({ slideIdx, onClick }) => {
    return (
        <div className="dots-container">
            {
                Array.from({length: 3}).map((item, idx) => {
                    return (
                        <button
                            key={idx}
                            className={slideIdx === idx + 1 ? "dot active" : "dot"}
                            onClick={() => onClick(idx + 1)}
                        />
                    )
                })
            }
        </div>
    );
}

export default SliderDots;