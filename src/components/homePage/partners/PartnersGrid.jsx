import React from "react";
import PartnersGridItem from "./PartnersGridItem";
import { google, amazon, microsoft } from "../../../assets/images/partners";

const PartnersGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-7">
      <PartnersGridItem icon={google} name="google" />
      <PartnersGridItem icon={amazon} name="amazon" />
      <PartnersGridItem icon={microsoft} name="microsoft" />
    </div>
  );
};

export default PartnersGrid;
