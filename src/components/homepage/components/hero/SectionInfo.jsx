import React from 'react'

const SectionInfo = (props) => {
    const { bdge, title, description, author } = props
    return (
        <div>
            <div className="section-info position-absolute d-flex gap-1 flex-column text-light">
                <div className="news-bagde text-capitalize px-3 py-1 "  style={{ fontSize:bdge.fontSize  }}>{bdge?.data}</div>
                <h2 className='news-hesding' style={{ fontSize:title.fontSize  }}>{title?.data}</h2>
                <p className="description" style={{ fontSize:description.fontSize  }}>{description?.data}</p>
                <div className="autor-info d-flex gap-1 align-items-center">
                    <div className="profile rounded-circle">
                        <img src={author?.profile} className=' w-100 h-100' alt="" srcSet="" />
                    </div>
                    <p className="author-name text-capitalize" style={{ fontSize:author.fontSize  }}>{author?.name}</p>
                    <p>,  02 03 2023</p>
                </div>
            </div>
        </div>
    )
}

export default SectionInfo