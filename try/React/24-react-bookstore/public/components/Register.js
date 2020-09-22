import React from 'react';
import {Link  } from 'react-router-dom';

class Register extends React.Component {
   state = {
       email: '',
       password: '',
       repassword: '',
       errorcomponent: null,
       showErrorModal: null,
       resultElement: null
   }
    render() {
        return (
            <React.Fragment>
            <div class="breadcrumb">
        <div class="container">
            <a class="breadcrumb-item" href="/">Home</a>
            <span class="breadcrumb-item active">Register</span>
        </div>
    </div>
    <section class="static about-sec">
        <div class="container">
            <h1>My Account / REgister</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
            <div class="form">
                <form >
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <input type="email"  placeholder="Enter User Name" required/>
                            <span class="required-star">*</span>
                        </div>
                        <div class="col-md-4">
                            <input type="password" name="password" id="inputPassword" placeholder="Password"  required/>
                            <span class="required-star">*</span>
                        </div>
                        <div class="col-md-4">
                            <input type="password" name="password" id="inputPassword1" placeholder="Repeat Password" required/>
                            <span class="required-star">*</span>
                        </div>
                        <div class="col-lg-8 col-md-12">
                            <button class="btn black submitbtn">Register</button>
                            <h5>not Registered? <a href="login.html">Login here</a></h5>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </React.Fragment>
            
        );
    }
}

export default Register;