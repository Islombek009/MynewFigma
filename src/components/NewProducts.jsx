import React, { useState, useEffect } from "react";
import axios from "axios";




function NewProducts() {

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3004/products")
            .then(res => {
                setPost(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.error(error.message)
            });
    }, [])


    return (
        <>
            <div className="container">
                <h4 className="text-center"><svg width="30" height="3" viewBox="0 0 30 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-1.31134e-07" y1="1.5" x2="30" y2="1.5" stroke="#666666" stroke-width="3" />
                </svg>
                    New Products<svg width="30" height="3" viewBox="0 0 30 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="-1.31134e-07" y1="1.5" x2="30" y2="1.5" stroke="#666666" stroke-width="3" />
                    </svg>
                </h4><br />
                <div className="row">
                    <div className="col-3">
                        <div className="mynewproductsimg text-center">
                            <img src="../images/numberone.png" alt="" /><br />
                            <h3 style={{fontWeight:'600'}}>Fresh Vegetables</h3>
                            <button className="order-now-btn">Order Now</button>
                        </div>
                    </div>
                    {post.map(elem => (
                        <>
                            <div className="col-3 mynewproductsimghover" key={elem.id}>
                                <div className=" mynewproductsimg ">
                                    <img src={elem.image} alt="" /><br /><br />
                                    <p>{elem.title}</p>
                                    <span style={{textDecoration:'line-through',color:'#666666'}} className="mynewproductspan">{elem.price}</span>
                                    <span className="mynewproductspan">{elem.fulprice}</span>
                                </div>
                            </div>
                        </>
                    ))
                    }

                </div>
            </div>
        </>
    )
}
export default NewProducts;