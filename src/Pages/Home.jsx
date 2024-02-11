import React from 'react'
import CatData from '../Data/CatData'
import HomeProducts from '../Component/HomeProducts'
import { Link } from 'react-router-dom'

CatData

function Home() {
    return (
        <>
        <div>
            <div className="container py-3">
                <div className="row">
                    <div className="col-lg-3">
                        <ul className="list-group">
                            <li className="list-group-item active" aria-current="true">Categories</li>
                            {CatData.slice(0, 9).map((a) =>
                                <li className="list-group-item" key={a}><Link className='text-dark text-decoration-none' to={`/cat/${a}`}>{a}</Link></li>
                            )}


                        </ul>

                    </div>
                    <div className="col-lg-9">
                        <div id="carouselExampleIndicators" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://durbarmart.com/uploads/sliders/XVzkD0VIGkgqdiYvvFQnKqAjGnybmeLgZUzCBsqb.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://durbarmart.com/uploads/sliders/qxu2koL7YMLc4ai2eZpvvYTW4WT7UcEGB34xvHup.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://durbarmart.com/uploads/sliders/hAS0IOui8vPyFVPPV73rS2CzLcnaOucXeV05gpY8.png" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <HomeProducts tt="smartphones"/>
            <HomeProducts tt="laptops"/>
            <HomeProducts tt="skincare"/>
            <HomeProducts tt="fragrances"/>
     
        </div>
       
        </>
    )
}

export default Home
