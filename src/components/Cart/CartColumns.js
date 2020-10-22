import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2" >
                    <p className="text-uppercase">Adventure Name</p>
                </div>
                <div className="col-10 mx-auto col-lg-2" >
                    <p className="text-uppercase">Date of Adventure</p>
                </div>
                <div className="col-10 mx-auto col-lg-2" >
                    <p className="text-uppercase">price per person</p>
                </div>
                <div className="col-10 mx-auto col-lg-2" >
                    <p className="text-uppercase"># of Participants</p>
                </div>
                <div className="col-10 mx-auto col-lg-2" >
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2" >
                    <p className="text-uppercase">total</p>
                </div>
            </div>
        </div>
    )
}
