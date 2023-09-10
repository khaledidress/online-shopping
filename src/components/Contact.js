import React, { useRef } from 'react';
import { Link } from 'react-router-dom'

import { FaPhone, FaEnvelope, FaUser } from "react-icons/fa";



function Contact() {
    const name = useRef("");
    const mail = useRef("");
    const phone = useRef("");
    const text = useRef("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newContact = {
            name: name.current.valueOf,
            email: mail.current.valueOf,
            phone: phone.current.valueOf,
            text: text.current.valueOf
        }

        const response = await fetch('https://react-contact-us-42254-default-rtdb.firebaseio.com/contactus.json', {
            method: "POST",
            body: JSON.stringify(newContact),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await response.json();
        alert("data has been successfully sent")
        console.log(data)
    }
    return (
        <form className='container border my-4 my-form p-100' >
            <h1 className='text-center  text-warning fw-bold' >Contact Us</h1>
            <div className='control'>
                <label htmlFor='name' style={{ fontSize: "25px" }}>Name</label>
                <FaUser className='text-warning' />  <input className='  ms-80 w-75 d-inline-block  ' type='name' ref={name} id='name' placeholder='Enter your name' ></input>
            </div>
            <div className='control  '>
                <label htmlFor='email' style={{ fontSize: "25px" }}>Email</label>
                <FaEnvelope className='text-warning' /> <input className='  ms-80 w-75 d-inline-block  ' type='email' ref={mail} id='email' placeholder='Enter valid email address'></input>
            </div>
            <div className='control '>
                <label htmlFor='phone' style={{ fontSize: "25px" }}>  Phone-Number</label>
                <FaPhone className='text-warning' /><input className='   w-75 d-inline-block  ' type='tel' id='phone' ref={phone} placeholder='Enter valid phone number' />
            </div>

            <div className='control'>
                <label htmlFor='text' style={{ fontSize: "25px" }}>Comment</label>
                <textarea className='  ms-80 w-50 d-inline-block  ' ref={text} id='text' placeholder='What is your comment?'></textarea>
            </div>
            <div className=' text-center my-3 ' id='sub'>
                <button type="submit" className="button" onClick={handleSubmit}>Submit</button>
            </div>


            <React.Fragment>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-sm-6 main-text">
                            <span>If there is no response, contact us on our social media sites.</span>

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

                                <Link to={{ pathname: "https://github.com/khaledidress/" }} target="_blank" >
                                    <i class="fab fa-github"></i>
                                </Link>

                            </div>
                        </div>
                        <div className="col-sm-6 second-column  ">
                            <img className="banner" src="../img/contact.svg" alt="" />
                        </div>
                    </div>

                </div>
            </React.Fragment>

        </form>



    );
}

export default Contact;

