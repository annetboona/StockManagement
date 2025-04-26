import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Stock.css";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [newProduct, setNewProduct] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products", {
        withCredentials: true,
      });
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addProduct = async () => {
    if (!newProduct) {
      console.log("Product name required");
      return;
    }
    try {
      await axios.post(
        "http://localhost:5000/api/products",
        { product_name: newProduct },
        { withCredentials: true }
      );
      setNewProduct("");
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const editProduct = async (id, updatedName) => {
    if (!updatedName) {
      console.log("Product name required");
      return;
    }
    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, {
        product_name: updatedName,
      });
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        withCredentials: true,
      });
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="containerr">
        <h1> Product Management</h1>

        <div className="input-group">
          <input
            type="text"
            name="product"
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
            placeholder="Product name"
          />
          <button type="button" onClick={addProduct} className="add-button">
            Add Product
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.length > 0 ? (
            product.map((item, index) => (
              <tr key={index}>
                <td>{item._id}</td>
                <td>{item.product_name}</td>
                <td className="actions">
                  <button
                    type="button"
                    onClick={() => deleteProduct(item._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => editProduct(item._id, "New Name")}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Products;
