import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCustomer from "../../hooks/useCustomer";
import CustomerNavbar from "../../components/CustomerNavbar";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams(); // product ID from URL
  const navigate = useNavigate();
  const { handleGetApprovedProducts, handleAddToWishList ,handleAddToCart} = useCustomer();

  const [product, setProduct] = useState(null);
  const [approvedProducts, setApprovedProducts] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [showSimilar, setShowSimilar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch approved products and then find the selected product and its similar products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await handleGetApprovedProducts();
        setApprovedProducts(productsData);
        const selectedProduct = productsData.find((p) => p._id === id);
        if (!selectedProduct) {
          setError("Product not found or not approved.");
        } else {
          setProduct(selectedProduct);
          // Filter similar products (same category, excluding the selected product)
          const similar = productsData.filter(
            (p) => p.category === selectedProduct.category && p._id !== selectedProduct._id
          );
          setSimilarProducts(similar);
        }
      } catch (err) {
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id, handleGetApprovedProducts]);

  const addToWishlist = async () => {
       try{
      await handleAddToWishList(product._id);
      alert("Added to wishlist successfully");
    }catch(e){
      alert("Error adding to wishLIst")
    }
  };
  
  const addToCart = async () => {
    try {
      await handleAddToCart(product._id);
      alert("Added to cart successfully!");
    } catch (err) {
      alert("Error adding to wishlist.");
    }
  };

  const handleSimilarClick = (similarId) => {
    // Navigate to the clicked similar product's details.
    navigate(`/product-details/${similarId}`);
  };

  if (loading) return <p className="loading">Loading product details...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!product) return null;

  return (
    <div className="product-details-container">
      <CustomerNavbar />

      <div className="product-main">
        {/* Left: Product Image */}
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-main-image" />
        </div>

        {/* Right: Product Details */}
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price"><strong>Price:</strong> {product.price}</p>
          <p className="product-category"><strong>Category:</strong> {product.category}</p>
          <p className="product-expiry">
            <strong>Expiry Date:</strong> {new Date(product.expiryDate).toLocaleDateString()}
          </p>
          <p className="product-rating"><strong>Rating:</strong> {product.ratings}</p>

          {/* Additional approved product details */}
          <p className="product-farmer"><strong>Farmer Name:</strong> {product.farmerName}</p>
          <p className="product-farmer-number"><strong>Farmer Phone:</strong> {product.farmerNumber}</p>
          <p className="product-farmer-address">
            <strong>Farmer Address:</strong> {product.farmerAddress || "Address not provided"}
          </p>

          {/* Action Buttons */}
          <div className="details-buttons">
            <button className="cart-btn" onClick={addToCart}>🛒 Add to Cart</button>
            <button className="wishlist-btn" onClick={addToWishlist}>
              ❤️ Add to Wishlist
            </button>
            <button className="similar-btn" onClick={() => setShowSimilar(!showSimilar)}>
              {showSimilar ? "Hide Similar Products" : "Show Similar Products"}
            </button>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      {showSimilar && similarProducts.length > 0 && (
        <div className="similar-products-section">
          <h3>Similar Products</h3>
          <div className="similar-products-container">
            {similarProducts.map((simProd) => (
              <div
                key={simProd._id}
                className="similar-product-card"
                onClick={() => handleSimilarClick(simProd._id)}
              >
                <img src={simProd.image} alt={simProd.name} className="similar-product-image" />
                <p className="similar-product-name">{simProd.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
