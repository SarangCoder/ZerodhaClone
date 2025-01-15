import React from "react";

export default function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container my-4">
            <div className="row mt-4 pb-5">
                <div className="col-6 ">
                    <img src={imageURL} alt="" />
                </div>
                <div className="col-1"></div>
                <div className="col-5 p-4 mt-5">
                    <h1 className="pb-3"> {productName}  </h1>
                    <p className="py-3 " style={{paddingRight: "20px"}}> {productDescription} </p>
                    <div className="mt-3 mb-3 pb-3">
                        <a href={tryDemo} style={{ textDecoration:"none"}}> Try Demo  <i class="fa-solid fa-arrow-right-long"></i>  </a>
                        <a href={learnMore} style={{marginLeft:"60px" , textDecoration:"none"}}> Learn More  <i class="fa-solid fa-arrow-right-long"></i>  </a>
                    </div>

                    <a href={googlePlay} className="me-3"> <img src="media/images/googlePlayBadge.svg" alt="" />  </a>
                    <a href={appStore}> <img src="media/images/appstoreBadge.svg" alt="" /> </a>


                </div>
            </div>
        </div>
    )
}