import React from 'react'
import ProductsData from '../Data/ProductsData'
import { useParams } from 'react-router-dom'


function Category() {
    let {cid}=useParams()
    let ww=ProductsData.filter((a)=>a.category==cid)
  return (
    <div>
      <div className="container">
        <h1>Category {cid}</h1>
        <div className="row">
            {ww.map((b)=>(
                <div className="col-md-3 col-sm-6">
                <div className="product-grid2">
                    <div className="product-image2">
                        <a href="#">
                            <img className="pic-1" src={b.thumbnail} />
                            <img className="pic-2" src={b.thumbnail} />
                        </a>
                        <ul className="social">
                            <li><a href="#" data-tip="Quick View"><i className="fa fa-eye" /></a></li>
                            <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                            <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                        </ul>
                        <a className="add-to-cart" href>Add to cart</a>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">{b.title}</a></h3>
                        <span className="price">$599.99</span>
                    </div>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Category
