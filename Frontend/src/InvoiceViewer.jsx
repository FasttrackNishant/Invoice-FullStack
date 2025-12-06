import React, { useEffect, useState } from 'react';

export default function InvoiceViewer() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('here i am ');

    fetch('https://thinkbridgeinvoiceapi.azurewebsites.net/api/invoice')
      .then((resp) => {
        if (!resp.ok) throw new Error('Network response was not ok');
        return resp.json();
      })
      .then((data) => {
        setInvoices(data || []);
        setLoading(false);
      })
      .catch((er) => {
        console.error('Failed to load invoice:', er);
        setError(er);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: 16 }}>Loading invoices…</div>;
  if (error) return <div style={{ padding: 16 }}>Error loading invoices.</div>;

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Roboto, "Segoe UI", sans-serif', padding: 16 }}>
      <h1 style={{ margin: '0 0 12px 0' }}>Thinkbridge Invoice Dashboard</h1>

      <div id="invoice-container">
        {invoices.length === 0 && <div>No invoices found.</div>}

        {invoices.map((inv) => (
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
