export default function Tab({ label, active = false }: { label: string; active?: boolean }) {
    return (
      <div
        style={{
          padding: "8px 20px",
          backgroundColor: active ? "#c9a84c" : "#6b6b6b",
          color: "white",
          borderRadius: "6px 6px 0 0",
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