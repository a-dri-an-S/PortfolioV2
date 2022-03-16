import { useState } from 'react';
import SliderButton from './SliderButton';
import SliderDots from './SliderDots';
import Slide from './Slides/Slide';

import './Slider.css';

const projects = [
    <Slide title="Project 1" />,
    <Slide title="Project 2" />,
    <Slide title="Project 3" />,

];

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
                <SliderDots
                    onClick={animateDots}
                    slideIdx={slideIdx}
                />
            </div>

        </section>
    );
}

export default Slider;