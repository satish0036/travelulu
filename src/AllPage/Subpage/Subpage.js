import React from "react";
import TopNavigation from "../../CommonComponents/Navigation/TopNavigation.js";
import SearchForDeals from "./SearchForDeals/SearchForDeals.js";
import PropertiesFound from "./PropertiesFound/PropertiesFound.js";
import MoreInfo from "../../CommonComponents/MoreInfo/MoreInfo.js";
import Footer from "../../CommonComponents/Footer/Footer.js";

const Subpage = () => {
  return (
    <div>
      <TopNavigation />
      <SearchForDeals />
      <PropertiesFound />
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default Subpage;
