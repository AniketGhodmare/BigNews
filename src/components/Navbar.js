// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
let categories = ["Home", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"]

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-2 px-lg-5 d-flex justify-content-between px-3' >
            <div className=" d-none  navigate-categories d-md-flex gap-2 text-capitalize text-light" >
                {categories.map((cat) =>
                    <NavLink key={cat} to={`/${cat === "Home" ? "" : cat}`}>{cat}</NavLink>
                )}
            </div>
            <div className="mob-menu d-flex d-md-none">
                <CgMenuLeft className=' text-light' />
            </div>
            <div className="search">
                <Form className="d-flex">
                    <Form.Control type="search" placeholder="Search" className="me-2 border-0" aria-label="Search" />
                    <Button variant="outline-warning">Search</Button>
                </Form>
            </div>
        </nav>
    )
}

export default Navbar
