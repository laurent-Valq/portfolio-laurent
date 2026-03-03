import HamburgerMenu from "@/components/HamburgerMenu";

export default function Header() {
    return (
      <header style={{
        width: "100%",
        padding: "10px 20px",
        backgroundColor: "rgba(0,0,0,0.7)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}>
        <div style={{ position: "absolute", left: "20px" }}>
          <HamburgerMenu />
        </div>
        Laurent Valquin's Portfolio
      </header>
    );
  }