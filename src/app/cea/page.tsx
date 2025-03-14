import NavBar from "@/components/NavBar/NavBar";
import "./VFRPage.css";
import Footer from "@/components/Footer/Footer";

export default function Og() {
  return (
    <>
      <script
        defer
        id="sizebay-vfr-v4"
        src="https://static.sizebay.technology/VFRCatalog/Original/Desktop/prescript.js"
      ></script>
      <script
        defer
        id="sizebay-vfr-v4"
        src="https://static.sizebay.technology/VFRCatalog/Original/Mobile/prescript.js"
      ></script>
      <NavBar />
      <div className="VFRContainer">
        <div className="VFRMainSection">
          <h1 className="VFRFlavourTitle">THE SAME BUT DIFFERENT!</h1>
          <div className="VFRThumbNail"></div>
        </div>

        <div className="VFRSectionContainerWrapper">
          <div className="VFRBackground"></div>
          <div className="VFRSectionContainer">
            <div className="VFRSection">
              <h1 className="VFRTitle">The Original, The Classic!</h1>
              <p className="VFRDescription">
                Our partner since 2024. <br /> they decided to take a shot in
                developing their own vision of the virtual fitting room <br />
                bringing a more 'soft on the edges' look the app
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
