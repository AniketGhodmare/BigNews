import advertise from "../../components/homepage/img/ads-728x90.png"
const TopAd = () => {
    return (
        <>
            <div className=" d-none d-lg-flex  justify-content-between container-fluid align-items-center  px-md-3 px-lg-5 py-2" >
                <div className="logo text-uppercase"><h1><span className="primary-text fw-bold">Big</span>News</h1></div>
                <div className="top-ad">
                    <img src={advertise} alt="" srcSet="" />
                </div>
            </div>
        </>
    )
}

export default TopAd
