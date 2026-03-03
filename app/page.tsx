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
        <div style={{ position: "absolute", top: "9.7%", left: "3.4%", display: "flex", flexDirection: "row", flexWrap: "nowrap", gap: "4px" }}>
          <Tab label="Star Wars App" active={true} />
          <Tab label="En cours" />
          <Tab label="En cours" />
          <Tab label="En cours" />
          <Tab label="En cours" />
          <Tab label="En cours" />
          <Tab label="En cours" />
        </div>
      </div>
    </div>
  );
}