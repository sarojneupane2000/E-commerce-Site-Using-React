import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Category from './Pages/Category'

function Header() {
    return (
        <>
        <header className='border-bottom'>
            <div className="container">
                <div className="row py-3">
                    <div className="col-lg-2">
                        <img className='w-100' src="https://durbarmart.com/uploads/logo/PMcxoktzgXYiJy9XHstvewn7X6lIvk329l48sIVF.webp" alt="" />
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                    </div>
                    <div className="col-lg-3 text-end">
                        <button type="button" className="btn position-relative">
                        <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                99+
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>

                    </div>
                </div>
            </div>
        </header>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cat/:cid' element={<Category/>}/>
        </Routes>
        </>
    )
}

export default Header
