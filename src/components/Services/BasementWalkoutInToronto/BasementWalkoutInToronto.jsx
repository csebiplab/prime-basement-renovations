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
import ProsAndCons from './ProsAndCons/ProsAndCons';
import Services from './Services/Services';
import Underpinning from './Underpinning/Underpinning';

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

      <section>
        <Services />
      </section>

      <section>
        <ProjectGallery />
      </section>

      <section>
        <Cost />
      </section>

      <section>
        <Underpinning />
      </section>

      <section>
        <Benefits />
      </section>

      <section>
        <ProsAndCons />
      </section>

      <section>
        <Review />
      </section>

      <section>
        <WhyChooseUs />
      </section>
      
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
