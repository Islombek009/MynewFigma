import React from "react";


export default function Carousel() {
    return (
        <>
            <div  style={{background:'white'}} id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row">
                            <div style={{marginLeft:'7%'}} className="col-lg-6 col-md-12 mt-5">
                                <h1>All You Need For</h1>
                                <h1>Perfect   Breakfast</h1><br />
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span><br />
                                <span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500</span><br /><br />
                                <button className="carousel-btn-1">BUY NOW</button>
                                <button className="carousel-btn-2 ml-2"> SEE MORE</button>
                            </div>
                            <div className="col">
                                <img style={{width:'100%'}} src='images/sushi.png' class="d-block" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div className="row">
                            <div style={{marginLeft:'7%'}} className="col-lg-6 col-md-12 mt-5">
                                <h1>All You Need For</h1>
                                <h1>Perfect   Breakfast</h1><br />
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span><br />
                                <span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500</span><br /><br />
                                <button className="carousel-btn-1">BUY NOW</button>
                                <button className="carousel-btn-2 ml-2"> SEE MORE</button>
                            </div>
                            <div className="col">
                                <img style={{width:'100%'}} src="images/sushi.png" class="d-block" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div className="row">
                            <div style={{marginLeft:'7%'}} className="col-lg-6 col-md-12     mt-5">
                                <h1>All You Need For</h1>
                                <h1>Perfect   Breakfast</h1><br />
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span><br />
                                <span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500</span><br /><br />
                                <button className="carousel-btn-1">BUY NOW</button>
                                <button className="carousel-btn-2 ml-2"> SEE MORE</button>
                            </div>
                            <div className="col">
                                <img style={{width:'100%'}} src="images/sushi.png" class="d-block" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <button style={{border:' 1.5px solid #E21A43' ,background:'#E21A43',width:'4%',height:'50px'   }} class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span style={{color:'#E21A43'}} class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button style={{border:' 1.5px solid #E21A43' ,background:'#E21A43',width:'4%',height:'50px'   }} class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}