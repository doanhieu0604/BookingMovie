import React, { Component } from 'react';


export default class Movie extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="col-sm-3">
        <div className="card">
          <div className="card-img">
            <img className="card-img-top img-fluid" src={movie.hinhAnh} alt="" />
          </div>
          <div className="card-body">
            <h4 className="card-title">{movie.tenPhim}</h4>
          </div>
          <div className="overlay"></div>
        </div>
      </div>
    )
  }
}
