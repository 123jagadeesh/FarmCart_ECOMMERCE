import React from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerProfile.css"; // Import the CSS file for styling
<<<<<<< HEAD
=======

>>>>>>> eb69791d8ece63bcdf22eeed5c46f699c68911be
import "./../../components/CustomerNavbar"
import CustomerNavbar from "./../../components/CustomerNavbar";

const CustomerProfile = () => {
  const navigate = useNavigate();

  // Sample customer data (in a real app, fetch this from an API or state management)
  const customerData = {
    name: "John Doe",
    email: "jaohn@example.com",
    mobile:"3245465867",
    address: "123 Main Street, City, Country",
    bankDetails: "Bank: XYZ | Account No: 1234567890",
  };

  return (
<<<<<<< HEAD
    <>
    <CustomerNavbar/>
=======

    <div className="Profile">
      <CustomerNavbar />

>>>>>>> eb69791d8ece63bcdf22eeed5c46f699c68911be
    <div className="profile-container">
      <div className="profile-box">
        <h2 className="profile-title">Customer Profile</h2>
        <div className="profile-details">
          <p>
            <strong>Name:</strong> {customerData.name}
          </p>
          <p>
            <strong>Email:</strong> {customerData.email}
          </p>

          <p>
            <strong>Mobile:</strong> {customerData.mobile}
          </p>
          <p>
            <strong>Address:</strong> {customerData.address}
          </p>
          <p>
            <strong>Bank Details:</strong> {customerData.bankDetails}
          </p>
        </div>
        <button
          className="edit-profile-button"
          onClick={() => navigate("/customer-edit")}
        >
          Edit Profile
        </button>
      </div>
    </div>
<<<<<<< HEAD
    </>
=======
    </div>

>>>>>>> eb69791d8ece63bcdf22eeed5c46f699c68911be
  );
};

export default CustomerProfile;
