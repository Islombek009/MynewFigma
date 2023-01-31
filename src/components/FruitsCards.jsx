import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FruitsCards() {
    
    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3004/fruits1we")
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
        
            <div style={{background:'white',boxShadow:'0 0  5px grey'}} className="container w-50">
                <div className="row">
                    {post.map(elem => (
                        <>
                            <div className="col-lg-2 col-md-6 col-sm-12 text-center" key={elem.id}>
                                <h1>{elem.icon}</h1>
                                <p>{elem.title}</p>
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