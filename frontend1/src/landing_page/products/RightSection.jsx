import React from "react";

export default function RightSection({ imageURL, productName, productDescription, learnMore , anchorTitle }) {
    return (
        <div className="container my-5">
            <div className="row mt-4">

                <div className="col-5 p-4 mt-5">
                    <h1 className="pb-3"> {productName}  </h1>
                    <p className="py-3 " style={{ paddingRight: "20px" }}> {productDescription} </p>
                    <div className="mt-3 mb-3 pb-3">
                        <a href={learnMore} style={{ textDecoration: "none" }}> {anchorTitle} <i class="fa-solid fa-arrow-right-long"></i>  </a>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-6 ">
                    <img src={imageURL} alt="" />
                </div>
            </div>
        </div>
    )
}