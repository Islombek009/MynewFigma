import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ThreeCards() {

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3004/Asal")
            .then(res => {
                setPost(res.data)
                // console.log(res.data)
            })
            .catch(error => {
                console.error(error.message)
            });
    }, [])

    return (
        <>

            <div className="container-fluid w-50">
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
                    {/* <div className="col-3">
                        <div className="mynewproductsimg text-center">
                            <img src="../images/Rectangle 67.png" alt="" /><br />
                            <p>Coffee</p>
                            <span style={{ textDecoration: 'line-through', color: '#666666' }} className="mynewproductspan">$40.00 </span>
                            <span className="mynewproductspan"> $30.00 (1kg)</span>
                        </div>
                    </div> */}
                    {post.map(elem => (
                        <>
                            <div style={{ background: 'white', padding: '1vh' }} className="col-lg-4 col-md-6 col-sm-12 mb-5">
                                <div className="row">
                                    <div className="text-center col" key={elem.id}>
                                        <img src={elem.image} alt="" />
                                    </div>
                                    <div className="col">
                                        <p>{elem.title}</p>
                                        <span style={{ textDecoration: 'line-through', color: '#666666' }} >{elem.price}</span>
                                        <span >{elem.fulprice}</span>
                                        <button style={{ border: '1px solid #E21A43', color: '#E21A43', background: 'white', padding: '4px', fontWeight: '600', marginTop: '10%' }}>Buy Now</button><br />

                                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.76224 0.731762C3.83707 0.501434 4.16293 0.501435 4.23776 0.731763L4.84193 2.59119C4.8754 2.69419 4.97139 2.76393 5.07969 2.76393H7.03481C7.27699 2.76393 7.37768 3.07384 7.18175 3.21619L5.60003 4.36537C5.51241 4.42903 5.47574 4.54188 5.50921 4.64488L6.11338 6.5043C6.18821 6.73463 5.92459 6.92616 5.72867 6.78381L4.14695 5.63463C4.05932 5.57097 3.94068 5.57097 3.85305 5.63463L2.27133 6.78381C2.0754 6.92616 1.81179 6.73463 1.88662 6.5043L2.49079 4.64488C2.52426 4.54188 2.48759 4.42903 2.39997 4.36537L0.818248 3.21619C0.622319 3.07384 0.723014 2.76393 0.965195 2.76393H2.92031C3.02862 2.76393 3.1246 2.69419 3.15807 2.59119L3.76224 0.731762Z" fill="#E21A43" />
                                        </svg>

                                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.76224 0.731762C3.83707 0.501434 4.16293 0.501435 4.23776 0.731763L4.84193 2.59119C4.8754 2.69419 4.97139 2.76393 5.07969 2.76393H7.03481C7.27699 2.76393 7.37768 3.07384 7.18175 3.21619L5.60003 4.36537C5.51241 4.42903 5.47574 4.54188 5.50921 4.64488L6.11338 6.5043C6.18821 6.73463 5.92459 6.92616 5.72867 6.78381L4.14695 5.63463C4.05932 5.57097 3.94068 5.57097 3.85305 5.63463L2.27133 6.78381C2.0754 6.92616 1.81179 6.73463 1.88662 6.5043L2.49079 4.64488C2.52426 4.54188 2.48759 4.42903 2.39997 4.36537L0.818248 3.21619C0.622319 3.07384 0.723014 2.76393 0.965195 2.76393H2.92031C3.02862 2.76393 3.1246 2.69419 3.15807 2.59119L3.76224 0.731762Z" fill="#E21A43" />
                                        </svg>

                                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.76224 0.731762C3.83707 0.501434 4.16293 0.501435 4.23776 0.731763L4.84193 2.59119C4.8754 2.69419 4.97139 2.76393 5.07969 2.76393H7.03481C7.27699 2.76393 7.37768 3.07384 7.18175 3.21619L5.60003 4.36537C5.51241 4.42903 5.47574 4.54188 5.50921 4.64488L6.11338 6.5043C6.18821 6.73463 5.92459 6.92616 5.72867 6.78381L4.14695 5.63463C4.05932 5.57097 3.94068 5.57097 3.85305 5.63463L2.27133 6.78381C2.0754 6.92616 1.81179 6.73463 1.88662 6.5043L2.49079 4.64488C2.52426 4.54188 2.48759 4.42903 2.39997 4.36537L0.818248 3.21619C0.622319 3.07384 0.723014 2.76393 0.965195 2.76393H2.92031C3.02862 2.76393 3.1246 2.69419 3.15807 2.59119L3.76224 0.731762Z" fill="#E21A43" />
                                        </svg>

                                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.76224 0.731762C3.83707 0.501434 4.16293 0.501435 4.23776 0.731763L4.84193 2.59119C4.8754 2.69419 4.97139 2.76393 5.07969 2.76393H7.03481C7.27699 2.76393 7.37768 3.07384 7.18175 3.21619L5.60003 4.36537C5.51241 4.42903 5.47574 4.54188 5.50921 4.64488L6.11338 6.5043C6.18821 6.73463 5.92459 6.92616 5.72867 6.78381L4.14695 5.63463C4.05932 5.57097 3.94068 5.57097 3.85305 5.63463L2.27133 6.78381C2.0754 6.92616 1.81179 6.73463 1.88662 6.5043L2.49079 4.64488C2.52426 4.54188 2.48759 4.42903 2.39997 4.36537L0.818248 3.21619C0.622319 3.07384 0.723014 2.76393 0.965195 2.76393H2.92031C3.02862 2.76393 3.1246 2.69419 3.15807 2.59119L3.76224 0.731762Z" fill="#E21A43" />
                                        </svg>

                                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.76224 0.731762C3.83707 0.501434 4.16293 0.501435 4.23776 0.731763L4.84193 2.59119C4.8754 2.69419 4.97139 2.76393 5.07969 2.76393H7.03481C7.27699 2.76393 7.37768 3.07384 7.18175 3.21619L5.60003 4.36537C5.51241 4.42903 5.47574 4.54188 5.50921 4.64488L6.11338 6.5043C6.18821 6.73463 5.92459 6.92616 5.72867 6.78381L4.14695 5.63463C4.05932 5.57097 3.94068 5.57097 3.85305 5.63463L2.27133 6.78381C2.0754 6.92616 1.81179 6.73463 1.88662 6.5043L2.49079 4.64488C2.52426 4.54188 2.48759 4.42903 2.39997 4.36537L0.818248 3.21619C0.622319 3.07384 0.723014 2.76393 0.965195 2.76393H2.92031C3.02862 2.76393 3.1246 2.69419 3.15807 2.59119L3.76224 0.731762Z" fill="#E21A43" fill-opacity="0.3" />
                                        </svg>


                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                    }

                </div>
            </div>
            <br />
        </>
    )
};