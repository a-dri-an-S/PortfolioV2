import { useState } from 'react';
import SliderButton from './SliderButton';
import SliderDots from './SliderDots';

import Project1 from './Slides/Project1';
import Project2 from './Slides/Project2';
import Project3 from './Slides/Project3';

const projects = [
    <Project1 />,
    <Project2 />,
    <Project3 />,
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
                <div className="slide">
                    {projects[slideIdx - 1]}
                </div>
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