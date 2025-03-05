import "./Home.css";
import VFRCard from "@/components/VFRCard/VFRCard";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeBackground"></div>
      <h1 className="homeTitle">
        Welcome to the Virtual Fitting Room Catalog!
      </h1>
      <h2 className="homeFlavourText">
        Make it your style, create it as your own image!
      </h2>
      <div className="homeVFRCatalog">
        <VFRCard
          vfrCardImage="/images/OGHeader.jpg"
          vfrName="THE ORIGINAL"
          vfrCardDescription="Cant miss woth the classic right?"
          vfrCardPage="/og"
        />
        <VFRCard
          vfrCardImage="/images/NeoDefaultHeader.jpg"
          vfrName="NEO DEFAULT"
          vfrCardDescription="The classic, but with a little touch of modernity!"
          vfrCardPage="/neo"
        />
        <VFRCard
          vfrCardImage="/images/NatureBreezeHeader.jpg"
          vfrName="NATURE BREEZE"
          vfrCardDescription="To ensure that we are always connect to mother nature"
          vfrCardPage="/nature"
        />
      </div>
    </div>
  );
}
