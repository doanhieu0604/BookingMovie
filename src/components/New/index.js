import React, { Component } from 'react';


export default class New extends Component {

    render() {
        const item = {
            tinTuc: "Tin Tức",
            reView:"Review",
            khuyenMai:"Khuyến Mãi"
        }

        return (
            <div className="container ">
                <ul className="nav nav-tabs nav-stacked py-4 ">
                    <li className="nav-item d-block">
                          <a href="#" className="nav-link active">{item.tinTuc}</a>
                        <div className="row ">
                            <div className="col-sm-6 ">
                            <img className="news-img img-fluid" src="./carousel/carousel2.png" alt="" />
                            <p className="news-moTa">đâsdasdasdasdas</p>

                            </div>
                            <div className="col-sm-6">
                            <img className="news-img img-fluid" src="./carousel/carousel2.png" alt="" />
                            <p className="news-moTa">đâsdasdasdasdas</p>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">{item.reView}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">{item.khuyenMai}</a>
                    </li>
                </ul>
            </div>
           
        )
    }
}
