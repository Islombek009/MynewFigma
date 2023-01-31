import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Vegetables() {

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get(" http://localhost:3004/Vegetables")
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
            {post.map(post => (
                        <>
                            <div className="col-3 mynewproductsimghover" key={post.id}>
                                <div className=" mynewproductsimg ">
                                    <img src={post.image} alt="" /><br /><br />
                                    <p>{post.title}</p>
                                    <span style={{ textDecoration: 'line-through', color: '#666666' }} className="mynewproductspan">{post.price}</span>
                                    <span className="mynewproductspan">{post.fulprice}</span>
                                </div>
                                <br />
                            </div>
                        </>
                    ))
            }

        </>
    )
};