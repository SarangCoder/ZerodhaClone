import React from "react";

export default function Hero () {
    return (
        <div>
            <div className="container p-5 mb-5 text-center">
                <div className="row">
                    <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5" />
                    <h1 className="mt-5">Imvest in everything</h1>
                    <p>Online platform to invest in stocks , derivatives, mutual funds, and more</p>
                    <button className="p-2 btn btn-primary fs-5" style={{width: "20%" , margin: "0 auto"}}>Signup Now</button>
                </div>
            </div>
        </div>
    );
}