export default function Footer() {
  return (
    <footer style={{
      width: "100%",
      padding: "20px 20px",
      backgroundColor: "#d9cbb1",
      color: "#161616",
      textAlign: "center",
      fontFamily: "Georgia, serif",
      fontSize: "14px",
      letterSpacing: "1px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
    }}>
      <span>© 2026 Laurent Valquin</span>
      <a href="https://github.com/laurent-Valq" target="_blank" rel="noopener noreferrer" style={{ color: "#161616", textDecoration: "none" }}>GitHub</a>
      <a href="https://linkedin.com/in/laurent-valquin" target="_blank" rel="noopener noreferrer" style={{ color: "#161616", textDecoration: "none" }}>LinkedIn</a>
      <a href="mailto:laurentvalquin81@gmail.com" style={{ color: "#161616", textDecoration: "none" }}>Contact</a>
    </footer>
  );
}