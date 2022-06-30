import React from "react";

const FooterPeopleLinks = ({ main, otherPeople }) => {
  return (
    <div>
      <h3 className="mb-[35px] text-nt-3 font-bold text-center">{main}</h3>
      <div className="flex flex-col gap-4 text-center">
        {otherPeople.map((person, index) => {
          return (
            <p className="text-nt-3" key={index}>
              {person}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FooterPeopleLinks;
