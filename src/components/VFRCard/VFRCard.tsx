import { ArrowUpRight } from "lucide-react";
import "./VFRCard.css";

interface VFRCardProps {
  vfrCardImage: string;
  vfrName: string;
  vfrCardDescription: string;
  vfrCardPage: string;
}

const VFRCard: React.FC<VFRCardProps> = ({
  vfrCardImage,
  vfrName,
  vfrCardDescription,
  vfrCardPage,
}) => {
  return (
    <div className="VFRCardContainer">
      <a href={vfrCardPage}>
        <div className="VFRCardPhotosCarousel">
          <img className="VFRCardImage" src={vfrCardImage} alt={vfrName} />
        </div>
        <div className="VFRCardInfos">
          <h1 className="VFRCardName">{vfrName}</h1>
          <a className="VFRCardButton" href={vfrCardPage}>
            <h1 className="VFRCardButtonText">Try it Now!</h1>
            <ArrowUpRight className="VFRCardLinkIcon" />
          </a>
        </div>
        <p className="VFRCardDescription">{vfrCardDescription}</p>
      </a>
    </div>
  );
};

export default VFRCard;
