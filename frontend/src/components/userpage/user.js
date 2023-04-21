import React from "react";
import "./user.css";

const User = () => {
    return ( 
        <div className="user-background">
    <div className="user-container">
        <div className="user-leftbox">
            <nav className="user-nav">
                <a onclick="tabs(0)" className="tab active " href='/'>
                    <i className="fa fa-user"></i>
                </a>
                <a onclick="tabs(1)" className="tab" href='/'>
                    <i className="fa fa-credit-card"></i>
                </a>
                <a onclick="tabs(2)" className="tab" href='/'>
                    <i className="fa fa-tv"></i>
                </a>
                <a onclick="tabs(3)" className="tab" href='/'>
                    <i className="fa fa-tasks"></i>
                </a>
                <a onclick="tabs(4)" className="tab" href='/'>
                    <i className="fa fa-cog"></i>
                </a>
            </nav>
        </div>
        <div className="user-rightbox">
            <div className="profile tabShow">
                <h1>Personal Info</h1>
                <h2>Full Name</h2>
                <input className="user-input" type="text" value="" />
                <h2>Birthday</h2>
                <input className="user-input" type="text" value="" />
                <h2>Gender</h2>
                <input className="user-input" type="text"  value="" />
                <h2>Email</h2>
                <input className="user-input" type="email"  value="" />
                <h2>Password</h2>
                <input className="user-input" type="password"  value="" />
                <button className="user-btn">Update</button>
            </div>
            <div className="payment tabShow">
                <h1>Payment Info</h1>
                <h2>Payment Method</h2>
                <input className="user-input" type="text"  value="" />
                <h2>Billing Address</h2>
                <input className="user-input" type="text"  value="" />
                <h2>ZipCode</h2>
                <input className="user-input" type="text"  value="" />
                <h2>Billing Date</h2>
                <input className="user-input" type="date"  value="" />
                <h2>Redeem Card</h2>
                <input className="user-input" type="password"  value="" />
                <button className="user-btn">Update</button>
            </div>
            <div className="subscription tabShow">
                <h1>Subscription Info</h1>
                <h2>Payment Date</h2>
                <input className="user-input" type="text" value="20-04-2003" disabled />
                <h2>Next Charge</h2>
                <input className="user-input" type="text" value="Rs.100" disabled />
                <h2>Plan </h2>
                <input className="user-input" type="text"  value="Laptop-Limited" disabled/>
                <h2>Monthly Plan</h2>
                <input className="user-input" type="text"  value="valid till 20-05-2003" disabled />
            </div>
            <div className="privacy tabShow">
                <h1>Privacy Settings</h1>
                <h2>Manage Email Notification</h2>
                <p></p>
                <h2>View Terms Of Use</h2>
                <p></p>
                <h2>Personalized Ads</h2>
                <p></p>
                <h2>Protect Account</h2>
                <p></p>
            </div>
        </div>
    </div>
</div>
     );
}
 
export default User;