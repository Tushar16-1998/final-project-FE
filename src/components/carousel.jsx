import React, { useRef, useEffect } from 'react';
import { EmblaCarousel } from 'embla-carousel-react';


const Carousel = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        if (carouselRef.current) {
            const embla = EmblaCarousel(carouselRef.current);
        }
    }, []);

    return (
        <div className="embla">
            <EmblaCarousel ref={carouselRef} className="embla__viewport">
                <div className="embla__container">
                    <img src="image1.jpg" alt="Image 1" className="embla__slide" />
                </div>
                <div className="embla__container">
                    <img src="image2.jpg" alt="Image 2" className="embla__slide" />
                </div>
                <div className="embla__container">
                    <img src="image3.jpg" alt="Image 3" className="embla__slide" />
                </div>
            </EmblaCarousel>
        </div>
    );
};

export default Carousel;
