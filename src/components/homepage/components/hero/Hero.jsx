import React from 'react'
import "./hero.css"
import SectionInfo from './SectionInfo'
const Hero = () => {
    let img = "https://cdn.pixabay.com/photo/2023/06/28/21/48/dragonfly-8095243_1280.jpg"
    return (
        <>
            <div className="  d-flex flex-wrap  mt-2 gap-2 img-grid px-lg-5 px-3">
                <div className="main-news  img-grid-child rouded-img">
                    <img className=' w-100 ' src={img} alt="" srcSet="" />
                    <SectionInfo
                        bdge={{ data: "Bussiness", fontSize: "20px" }}
                        title={{ data: "What’s In Trend In Womens Fashion Summer?", fontSize: "2rem" }}
                        description={{ data: "What’s In Trend In", fontSize: "16px" }}
                        author={{ name: "aniket", profile: img }}
                    />
                </div>
                <div className="d-flex flex-column gap-2 img-grid-child sub-news">
                    <div className=" top-section flex-grow-1 h-50 rouded-img position-relative">
                        <img className=' w-100 ' src={img} alt="" srcSet="" />
                        <SectionInfo
                            bdge={{ data: "Bussiness", fontSize: "12px" }}
                            title={{ data: "What’s In Trend In aniket", fontSize: "20px" }}
                            description={{ data: "What’s In Trend In", fontSize: "16px" }}
                            author={{ name: "aniket", profile: img }}
                        />
                    </div>
                    <div className="d-flex gap-2 flex-wrap bottom-section flex-grow-1 h-50">
                        <div className="bottom-left secondary-news rouded-img position-relative">
                            <img className=' w-100 ' src={img} alt="" srcSet="" />
                            <SectionInfo
                                bdge={{ data: "Bussiness", fontSize: "10px" }}
                                title={{ data: "What’s In Trend",  fontSize: "20px" }}
                                description={{ data: "What’s In Trend In", fontSize: "16px" }}
                                author={{ name: "aniket", profile: img }}
                            />
                        </div>
                        <div className="bottom-right secondary-news rouded-img position-relative">
                            <img className=' w-100 ' src={img} alt="" srcSet="" />
                            <SectionInfo
                                bdge={{ data: "Bussiness", fontSize: "10px" }}
                                title={{ data: "What’s In Trend",  fontSize: "20px" }}
                                description={{ data: "What’s In Trend In", fontSize: "16px" }}
                                author={{ name: "aniket", profile: img }}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
