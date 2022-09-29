import  './Product.css';
import React from 'react';
import prd1 from '../Assets/product1.png';
import prd2 from '../Assets/product2.png';
import prd3 from '../Assets/product3.png';
import prd4 from '../Assets/product4.png';
import prd5 from '../Assets/product5.png';
import prd6 from '../Assets/product6.png';
import { BiShoppingBag } from "react-icons/bi";
import Fade from 'react-reveal/Fade';
const Product=()=>{
    return(
        <section className="product section container" id='products'>
                <h2 className="section__title-center">
                    Check out our <br/> products
                </h2>

                <p className="product__description">
                    Here are some selected plants from our showroom, all are in excellent 
                    shape and has a long life span. Buy and enjoy best quality.
                </p>
                <Fade top cascade duration={2500}>
                <div className="product__container grid">
                    <article className="product__card">
                        <div className="product__circle"></div>
                        <img src={prd1} alt="" className="product__img"/>
                        
                        <h3 className="product__title">Cacti Plant</h3>
                        <span className="product__price">$19.99</span>
                        <button className="button--flex product__button">
                        <BiShoppingBag/>
                        </button>
                        
                    </article>

                    <article className="product__card">
                        <div className="product__circle"></div>

                        <img src={prd2} alt="" className="product__img"/>

                        <h3 className="product__title">Cactus Plant</h3>
                        <span className="product__price">$11.99</span>

                        <button className="button--flex product__button">
                            <BiShoppingBag/>
                        </button>
                    </article>

                    <article className="product__card">
                        <div className="product__circle"></div>

                        <img src={prd3} alt="" className="product__img"/>

                        <h3 className="product__title">Aloe Vera Plant</h3>
                        <span className="product__price">$7.99</span>

                        <button className="button--flex product__button">
                            <BiShoppingBag/>
                        </button>
                    </article>

                    <article className="product__card">
                        <div className="product__circle"></div>

                        <img src={prd4} alt="" className="product__img"/>

                        <h3 className="product__title">Succulent Plant</h3>
                        <span className="product__price">$5.99</span>

                        <button className="button--flex product__button">
                            <BiShoppingBag/>
                        </button>
                    </article>

                    <article className="product__card">
                        <div className="product__circle"></div>

                        <img src={prd5} alt="" className="product__img"/>

                        <h3 className="product__title">Succulent Plant</h3>
                        <span className="product__price">$10.99</span>

                        <button className="button--flex product__button">
                            <BiShoppingBag/>   
                        </button>
                    </article>

                    <article className="product__card">
                        <div className="product__circle"></div>

                        <img src={prd6} alt="" className="product__img"/>

                        <h3 className="product__title">Green Plant</h3>
                        <span className="product__price">$8.99</span>

                        <button className="button--flex product__button">
                            <BiShoppingBag/>
                        </button>
                    </article>
                </div>
                </Fade>
            </section>
    )
}
export default Product;