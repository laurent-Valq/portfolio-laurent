export default function TitleBand() {
    return (
      <div className="title-band" style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "70%",
        padding: "14px 20px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        textAlign: "center",
        fontFamily: "Georgia, serif",
        fontSize: "16px",
        letterSpacing: "3px",
        color: "#f5f0e8",
        border: "1px solid #d4b483",
      }}>
        Laurent Valquin — Creative Frontend Developer
      </div>
    );
  }