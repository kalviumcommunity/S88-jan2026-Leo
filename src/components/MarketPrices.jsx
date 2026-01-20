import React from "react";

const mockPrices = [
  {
    crop: "Tomato",
    mandi: "Bengaluru APMC",
    price: "₹18/kg",
    demand: "High",
  },
  {
    crop: "Onion",
    mandi: "Hubli Market",
    price: "₹22/kg",
    demand: "Medium",
  },
  {
    crop: "Potato",
    mandi: "Mysuru Mandi",
    price: "₹15/kg",
    demand: "Low",
  },
];

const MarketPrices = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>📊 Today’s Market Prices</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "1rem",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>Crop</th>
            <th style={thStyle}>Mandi</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Demand</th>
          </tr>
        </thead>

        <tbody>
          {mockPrices.map((item, index) => (
            <tr key={index}>
              <td style={tdStyle}>{item.crop}</td>
              <td style={tdStyle}>{item.mandi}</td>
              <td style={tdStyle}>{item.price}</td>
              <td style={tdStyle}>{item.demand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  borderBottom: "1px solid #ccc",
  textAlign: "left",
  padding: "8px",
};

const tdStyle = {
  padding: "8px",
  borderBottom: "1px solid #eee",
};

export default MarketPrices;
