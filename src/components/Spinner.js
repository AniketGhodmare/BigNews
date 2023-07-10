// import React, { Component } from 'react'
import spinnergif from './loading.gif'

const Spinner = () =>  {
    return (
      <div className="text-center">
        <img  className='my-5' src={spinnergif} alt="spinner" />
      </div>
    )
}

export default Spinner