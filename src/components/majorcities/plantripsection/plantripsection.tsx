import React, {useState} from "react";
import "./plantripsection.css";
import Personas from "../../../models/personas";
import '@fortawesome/fontawesome-free/css/all.min.css';



type Props = {
 onSelect: (section: number) => void;
 content: Personas;
};

const Plantripsection: React.FC<Props> = ({content, onSelect}) => {
    const [active, setActive] = useState(1);
      const handleClick = (id: number) => {
        setActive(id);      // update active class
        onSelect(id);       // notify parent
      };
      const city = content;
      if (!city || !city.tabs) {
    return <div>Loading trip section...</div>;
  }
    return(
        <section className="plan-trip-section">
  <div className="container">
    <h2>{city.title}</h2>
    <p>
      {city.description}
    </p>

    <div className="tab-container">
      {city.tabs.map((tab) => (
      <button 
      key={tab.id}
      className={active === tab.id ? "trip active" : "trip"}
      onClick={() => handleClick(tab.id)} data-section={tab.section}>
        <i className="fa-solid fa-suitcase-rolling" style={{ fontSize: "32px", color: tab.color}}></i>
         {tab.label}
      </button>
      ))}
       </div>
  </div>
</section>
    )
};

export default Plantripsection