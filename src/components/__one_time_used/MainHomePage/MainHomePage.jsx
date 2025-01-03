import React from "react";
import "./MainHomePage.css";
import AboutUs from "./AboutUs/AboutUs";
import WorkingProcess from "./WorkingProcess/WorkingProcess";
import Banner from "./Banner/Banner";
import PartnerNRatings from "./PartnerNRatings/PartnerNRatings";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import Faq from "./Faq/Faq";
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
import Review from "./Review/Review";
import BasementRenovationsContractors from "./BasementRenovationsContractors/BasementRenovationsContractors";
import ContactNow from "./ContactNow/ContactNow";
import ConsiderationAndLimitation from "./ConsiderationAndLimitation/ConsiderationAndLimitation";
import { bHeadingTexts } from "@/utils/bHeadingText";
const MainHomePage = () => {
  return (
    <div className=" custom-container">

      <section>
        <Banner/>
      </section>

      <section>
        <PartnerNRatings />
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
        <ConsiderationAndLimitation />
      </section>

      <section>
        <ProjectGallery bHeading={bHeadingTexts.homePageGallery__bHeading}/>
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
        <Benefits />
      </section>

      <section>
        <Review bHeading={bHeadingTexts.homePageReview__bHeading}/>
      </section>

      <section>
        <BasementRenovationsContractors />
      </section>

      <section>
        <WhyChooseUs />
      </section>

      <section>
        <ReadyToStart />
      </section>
      
      <section>
        <Faq />
      </section>

      <section>
        <LocationMap bHeading={bHeadingTexts.homePageServiceArea__bHeading}/>
      </section>

      <section>
        <ContactUs/>
      </section>

      <section>
        <ContactNow />
      </section>
      
    </div>
  );
};

export default MainHomePage;
