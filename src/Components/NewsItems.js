import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,newsSource} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width:"18rem"}}>
        <span className="position-absolute  top-0 start-100 translate-middle badge rounded-pill bg-warning" style={{bottom:'364px',right:'0px'}}>{newsSource}
            </span>
          <img src={imageUrl?imageUrl:"https://w0.peakpx.com/wallpaper/812/166/HD-wallpaper-newspaper-old.jpg"} alt="..." className='card-img-top' style={{width:"286px",height:"161px",objectFit:"cover",color:'white'}} />
          <div className="card-body">
            <h5 className="card-title text-truncate">{title}
            </h5>
            <p className="card-text text-truncate">{description}</p>
            <p className="card-text"><small className="text-danger">By {author?author:"Unknown"} on {date?new Date(date).toGMTString():"Few Days Ago"}</small></p>
            <a href={newsUrl} rel='noreferrer' target='_blank' className='btn btn-sm btn-primary'>Click Here!</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
