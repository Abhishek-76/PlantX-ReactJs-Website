import classes from './Product.css'
import prd1 from '../Assets/product1.png'
import prd2 from '../Assets/product2.png'
import prd3 from '../Assets/product3.png'
import prd4 from '../Assets/product4.png'
import prd5 from '../Assets/product5.png'
import prd6 from '../Assets/product6.png'
import cart from '../Assets/cart.png'
const Product=()=>{
    return(
        <>
        <div className='product_description'>
            <h1><p>check out our products</p></h1>
            <p>Here are some selected plants from our showroo, all are in excellent shape and has a long life span.Buy and enjoy best quality.</p>
        <div className={classes.image_container}>
            
            </div>
            <div className="img1">
                <img src={prd1} alt=""/>
                <div>
                    <p>Cacti Plant</p>
                    <p>$19.99<button><img src={cart} alt="cart_icon" style={{backgroundColor :'green'}}/></button></p>
                </div>
                
            </div>
            <div className="img2">
                <img src={prd2} alt=""/>
                <div>
                    <p>Cacti Plant</p>
                    <p>$19.99<button><img src={cart} alt="cart_icon" style={{backgroundColor :'green'}}/></button></p>
                </div>
            </div>
            <div className="img3">
                <img src={prd3} alt=""/>
            </div>
            <div className="img4">
                <img src={prd4} alt=""/> 
            </div>
            <div className="img5">
                <img src={prd5} alt=""/>
            </div>
            <div className="img6">
                <img src={prd6} alt=""/>
                <div> Price</div> 
            </div>
            
        </div>
        </>
    )
}
export default Product;