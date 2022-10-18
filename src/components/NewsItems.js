import React, { Component } from 'react';

export class NewsItems extends Component {

    render() {

        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

        return (
            <div className="my-3">
                <div className="card">
                    <div>
                        <span className="rounded-pill bg-danger px-2"
                            style={{
                                zIndex: '1',
                                position: 'absolute',
                                right: '0',
                                color: 'white'
                            }}>{source}</span>
                    </div>
                    <img src={!imageUrl ? "https://cdn.wallpapersafari.com/34/82/YRzXPk.jpeg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small class="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems;
