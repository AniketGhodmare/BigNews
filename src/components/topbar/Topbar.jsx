import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
let socialLinks = [{ icon: BsInstagram, url: "facebook" }, { icon: BiLogoFacebook, url: "facebook1" }, { icon: BiLogoLinkedin, url: "facebook2" }, { icon: AiOutlineTwitter, url: "facebook3" }, { icon: AiFillYoutube, url: "facebook4" },]
const date = new Date();
const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
const Topbar = () => {
    return (
        <>
            <div className=" d-none d-lg-flex bg-dark text-secondary justify-content-between container-fluid align-items-center  px-md-3 px-lg-5 py-2" >
                <div className="links d-flex gap-2 text-capitalize align-items-center">
                    <p className=' border-right border-secondary pe-1'>{formattedDate}</p>
                    <NavLink to='/advertise-with-us'>Advertise</NavLink>
                    <NavLink to="/contact" className="top-link">Contact</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </div>
                <div className="social d-flex gap-2">
                    {socialLinks.map((social) =>
                        <Link to={`/${social.url}`} key={`${social.url}`}>
                            <social.icon style={{ fontSize: "15px" }} />
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}

export default Topbar
