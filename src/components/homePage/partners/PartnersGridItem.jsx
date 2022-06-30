import React from "react";

const PartnersGridItem = ({ icon, name }) => {
  return (
    <div className="py-14  border-[1px] border-[#D8D8D8]">
      <img src={icon} alt={name} className="mx-auto" />
    </div>
  );
};

export default PartnersGridItem;
