import "../app/home/Home.css";
import VFRCard from "@/components/VFRCard/VFRCard";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeBackground"></div>
      <h1 className="homeTitle">
        Welcome to the Virtual Fitting Room Catalog!
      </h1>
      <h2 className="homeFlavourText">
        Glance into the infinite sea of possibilities that you can do with your
        virtual fitting room
      </h2>
      <div className="homeVFRCatalog">
        <VFRCard
          vfrCardImage="/images/CEAHeader.png"
          vfrName="C&A"
          vfrCardDescription="The classic but with a soft new touch to it!"
          vfrCardPage="/cea"
        />
        <VFRCard
          vfrCardImage="/images/PurushaHeader.png"
          vfrName="PURUSHA PEOPLE"
          vfrCardDescription="Embracing the spirit of nature"
          vfrCardPage="/purusha"
        />
        <VFRCard
          vfrCardImage="/images/CEAHeader.png"
          vfrName="CALZEDONIA"
          vfrCardDescription="Cant miss with the classic right?"
          vfrCardPage="/og"
        />
      </div>
    </div>
  );
}
