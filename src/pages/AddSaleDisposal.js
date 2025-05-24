import React from 'react';

const AddSaleDisposal = () => {
  return (
    <div style={{ display: 'flex', backgroundColor: '#0d1520', color: 'white', minHeight: '100vh' }}>
      
      {/* Sidebar */}
      <div style={{ width: '250px', background: '#121c2d', padding: '20px', position: 'fixed', height: '100%' }}>
        <h2 style={{ color: '#00d09c', textAlign: 'center' }}>GROWBIT</h2>
        <nav style={{ marginTop: '30px' }}>
          <a href="#" style={navStyle}>Dashboard</a>
          <a href="#" style={activeNavStyle}>Master Data</a>
          <a href="#" style={navStyle}>Investor Details</a>
          <a href="#" style={navStyle}>Instrument Setup</a>
          <a href="#" style={navStyle}>Taxation</a>
          <a href="#" style={navStyle}>My Investments</a>
          <a href="#" style={navStyle}>Reports</a>
          <a href="#" style={navStyle}>Manipulation</a>
        </nav>
        <button style={{ background: '#ff4b5c', color: 'white', marginTop: '30px', padding: '10px', width: '100%', borderRadius: '8px', border: 'none' }}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: '270px', padding: '30px', width: '100%' }}>
        <h1>ADD NEW SALE/DISPOSAL INFORMATION</h1>

        <form style={{ marginTop: '20px' }}>
          <h2>Commodity Details</h2>

          <FormInput label="Date of Sale" type="date" />
          <FormInput label="Quantity Sold" type="number" />
          <FormInput label="Sell Price Per Unit (In ₹)" type="number" />
          <FormInput label="Sale Value" type="number" />
          <FormInput label="Buyer/Platform Name" type="text" />
          <FormInput label="Charges (if any)" type="number" />

          <h2>Upload Documents</h2>
          <div style={uploadBoxStyle}>
            <p>Upload Sale Invoice (PDF/Image)</p>
            <input type="file" accept="application/pdf,image/*" style={{ marginTop: '10px' }} />
          </div>

          <br />
          <button type="submit" style={submitButtonStyle}>Record Sale Details</button>
        </form>
      </div>

    </div>
  );
};

// Reusable Form Input Component
const FormInput = ({ label, type }) => (
  <div style={{ marginBottom: '20px' }}>
    <label>{label}</label>
    <input
      type={type}
      required
      style={{
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#1c2a44',
        color: 'white',
        marginTop: '5px'
      }}
    />
  </div>
);

// Styles
const navStyle = {
  padding: '10px 0',
  display: 'block',
  color: '#9aa4b5',
  textDecoration: 'none',
  fontSize: '16px'
};

const activeNavStyle = {
  ...navStyle,
  backgroundColor: '#1c2a44',
  color: '#00d09c',
  borderRadius: '8px',
  padding: '10px'
};

const uploadBoxStyle = {
  background: '#1c2a44',
  padding: '40px',
  textAlign: 'center',
  borderRadius: '8px',
  border: '2px dashed #00d09c',
  marginTop: '10px'
};

const submitButtonStyle = {
    background: '#00d09c',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    width: '220px',            // Small fixed width
    height: '45px',            // Fixed height
    borderRadius: '8px',
    border: 'none',
    marginTop: '30px',
    marginBottom: '20px',
    display: 'flex',           // Center text inside button
    alignItems: 'center',      // Vertically center text
    justifyContent: 'center',  // Horizontally center text
    marginLeft: 'auto',
    marginRight: 'auto'
  };
  


export default AddSaleDisposal;
