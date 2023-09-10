import React from 'react'
import '../landing.css'

export default function RedirectSignup() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img className="mx-auto d-block banner" alt="redirect" src="../img/register.svg" />
                        <h1 className="mt-4 text-center" style={{ fontSize: "50px", fontWeight: "bold" }} >
                            You must <span style={{ borderBottom: "4px solid #9C23B7" }}>Register</span> first<br />
                        </h1>

                        <p className="mt-4 text-center" style={{ fontSize: "25px", fontWeight: "bold" }}>
                            How could you access products without registering , ha?
                        </p>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
