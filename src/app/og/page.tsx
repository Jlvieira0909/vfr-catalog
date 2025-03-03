import NavBar from "@/components/NavBar/NavBar";
import "../VFRPage.css";
import Footer from "@/components/Footer/Footer";

export default function Og() {
  return (
    <>
      <NavBar />
      <div className="VFRContainer">
        <div className="VFRThumbNail"></div>
        <div className="VFRBackground"></div>

        <div className="VFRMainSection">
          <h1 className="VFRFlavourTitle">REBEL LIKE THE OG!</h1>
        </div>

        <div className="VFRSectionContainerWrapper">
          <div className="VFRSectionContainer">
            <div className="VFRSection">
              <h1 className="VFRTitle">The Original, The Classic!</h1>
              <p className="VFRDescription">
                You can't miss with the classics, right?
              </p>
            </div>

            <div className="VFRSection">
              <div className="VFRDesktopInfo">
                <h1 className="VFRDesktopTitle">Try it on Desktop!</h1>
              </div>
              <div className="VFRDesktopImageContainer">
                <img
                  className="VFRDesktopImage"
                  src="/images/Desktop.png"
                  alt="Desktop Version"
                />
              </div>
            </div>

            <div className="VFRSection">
              <div className="VFRMobileImageContainer">
                <img
                  className="VFRMobileImage"
                  src="/images/Mobile.png"
                  alt="Mobile Version"
                />
              </div>
              <div className="VFRMobileInfo">
                <h1 className="VFRMobileTitle">
                  Or You Can Try it On Mobile Too!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
