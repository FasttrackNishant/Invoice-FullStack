import React, { useEffect, useState } from 'react';

export default function InvoicePage() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const data = 
[
  {
    "invoiceID": 1,
    "customerName": "Rahul Sharma",
    "items": [
      {
        "itemID": 1,
        "name": "Notebook A5",
        "price": 79
      }
    ]
  },
  {
    "invoiceID": 2,
    "customerName": "Priya Singh",
    "items": [
      {
        "itemID": 2,
        "name": "Wireless Mouse",
        "price": 499
      }
    ]
  },
  {
    "invoiceID": 3,
    "customerName": "Amit Verma",
    "items": [
      {
        "itemID": 3,
        "name": "USB-C Charger",
        "price": 899
      }
    ]
  },
  {
    "invoiceID": 4,
    "customerName": "Neha Patel",
    "items": [
      {
        "itemID": 4,
        "name": "Laptop Stand",
        "price": 1299
      }
    ]
  },
  {
    "invoiceID": 5,
    "customerName": "Vikram Reddy",
    "items": [
      {
        "itemID": 5,
        "name": "16GB Pen Drive",
        "price": 349
      }
    ]
  }
]




  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Roboto, "Segoe UI", sans-serif', padding: 16 }}>
      <h1 style={{ margin: '0 0 12px 0' }}>Invoice</h1>

      <div id="invoice-container">
        {data.length === 0 && <div>No invoices found.</div>}

        {data.map((inv) => (
          <div
            key={inv.invoiceID}
            style={{
              border: '1px solid #e5e7eb',
              padding: 12,
              borderRadius: 8,
              marginBottom: 10,
              boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 6 }}>
              {inv.customerName} — #{inv.invoiceID}
            </div>

            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {inv.items.map((item) => (
                <li key={item.itemID}>
                  {item.name} — ₹{item.price}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
