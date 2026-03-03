import Tab from "@/components/Tab";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#d4c5a9", width: "100vw", height: "calc(100vh - 40px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ 
        position: "relative",
        width: "60%", 
        height: "73vh", 
        backgroundImage: "url('/images/document-v3.webp')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}>
        <div style={{ position: "absolute", top: "9.7%", left: "5%" }}>
          <Tab label="Star Wars App" active={true} />
        </div>
      </div>
    </div>
  );
}