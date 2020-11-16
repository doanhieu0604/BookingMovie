
import React from 'react'

export default function Carousle() {
    return (
        <div className="movieCarousel">
            <div id="movieSlider" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="container carousel-indicators">
                    <li data-target="#movieSlider" data-slide-to={0} className="active" />
                    <li data-target="#movieSlider" data-slide-to={1} />
                    <li data-target="#movieSlider" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./carousel/carousel2.png" className="d-block w-100"  />
                    </div>
                    <div className="carousel-item">
                        <img src="./carousel/carousel3.png" className="d-block w-100"  />
                    </div>
                    <div className="carousel-item">
                        <img src="./carousel/carousel4.png" className="d-block w-100"  />
                    </div>
                </div>
                <div>
                    <a className="carousel-control-prev" href="#movieSlider" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#movieSlider" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
        </div>

    );
}

