import React from 'react';

function App() {

  const heading = "Office Space Rental App";

  const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai"
  };

  const officeList = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai"
    },
    {
      name: "WeWork",
      rent: 65000,
      address: "Hyderabad"
    },
    {
      name: "Regus",
      rent: 55000,
      address: "Bangalore"
    },
    {
      name: "Smartworks",
      rent: 75000,
      address: "Mumbai"
    }
  ];

  return (
    <div>

      <h1>{heading}</h1>

      <img
        src="/office.jpg"
        alt="Office Space"
        width="300"
      />

      <h2>Office Details</h2>

      <h3>Name: {office.name}</h3>

      <h3
        style={{
          color: office.rent < 60000 ? 'red' : 'green'
        }}
      >
        Rent: Rs. {office.rent}
      </h3>

      <h3>Address: {office.address}</h3>

      <hr />

      <h1>Office Space List</h1>

      {officeList.map((item, index) => (
        <div key={index}>

          <h2>Name: {item.name}</h2>

          <h3
            style={{
              color: item.rent < 60000 ? 'red' : 'green'
            }}
          >
            Rent: Rs. {item.rent}
          </h3>

          <h3>Address: {item.address}</h3>

          <hr />

        </div>
      ))}

    </div>
  );
}

export default App;