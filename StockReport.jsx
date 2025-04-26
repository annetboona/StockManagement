import { useState, useEffect } from "react";
import axios from "axios";

function StockReport() {
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/report")
      .then((response) => setReport(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Stock Report</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Stock In</th>
              <th className="border border-gray-300 px-4 py-2">Stock Out</th>
              <th className="border border-gray-300 px-4 py-2">Balance</th>
            </tr>
          </thead>
          <tbody>
            {report.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  {item.product_id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.stock_in}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.stock_out}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.balance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StockReport;
