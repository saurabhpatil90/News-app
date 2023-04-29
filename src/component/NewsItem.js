import React from 'react'

const NewsItem =(props)=>{
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1, left:'90%'}}>
            {source}</span>
        <img src={imageUrl ? imageUrl : "https://timesofindia.indiatimes.com/photo/msid-99657067,imgsize-95404.cms"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small>By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} className="btn btn-primary">Read More</a>
        </div>
      </div>
    )
}
export default NewsItem