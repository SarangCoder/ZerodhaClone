import React from "react";

export default function Hero() {
    return (
        <section className="container-fluid p-5 " id="supportHero">
            <div className=" p-5  " id="supportWrapper" >
                <h5 style={{paddingLeft: "110px"}} >Support Portal</h5>
                <a href="" className="text-white">Track Tickets</a>
            </div>

            <div className="row pt" id="supportFlex">
                <div className="col-1"></div>
                <div className="col-6 ps-5" >
                    <h3 className="" >Search for an answer or browse help topics to create a ticket</h3>
                    <input type="text" placeholder="Eg: how do i activate F&), why is my order gegtting rejected.." />

                    <a href="">Track account</a>
                    <a href="">opening Track</a>
                    <a href="">segment activation</a>
                    <a href="">Intraday margins</a>
                    <a href="">Kite user manual</a>
                </div>
                <div className="col-4 pb-5" style={{lineHeight: "1.8"}}>
                    <h3>Featuret</h3>
                    <ol>
                        <li> <a href=""> Surveillance measure on scrips - August 2024 </a></li>
                        <li><a href=""> Latest Intraday leverages and Square-off timings</a ></li>
                    </ol>


                </div>
            </div>
        </section>
    )
}