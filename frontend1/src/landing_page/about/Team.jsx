import React from "react";

export default function Signup (){
    return (
        <div className="container">
        <div className="row p-5 mb-5  border-top">
            <h1 className=" text-center mt-5" >People </h1>

        </div>

        <div className="row p-5  text-muted fs-6 d-flex justify-content-center" style={{lineHeight:"1.8" , fontSize:"20px"}}>
            <div className="col-6 p-5 text-center">
                <img src="media/images/nithinKamath.jpg" alt="" style={{borderRadius:"100%" ,width : "50%"}} />
                <h4 className="mt-5">Nithin Kamath</h4>
                <h6>Founder, CEO</h6>
            </div>
            <div className="col-6 p-5" >
                <p style={{ fontSize:"1.1em"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                <p style={{ fontSize:"1.1em"}}>  He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                <p style={{ fontSize:"1.1em"}}>Playing basketball is his zen.</p>

                <p>Connect onHomepage  
                    <a href="" className="text-decoration-none"> Home /</a>
                    <a href="" className="text-decoration-none"> TradingQnA /</a>
                    <a href="" className="text-decoration-none"> Twitter /</a>

            
                    
                </p>
            </div>

        </div>

    </div>
    )
}