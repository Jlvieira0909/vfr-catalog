import "./Home.css";
import VFRCard from "@/components/VFRCard/VFRCard";

export default function Home() {
  return (
    <div className="homeContainer">
      <h1 className="homeTitle">
        Welcome to the Virtual Fitting Room Catalog!
      </h1>
      <h2 className="homeFlavourText">Make it your style!</h2>
      <div className="homeVFRCatalog">
        <VFRCard
          vfrCardImage="/images/Placeholder.jpg"
          vfrName="THE OG"
          vfrCardDescription="Cant miss woth the classic right?"
          vfrCardPage=""
        />
        <VFRCard
          vfrCardImage="/images/Placeholder.jpg"
          vfrName="THE OG"
          vfrCardDescription="Cant miss woth the classic right?"
          vfrCardPage=""
        />
        <VFRCard
          vfrCardImage="/images/Placeholder.jpg"
          vfrName="THE OG"
          vfrCardDescription="Cant miss woth the classic right?"
          vfrCardPage=""
        />
        <VFRCard
          vfrCardImage="/images/Placeholder.jpg"
          vfrName="THE OG"
          vfrCardDescription="Cant miss woth the classic right?"
          vfrCardPage=""
        />
        <VFRCard
          vfrCardImage="/images/Placeholder.jpg"
          vfrName="THE OG"
          vfrCardDescription="Cant miss woth the classic right?"
          vfrCardPage=""
        />
      </div>
    </div>
  );
}
