import { useState } from 'react';
import SliderButton from './SliderButton';
import SliderDots from './SliderDots';
import { projects } from '../Projects/Projects';


import './Slider.css';

const Slider = () => {
    const [slideIdx, setSlideIdx] = useState(1);

    const nextSlide = () => {
        if (slideIdx !== projects.length) {
            setSlideIdx(slideIdx + 1);
        } else if (slideIdx === projects.length) {
            setSlideIdx(1);
        }
    };
    const prevSlide = () => {
        if (slideIdx !== 1) {
            setSlideIdx(slideIdx - 1);
        } else if (slideIdx === 1) {
            setSlideIdx(projects.length);
        }
    };

    const animateDots = (idx) => {
        setSlideIdx(idx);
    }

    return (
        <section className="slider">
            <div className="slider-container">
                {projects[slideIdx - 1]}
                <div className="slide-btns">
                    <SliderButton
                        name="<"
                        type="button"
                        onClick={prevSlide}
                        direction="prev"
                    />
                    <SliderButton
                        name=">"
                        type="button"
                        onClick={nextSlide}
                        direction="next"
                    />
                </div>
                <div>
                    <SliderDots
                        onClick={animateDots}
                        slideIdx={slideIdx}
                    />
                </div>
            </div>

        </section>
    );
}

export default Slider;