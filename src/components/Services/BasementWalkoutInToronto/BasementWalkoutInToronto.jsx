import React from 'react';
import "./BasementWalkoutInToronto.css";
import PartnerNRatings from '@/components/__one_time_used/MainHomePage/PartnerNRatings/PartnerNRatings';
import ContactNow from '@/components/__one_time_used/MainHomePage/ContactNow/ContactNow';
import ContactUs from '@/components/__one_time_used/MainHomePage/ContactUs/ContactUs';
import LocationMap from '@/components/__one_time_used/MainHomePage/LocationMap/LocationMap';
import Review from '@/components/__one_time_used/MainHomePage/Review/Review';
import ProjectGallery from '@/components/__one_time_used/MainHomePage/ProjectGallery/ProjectGallery';
import AboutUs from './AboutUs/AboutUs';
import DefinitionOfWalkoutBasement from './DefinitionOfWalkoutBasement/DefinitionOfWalkoutBasement';
import ExpertContractor from './ExpertContractor/ExpertContractor';
import BasementWalkoutInTorontoBanner from './BasementWalkoutInTorontoBanner/BasementWalkoutInTorontoBanner';
import Faq from './Faq/Faq';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Benefits from './Benefits/Benefits';
import Cost from './Cost/Cost';
import AddBasementWalkout from './AddBasementWalkout/AddBasementWalkout';

// import React from "react";
// import "./MainHomePage.css";
// import AboutUs from "./AboutUs/AboutUs";
// import WorkingProcess from "./WorkingProcess/WorkingProcess";
// import Banner from "./Banner/Banner";
// import PartnerNRatings from "./PartnerNRatings/PartnerNRatings";
// import ProjectGallery from "./ProjectGallery/ProjectGallery";
// import Faq from "./Faq/Faq";
// import Benefits from "./Benefits/Benefits";
// import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
// import ContactUs from "./ContactUs/ContactUs";
// import ReadyToStart from "./ReadyToStart/ReadyToStart";
// import Expert from "./Expert/Expert";
// import Experienced from "./Experienced/Experienced";
// import BasementRenovations from "./BasementRenovations/BasementRenovations";
// import Professional from "./Professional/Professional";
// import Trusted from "./Trusted/Trusted";
// import Elevating from "./Elevating/Elevating";
// import LocationMap from "./LocationMap/LocationMap";
// import OurBasementRenovation from "./OurBasementRenovation/OurBasementRenovation";
// import Review from "./Review/Review";
// import BasementRenovationsContractors from "./BasementRenovationsContractors/BasementRenovationsContractors";
// import ContactNow from "./ContactNow/ContactNow";
// import ConsiderationAndLimitation from "./ConsiderationAndLimitation/ConsiderationAndLimitation";

const BasementWalkoutInToronto = () => {
  return (
    <div className=" custom-container">

      <section>
        <BasementWalkoutInTorontoBanner/>
      </section>

      <section>
        <PartnerNRatings />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <ExpertContractor />
      </section>

      <section>
        <DefinitionOfWalkoutBasement />
      </section>

      <section>
        <AddBasementWalkout />
      </section>

      {/* <section>
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
      </section> */}

      <section>
        <ProjectGallery />
      </section>

      <section>
        <Cost />
      </section>

      <section>
        <Benefits />
      </section>

      {/* <section>
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
      </section> */}

      <section>
        <Review />
      </section>

      {/* <section>
        <BasementRenovationsContractors />
      </section> */}

      <section>
        <WhyChooseUs />
      </section>

      {/* <section>
        <ReadyToStart />
      </section> */}
      
      <section>
        <Faq />
      </section>

      <section>
        <LocationMap />
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

export default BasementWalkoutInToronto;
