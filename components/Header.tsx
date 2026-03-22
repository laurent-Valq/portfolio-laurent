import HamburgerMenu from "@/components/HamburgerMenu";

export default function Header() {
    return (
      <header style={{
        width: "100%",
        padding: "20px 20px",
        backgroundColor: "#d9cbb1",
        color: "#161616",
        display: "flex",
        alignItems: "center",
        position: "relative",
        justifyContent: "space-between",
      }}>
        <span>Laurent Valquin</span>
        <HamburgerMenu />
      </header>
    );
  }