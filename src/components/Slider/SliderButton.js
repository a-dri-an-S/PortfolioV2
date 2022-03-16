const SliderButton = ({ name, type, onClick, direction }) => {
    return (
        <button
            className={
                direction === "next" ?
                    "slide-btn next" :
                    "slide-btn prev"
            }
            type={type}
            onClick={onClick}
        >
            {name}
        </button>
    );
}

export default SliderButton;