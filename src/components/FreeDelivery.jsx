import React from "react";

export default function FreeDelivery() {
    return (
        <>
            <div style={{ background: 'white' }} className="container-fluid">
                <div className="bg-img pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col mt-5">
                                <img src="../images/image.png" alt="" />
                            </div>
                            <div className="col mt-5">
                                <h1 style={{color:'#666666'}}>Our Spiceal Service </h1>
                                <h1 style={{color:'#666666'}}>Fresh Beef</h1>
                                <span style={{ textDecoration: 'line-through', color:'#666666' }} className="mynewproductspan">$20.00</span>
                                <span className="mynewproductspan"> $18.00</span><br /><br />
                                <button style={{border:'1px solid #E21A43', color:'#E21A43', background:'white',padding:'2%', fontWeight:'600'}}>SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}