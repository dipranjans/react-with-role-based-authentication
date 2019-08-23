import React, { Component } from "react";
import axios from "axios";

class Gallery extends Component {
  state = {
    previewImg: []
  };

  componentDidMount() {
    axios
      .get(`https://pixabay.com/api/?key=${process.env.PIXBAY_API_KEY}`)
      .then(res => {
        this.setState({
          ...this.state,
          previewImg: res.data.hits
        });
      });
  }

  render() {
    const { previewImg } = this.state;
    const previewImages = previewImg.map((data, index) => {
      return (
        <div
          className="card text-white bg__nav__bar mb-3 mr-3"
          style={{ maxWidth: "18rem" }}
          key={data.id}
        >
          <div className="card-header">{data.tags}</div>
          <img src={data.previewURL} className="card-img-top" alt="..." />
          <div className="card-body">
            {/*<h5 className="card-title">Primary card title</h5>*/}
            <p className="card-text">
              comments: {data.comments} <br />
              likes: {data.likes} <br />
              downloads: {data.downloads} <br />
              favorites: {data.favorites} <br />
              views: {data.views}
            </p>
          </div>
        </div>
      );
    });

    return <div className="row">{previewImages}</div>;
  }
}

export default Gallery;
