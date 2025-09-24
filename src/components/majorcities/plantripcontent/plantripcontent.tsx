import React from "react";
import "./plantripcontent.css";
import { PlantripcontentJson, PlantripcontentSection  } from "../../../models/plantripcontent";
type SectionsProps = {
  active: number | null;
  content: PlantripcontentJson["plantripcontentsection"];
};

const plantripcontent: React.FC<SectionsProps> = ({content, active}) =>{  
  return(
    <div>
      {content?.map((item: PlantripcontentSection) =>
        active === item.id ? (
          <section key={item.id} className={`${item.section} plan-trip-content`}>
            <div className="container">
              {item.content.map((html, idx) => (
          <div key={idx} dangerouslySetInnerHTML={{ __html: html }} />
        ))}
            </div>
          </section>
        ) : null
      )}
  
  
</div>
  )
};
export default plantripcontent
