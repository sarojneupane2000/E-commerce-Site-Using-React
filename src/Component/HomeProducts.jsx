import React from 'react'
import ProductsData from '../Data/ProductsData'
import { Link } from 'react-router-dom'


function HomeProducts(props) {
    let aa=ProductsData.filter((c)=>c.category==props.tt)
    return (
        
        <section className='border-top border-bottom py-3'>
            <div className="container py-5">
            <h2 className='font-bold py-2 text-uppercase'>{props.tt}</h2>
                <div className="row">
                   
                    {aa.slice(0,4).map((b)=>
                     <div className="col-md-3 col-sm-6">
                     <div className="product-grid2">
                         <div className="product-image2">
                             <a href="#">
                                 <img className="pic-1" src={b.thumbnail} />
                                 <img className="pic-2" src={b.thumbnail} />
                             </a>
                             <ul className="social">
                                 <li><Link to="#" data-tip="Quick View"><i className="fa fa-eye" /></Link></li>
                                 <li><Link to="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></Link></li>
                                 <li><Link to="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></Link></li>
                             </ul>
                             <a className="add-to-cart" href>Add to cart</a>
                         </div>
                         <div className="product-content">
                             <h3 className="title"><a href="#">{b.title}</a></h3>
                             <span className="price">$599.99</span>
                         </div>
                     </div>
                 </div>
                    )}
                   
                </div>

            </div>
        </section>
    )
}

export default HomeProducts
