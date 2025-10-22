import React, {useState, useEffect} from "react";
import "./placevisit.css";
import { PlaceVisitSection, PlacevisitJson  } from "../../../models/placevisit";
type PlacevisitProps = {
  city: string; // e.g. "Newyork", "London"
};
const Placevisit: React.FC<PlacevisitProps> = ({city}) => {
  const [content, setContent] = useState<PlaceVisitSection | null>(null);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/majorcities/${city}/placevisit.json`)
      .then((res) => res.json())
      .then((data: PlacevisitJson) => setContent(data.planTripSection))
      .catch((err) => console.error(`Error loading JSON for ${city}:`, err));
  }, [city]);
  if (!content) {
    return <div>Loading...</div>;
  }
    return (
    <section className="plan-trip-section">
  <div className="container">
    <h2>{content.title}</h2>
    {content.places.map((row, rowIndex) => (
    <div key={rowIndex} className="place-visit">
      {row.map((place, index) => (
    <div key={index} className={index === 0 ? "fixed-width-div" : undefined}>
      <span><img src={place.icon} alt={place.name}/></span><span className="place-name">{place.name}</span>
    </div>
    
      ))}
    </div>
    ))}
  </div>
</section>);
};

export default Placevisit
