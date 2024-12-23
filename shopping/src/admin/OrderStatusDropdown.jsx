function OrderStatusDropdown({ orderId, initialStatus, onChange }) {
    const [status, setStatus] = React.useState(initialStatus);
  
    const statuses = [
      { label: "Pending", color: "#FFA500" },
      { label: "Shipped", color: "#1E90FF" },
      { label: "Delivered", color: "#28a745" },
      { label: "Cancelled", color: "#dc3545" },
    ];
  
    const handleChange = (event) => {
      const newStatus = event.target.value;
      setStatus(newStatus);
      onChange(newStatus); 
    };
  
    return (
      <div className="ps-2" style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#f8f9fa'
      }}>
        <span
          style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: statuses.find((s) => s.label === status)?.color || "#FFA500",
          }}
        ></span>
        <select
          value={status}
          onChange={handleChange}
          style={{
            padding: '8px 12px',
            border: 'none',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          {statuses.map((s) => (
            <option key={s.label} value={s.label}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
    );
  }