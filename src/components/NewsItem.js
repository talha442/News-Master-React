import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>{source}</span>
                    <img src={!imageUrl ? "https://static.foxnews.com/foxnews.com/content/uploads/2021/09/deadly-shooting-suspect-car-dc.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}</small></div>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem