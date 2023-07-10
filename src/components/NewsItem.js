// import { getByTitle } from '@testing-library/react'
import React from 'react'

const NewsItem = (props) => {
  let { title, description, imgUrl, newsurl, date, author, source } = props;
  return (
    <div>
      <div className="card shadow-sm my-3">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "80%", zIndex: "1" }}>{source}</span>
        <div className="d-flex text-center w-100" style={{ height: "225px", backgroundColor: "gray" }}>
          <img src={imgUrl ? imgUrl : "https://thumbs.dreamstime.com/b/today-s-news-shows-current-newspaper-d-rendering-130556865.jpg"} alt="" className='w-100' />
        </div>
        <div className="card-body">
          <p className="card-text font-weight-bold">{title}</p>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-outline-secondary">View</a>
            </div>
            <div style={{ width: "185px" }}>
              <small className="d-block text-muted text-center">on {(new Date(date)).toGMTString()}</small>
              <small className="d-block text-muted text-center text-danger"><p className="text-danger fw-bold">By {author ? author : "Source"}</p></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
