export default function Tab({ label, active = false }: { label: string; active?: boolean }) {
    return (
      <div
        className="tab-item"
        style={{
          padding: "8px 20px",
          backgroundColor: active ? "#c9a84c" : "#6b6b6b",
          color: "white",
          cursor: "pointer",
          fontSize: "12px",
          letterSpacing: "1px",
          fontFamily: "Georgia, serif",
          width: "150px",
          textAlign: "center",
        }}
      >
        {label}
      </div>
    );
  }