import React, { useRef } from 'react'
import SliderCard from './SliderCard'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import "./featured.css"
const screenWidth=window.innerWidth;

const sliderRight = (element) => { element.scrollLeft += screenWidth - 110 }
const sliderLeft = (element) => { element.scrollLeft -= screenWidth - 110 }

const FeaturedNews = () => {
    const elementRef = useRef();
    return (
        <>
            <div className=" d-flex mt-2 gap-3 img-grid px-lg-5 px-3 flex-column py-2">
                <div class="section-title d-flex justify-content-between">
                    <h3 class="m-0 text-uppercase ">Featured News</h3>
                    <div className="slider-control primary-text d-flex gap-3 fw-bold">
                        <div className="arrow center prev pointer"
                            onClick={() => sliderLeft(elementRef.current)}>
                            <FaAngleLeft className=' fw-bolder' />
                        </div>
                        <div className="arrow center next pointer"
                            onClick={() => sliderRight(elementRef.current)}>
                            <FaAngleRight className=' fw-bolder' />
                        </div>
                    </div>
                </div>

                <div ref={elementRef} className="slider d-flex gap-3 py-2 bg-success position-relative scrollbar-none" >
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                </div>
            </div>

        </>
    )
}

export default FeaturedNews