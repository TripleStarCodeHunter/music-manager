import React, { useState } from "react";
import "./user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCreditCard,
  faTv,
  faTasks,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

function UserPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="user-background">
      <div className="user-container">
        <div className="user-leftbox">
          <nav className="user-nav">
            <a
              onClick={() => handleTabClick(0)}
              className={activeTab === 0 ? "tab active" : "tab"}
            >
              <FontAwesomeIcon icon={faUser} />
            </a>
            <a
              onClick={() => handleTabClick(1)}
              className={activeTab === 1 ? "tab active" : "tab"}
            >
              <FontAwesomeIcon icon={faCreditCard} />
            </a>
            <a
              onClick={() => handleTabClick(2)}
              className={activeTab === 2 ? "tab active" : "tab"}
            >
              <FontAwesomeIcon icon={faTv} />
            </a>
            <a
              onClick={() => handleTabClick(3)}
              className={activeTab === 3 ? "tab active" : "tab"}
            >
              <FontAwesomeIcon icon={faTasks} />
            </a>
          </nav>
        </div>
        <div className="user-rightbox">
          <div
            className={
              activeTab === 0 ? "profile tabShow" : "payment tabHide"
            }
          >
            <h1>Personal Info</h1>
            <h2>Full Name</h2>
            <input className="user-input" type="text" value="" />
            <h2>Birthday</h2>
            <input className="user-input" type="text" value="" />
            <h2>Gender</h2>
            <input className="user-input" type="text" value="" />
            <h2>Email</h2>
            <input className="user-input" type="email" value="" />
            <h2>Password</h2>
            <input className="user-input" type="password" value="" />
            <button className="user-btn">Update</button>
          </div>

          <div
            className={
              activeTab === 1 ? "payment tabShow" : "payment tabHide"
            }
          >
            <h1>Payment Info</h1>
            <h2>Payment Method</h2>
            <input className="user-input" type="text" value="" />
            <h2>Billing Address</h2>
            <input className="user-input" type="text" value="" />
            <h2>ZipCode</h2>
            <input className="user-input" type="text" value="" />
            <h2>Billing Date</h2>
            <input className="user-input" type="date" value="" />
            <h2>Redeem Card</h2>
            <input className="user-input" type="password" value="" />
            <button className="user-btn">Update</button>
          </div>
          
          <div
            className={
              activeTab === 2 ? "subscription tabShow" : "subscription tabHide"
            }
          >
            <h1>subscription Info</h1>
            <h2>Payment Date</h2>
            <input className="user-input" type="text" value="" />
            <h2>Next Charge</h2>
            <input className="user-input" type="text" value="" />
            <h2>Plan</h2>
            <input className="user-input" type="text" value="" />
            <h2>Monthly Plan</h2>
            <input className="user-input" type="date" value="" />
            <h2>Redeem Card</h2>
            <input className="user-input" type="password" value="" />
            <button className="user-btn">Update</button>
          </div>
          <div
            className={
              activeTab === 3 ? "privacy tabShow" : "privacy tabHide"
            }
          >
            <h1>Privacy Info</h1>
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
)}
export default UserPage;

