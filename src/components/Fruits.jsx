import React, { useState, useEffect } from "react";
import axios from "axios"

export default function Fruits() {

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3004/Fruits")
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

        </>
    )
};