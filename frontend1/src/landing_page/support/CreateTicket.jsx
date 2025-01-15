import React from "react";

export default function CreateTicket() {
    return (
        <div className="container p-5">
            <div className="row  mt-5  fs-5">
                <h4 className="mb-3">To Create a ticket, select a relevant topic</h4>
            </div>
            <div className="row p-5 mt-3">

                <div className="col-4 pt-3  mb-5">
                    <h4 className="fs-5 mb-4"><i class="fa-solid fa-circle-plus"></i> Account opening</h4>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Getting started </a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Online</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Offline</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Charges</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Company, Partnership and HUF</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Non Resident Indian (NRI)</a>
                </div>

                <div className="col-4 pt-3 mb-5">
                    <h4 className="fs-5 mb-4"><i class="fa-regular fa-user"></i> Your Zerodha Account</h4>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Login credentials </a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Your Profile</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Account modification and segment addition</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>CMR & DP ID</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Nomination</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Transfer and conversion of shares</a>
                </div>

                <div className="col-4 pt-3 mb-5">
                    <h4 className="fs-5 mb-4" mb-3><i class="fa-solid fa-chart-simple"></i> Trading and Markets</h4>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Trading FAQs </a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Kite</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Margins</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Product and order types</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Corporate actions</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Kite features</a>
                </div>
            </div>

            <div className="row mt-5">

                <div className="col-4 pt-3  mb-5">
                    <h4 className="fs-5 mb-4"><i class="fa-regular fa-envelope"></i> Funds</h4>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Fund withdrawal</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Adding funds</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Adding bank accounts</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>eMandates</a>
                   
                </div>

                <div className="col-4 pt-3 mb-5">
                    <h4 className="fs-5 mb-4"><i class="fa-solid fa-circle-dot"></i> Console</h4>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>IPO </a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Portfolio</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Funds statement</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Profile</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Reports</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Referral program</a>
                </div>

                <div className="col-4 pt-3 mb-5">
                    <h4 className="fs-5 mb-3" mb-3><i class="fa-solid fa-coins"></i>  Coin</h4>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Understanding mutual funds and Coin</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Coin app</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Coin web</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>Transactions and reports</a>
                    <a href="" className="text-decoration-none" style={{ paddingBottom: "13px", display: "block" }}>National Pension Scheme (NPS)</a>
                </div>
            </div>
        </div>
    )
}