import React, { useState, useEffect } from "react";
import axios from "axios";




function NewProducts2() {

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
                    Best Selling Product<svg width="30" height="3" viewBox="0 0 30 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="-1.31134e-07" y1="1.5" x2="30" y2="1.5" stroke="#666666" stroke-width="3" />
                    </svg>
                </h4>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active color-black" aria-current="page" href="#">Fruits</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active color-black" href="#">Vegetables</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active color-black" href="#">Meal</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active color-black" href="#">Milk</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active color-black" href="#">Cakes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active color-black" href="#">Drinks</a>
                    </li>
                </ul><br />
                <div className="row">
                    <div className="col-3">
                        <div className="mynewproductsimg text-center">
                            <img src="../images/numberone.png" alt="" /><br />
                            <p>Fresh Vegetables</p>
                            <span style={{ textDecoration: 'line-through', color: '#666666' }} className="mynewproductspan">$40.00 </span>
                            <span className="mynewproductspan"> $30.00 (1kg)</span>
                        </div>
                    </div>
                    {post.map(elem => (
                        <>
                            <div className="col-3 mynewproductsimghover" key={elem.id}>
                                <div className=" mynewproductsimg ">
                                    <img src={elem.image} alt="" /><br /><br />
                                    <p>{elem.title}</p>
                                    <span style={{ textDecoration: 'line-through', color: '#666666' }} className="mynewproductspan">{elem.price}</span>
                                    <span className="mynewproductspan">{elem.fulprice}</span>
                                </div>
                                <br />
                            </div>
                        </>
                    ))
                    } 
                    <div className="col col-lg-6 col-md-12 mt-5">
                    <button className="" style={{ border: '1px solid #E21A43',color:'#E21A43', width:'40px', marginLeft:'95%',padding:'1%' }}>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.05 6.364L8 1.414L6.586 0L0.222 6.364L6.586 12.728L8 11.314L3.05 6.364Z" fill="#E21A43" />
                        </svg>
                    </button>
                    </div>
                    <div className="col col-lg-6 col-md-12 mt-5">
                    <button className=""  style={{ background:'#E21A43',color:'white' , border:'none', width:'40px',padding:'1%'}}>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.95 6.364L0 1.414L1.414 0L7.778 6.364L1.414 12.728L0 11.314L4.95 6.364Z" fill="white" />
                        </svg>
                    </button>
                    </div>
                </div>
            </div><br /><br />
        </>
    )
}
export default NewProducts2;