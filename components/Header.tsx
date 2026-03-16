import HamburgerMenu from "@/components/HamburgerMenu";

export default function Header() {
    return (
      <header style={{
        width: "100%",
        padding: "10px 20px",
        backgroundColor: "#1e1e1e",
        color: "#eaeaea",
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