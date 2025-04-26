import { useState, useEffect } from "react";
import axios from "axios";
import "./Stock.css";

const StockManager = () => {
  const [stocks, setStocks] = useState([]);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/stock")
      .then((response) => setStocks(response.data))
      .catch((error) => console.error("Error fetching stock:", error));
  }, []);

  const updateStock = async (type) => {
    await axios.post(`http://localhost:5000/stock/${type}`, {
      productName,
      quantity: parseInt(quantity),
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Stock Out Management</h1>

        <div className="input-group">
          <input
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button className="stock-out" onClick={() => updateStock("out")}>
            Stock Out
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((item, index) => (
              <tr key={index}>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockManager;
