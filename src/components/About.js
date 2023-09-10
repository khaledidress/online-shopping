import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../landing.css'

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-sm-6 second-column  ">
                            <img className="banner" src="../img/about.svg" alt="" />
                        </div>
                        <div className="col-sm-6 main-text">
                            <span>Welcome to our website</span>
                            <span>
                                <p>Covers all brands and the latest releases in all types of electronics, our team of expersts brings you the best content and insights to help you stay ahead of the curve.</p>
                            </span>

                            <div className="social">

                                <Link to={{ pathname: "https://www.facebook.com/profile.php?id=100008971428498" }} target="_blank" >
                                    <i class="fab fa-facebook-square"></i>
                                </Link>

                                <Link to={{ pathname: "https://www.twitter.com/khaledahmed/" }} target="_blank" >
                                    <i class="fab fa-twitter"></i>
                                </Link>

                                <Link to={{ pathname: "https://www.linkedin.com/in/khaledahmed/" }} target="_blank" >
                                    <i class="fab fa-linkedin"></i>
                                </Link>

                                <Link to={{ pathname: "https://www.github.com/khaledahmed/" }} target="_blank" >
                                    <i class="fab fa-github"></i>
                                </Link>

                            </div>

                        </div>

                    </div>
                </div>

            </React.Fragment>
        )
    }
}
