import React from "react";
import "./MainHomePage.css";
import AboutUs from "./AboutUs/AboutUs";
import LeadingToronto from "./LeadingToronto/LeadingToronto";
import TrustedPartner from "./TrustedPartner/TrustedPartner";
import DesignCustomization from "./DesignCustomization/DesignCustomization";
import MaterialsEquipment from "./MaterialsEquipment/MaterialsEquipment";
import Specialists from "./Specialists/Specialists";
import HireFor from "./HireFor/HireFor";
import WorkingProcess from "./WorkingProcess/WorkingProcess";
import ConsiderationsLimitations from "./ConsiderationsLimitations/ConsiderationsLimitations";
import Banner from "./Banner/Banner";
import { bHeadingTexts } from "@/utils/bHeadingText";
import { headingIconText } from "@/utils/heading-text";
import PartnerNRatings from "./PartnerNRatings/PartnerNRatings";
import OurServiceAreas from "./OurServiceAreas/OurServiceAreas";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import PoolComparison from "./PoolComparison/PoolComparison";
import CostFactors from "./CostFactors/CostFactors";
import InstallationServices from "./InstallationServices/InstallationServices";
import Faq from "./Faq/Faq";
import JoinWithUs from "./JoinWithUs/JoinWithUs";
import Benefits from "./Benefits/Benefits";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import ContactUs from "./ContactUs/ContactUs";
import ReadyToStart from "./ReadyToStart/ReadyToStart";
import Expert from "./Expert/Expert";
import Experienced from "./Experienced/Experienced";
import BasementRenovations from "./BasementRenovations/BasementRenovations";
import Professional from "./Professional/Professional";
import Trusted from "./Trusted/Trusted";
import Elevating from "./Elevating/Elevating";
import LocationMap from "./LocationMap/LocationMap";
import OurBasementRenovation from "./OurBasementRenovation/OurBasementRenovation";
const MainHomePage = () => {
  return (
    <div className="homePage__bg custom-container">

      {/* <section>
        <Banner/>
      </section> */}

      <section>
        <PartnerNRatings classNames={{ bg: "homePage__bg" }} />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <BasementRenovations />
      </section>

      <section>
        <Experienced />
      </section>

      <section>
        <Professional />
      </section>

      <section>
        <WorkingProcess />
      </section>

      <section>
        <ProjectGallery />
      </section>

      <section>
        <Expert />
      </section>

      <section>
        <Elevating />
      </section>

      <section>
        <Trusted />
      </section>

      <section>
        <OurBasementRenovation />
      </section>

      <section>
        <WhyChooseUs />
      </section>

      <section>
        <ReadyToStart />
      </section>

      {/* <section>
        <LeadingToronto />
      </section> */}

      {/* <section>
        <TrustedPartner />
      </section> */}

      {/* <section>
        <DesignCustomization />
      </section> */}

      {/* <section>
        <MaterialsEquipment />
      </section> */}

      {/* <section>
        <Specialists />
      </section> */}

      {/* <section>
        <InstallationServices />
      </section> */}

      {/* <section>
        <PoolComparison />
      </section> */}

      

      

      {/* <section>
        <ConsiderationsLimitations />
      </section> */}

      {/* <section>
        <Benefits />
      </section> */}

      {/* <section>
        <CostFactors />
      </section> */}

      

      {/* <section>
        <HireFor />
      </section> */}

      {/* <section>
        <JoinWithUs />
      </section> */}

      <section>
        <Faq />
      </section>

      <section>
        <LocationMap />
      </section>

      {/* <section className="padding__all bg_poolInstallationCompanyInMarkham">
        <OurServiceAreas
          classNames={{ bg: "bg_poolInstallationCompanyInMarkham" }}
          sHeading={headingIconText.map__IconTxt}
          bHeading={bHeadingTexts.homePageLocationMap__bHeading}
        />
      </section> */}

      {/* <section>
        <ContactUs/>
      </section> */}
    </div>
  );
};

export default MainHomePage;
