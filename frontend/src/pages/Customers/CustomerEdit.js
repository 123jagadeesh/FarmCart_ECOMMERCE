import React, { useState, useEffect } from "react";
import useCustomer from "../../hooks/useCustomer"; // Adjust the import path if needed


import { useNavigate } from "react-router-dom";


import CustomerNavbar from "../../components/CustomerNavbar";
import "./CustomerEdit.css"; // Import CSS for styling

const CustomerEdit = () => {
  // Prepopulate with existing data; in a real app, this might come from props, context, or an API
  const [name, setName] = useState("John Doe");
  const[email,setEmail] = useState("john@example.com")
  const [mobile, setMobile] = useState("123-456-7890");
  const [address, setAddress] = useState("123 Main Street, City, Country");
    const [customerData, setcustomerData] = useState(null);
  useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("customerData"));
      if (storedData) {
        setcustomerData(storedData);
        setName(storedData.name || "");
        setEmail(storedData.email || "");
        // Assuming storedData.phone contains the mobile number
        setMobile(storedData.phone || "");
        setAddress(storedData.address || "");
      } else {
        // If no data is found, use dummy defaults
        const dummyData = { name: "Not fetched",email:"Not fetched", phone: "Not fetched", address: "Not fetched" };
        setcustomerData(dummyData);
        setName(dummyData.name);
        setEmail(dummyData.email);

        setMobile(dummyData.phone);
        setAddress(dummyData.address);
      }
    }, []);

  const navigate = useNavigate();
  const { handleUpdateProfile, loading, error } = useCustomer();


  const handleSave =async (e) => {
    e.preventDefault();
    const updatedData = { name,email, phone: mobile, address };
    try {
      await handleUpdateProfile(updatedData);
      // Optionally, update localStorage with the new data
      const newCustomerData = { ...customerData, name,email, phone: mobile, address };
      setcustomerData(newCustomerData);
      localStorage.setItem("customerData", JSON.stringify(newCustomerData));
      // Navigate back to the dashboard after update
      navigate("/customer-Dashboard");
    } catch (err) {
      alert("Failed to update profile!");
      console.log(err);
    }
  };

  return (

    <div className="Edit">
      <CustomerNavbar />


    <div className="edit-container">
      <div className="edit-box">
        <h2 className="edit-title">Edit Profile</h2>
        <form onSubmit={handleSave} className="edit-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="edit-input"
            required
          />
                    <input
            type="text"
            placeholder="Full Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="edit-input"
            required
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="edit-input"
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="edit-input"
            required
          />
          <button type="submit" className="save-button">
            Save Changes
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default CustomerEdit;
