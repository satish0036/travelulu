import React from "react";
import TopNavigation from "../../CommonComponents/Navigation/TopNavigation.js";
import PlanTrips from "./PlanTrips/PlanTrips.js";
import ToolList from "./ToolList/ToolList.js";
import PhotoGallery from "./PhotoGallery/PhotoGallery.js";
import PlanningAhead from "./PlanningAhead/PlanningAhead.js";
import TESTIMONIALS from "./TESTIMONIALS/TESTIMONIALS.js";
import MoreInfo from "../../CommonComponents/MoreInfo/MoreInfo.js";
import Footer from "../../CommonComponents/Footer/Footer.js";
const HomePage = () => {
  return (
    <div>
      <TopNavigation />
      <PlanTrips />
      <ToolList />
      <PhotoGallery />
      <PlanningAhead />
      <TESTIMONIALS />
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default HomePage;
