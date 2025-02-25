import React from "react";

export default function Hero(){
    return(
        <div className="container">
            <div className="row border-bottom mt-5 p-5 text-center">
                <h1>Pricing</h1>
                <h6 className="text-muted mt-3">Free equity investments and flat ₹20 intraday and F&O trades</h6>
            </div>

            <div className="row mt-5 p5 text-center border-bottom">
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" alt="" />
                    <h3>Free equity delivery</h3>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className="col-4 p-5">
                    <img src="media/images/intradayTrades.svg" alt="" />
                    <h3>Intraday and F&O trades</h3>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" alt="" />
                    <h3>Free direct MF</h3>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}