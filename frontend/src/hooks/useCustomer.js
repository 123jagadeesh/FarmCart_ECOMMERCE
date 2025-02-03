import { useState } from "react";
import {
  getApprovedProducts,
  updateProfile,
  placeOrder,
  getCustomerOrders,
  addToWishlist,
  getWishlist
} from "../services/customerService";

const useCustomer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Approved Products
  const handleGetApprovedProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      return await getApprovedProducts(token);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  // Update Profile
  const handleUpdateProfile = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      return await updateProfile(userData, token);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  // Place Order
  const handlePlaceOrder = async (customerId, products) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      return await placeOrder(customerId, products, token);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  // Get Customer Orders
  const handleGetCustomerOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      return await getCustomerOrders(token);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch orders.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToWishList = async (productId)=>{
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      return await addToWishlist(productId, token);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to place order.");
    } finally {
      setLoading(false);
    }

  };

  const handleGetWishlist = async(req,res)=>{
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      return await getWishlist(token);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to place order.");
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    error,
    handleGetApprovedProducts,
    handleUpdateProfile,
    handlePlaceOrder,
    handleGetCustomerOrders,
    handleAddToWishList,
    handleGetWishlist
  };
};

export default useCustomer;
