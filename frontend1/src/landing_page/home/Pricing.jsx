import React from "react";

export default function Pricing() {
    return (
        <div className="container ps-5 ">
            <div className="row ps-5">
                <div className="col-5">
                    <h1 className="fs-2 mb-3">Trust with confidence</h1>
                    <p className="text-muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" style={{ textDecoration: "none" }}>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col">
                    <img src="media/images/pricing-eq.svg" alt="" style={{ width: "50%" }} />
                    <p style={{display:"inline" , fontSize:"10px"}}>Free account opening</p>
                </div>
                <div className="col">
                    <img src="media/images/pricing-eq-(1).svg" alt="" style={{ width: "50%" }} />
                </div>

                <div className="col mb-5">
                <img src="media/images/other-trades.svg" alt="" style={{width: "50%"}} />
                </div>
            </div>
        </div>
    )
}