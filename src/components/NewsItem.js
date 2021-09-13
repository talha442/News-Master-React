import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className="badge bg-danger">{source}</span>
                    </div>
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