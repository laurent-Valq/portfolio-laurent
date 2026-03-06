import Tab from "@/components/Tab";
import TitleBand from "@/components/TitleBand";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#d4c5a9", width: "100vw", height: "calc(100vh - 80px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ 
        position: "relative",
        width: "60%", 
        height: "70vh", 
        backgroundImage: "url('/images/document-v3.webp')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="tabs-container">
          <Tab label="Star Wars App" active={true} url="https://starwars-motivator.vercel.app" />
          <Tab label="In Progress" />
          <Tab label="In Progress" />
          <Tab label="In Progress" />
          <Tab label="In Progress" />
          <Tab label="In Progress" />
          <Tab label="In Progress" />
        </div>
        <TitleBand />
      </div>
    </div>
  );
}