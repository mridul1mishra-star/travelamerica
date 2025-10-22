import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./propertylisting.css";
import PropertyListingModel from "../../../models/propertylisting";
import {Cruise} from "../../../models/propertylisting";
import cruisesData from "../../../data/majorcities/Newyork/cruises.json"
import hotelsData from "../../../data/majorcities/Newyork/hotels.json"

type SectionsProps = {
  active: number | null;
  content: PropertyListingModel['sections'];
};




const Propertylisting: React.FC<SectionsProps> = ({content, active}) =>{
  const { city } = useParams();
  const [hotels, setHotels] = useState<Cruise[]>([]);
  const [cruises, setCruise] = useState<Cruise[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!city) return;

    const fetchHotels = async () => {
      try {
        setLoading(true);
        const [hotelRes, cruiseRes] = await Promise.all([
          fetch(`${process.env.PUBLIC_URL}/data/majorcities/${city}/hotels.json`),
          fetch(`${process.env.PUBLIC_URL}/data/majorcities/${city}/cruises.json`)
        ]);
        const [hotelData, cruiseData]: [Cruise[], Cruise[]] = await Promise.all([
          hotelRes.json(),
          cruiseRes.json()
        ]);
        setHotels(hotelData);
        setCruise(cruiseData);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [city]);
  const section = content.find(s => s.id === active);
  const trackRef = useRef<HTMLDivElement | null>(null);
    const scroll = (direction: "left" | "right") => {
      if (trackRef.current) {
        const scrollAmount = trackRef.current.offsetWidth * 0.8;
        trackRef.current.scrollBy({
          left: direction === "right" ? scrollAmount : -scrollAmount,
          behavior: "smooth",
        });
      }
    };
  if (!section) return null;
  if (!city) return <div>Loading place visit data...</div>;;
  if (section.id === 1)
  {
    return(
      <section className={`${section.className} content-section`}>
      <h2>{section.title}</h2>
      <div className="flight-table">
        {/* Header */}
        <div className="flight-row header">
          {section.header.map((head, idx) => (
            <div key={idx} className="cell">{head}</div>
          ))}
        </div>

        {/* Rows */}
        {section.rows.map((row, idx) => (
          <div key={idx} className={`flight-row ${row.highlight ? "highlight" : ""}`}>
            <div className="cell airline">
              <img src={row.airline.logo} alt={row.airline.name} className="image" />
              <small>{row.airline.name}</small>
            </div>
            <div className="cell">
              <div>{row.departure.time}</div>
              <small>{row.departure.city}</small>
            </div>
            <div className="cell">
              <div>{row.arrival.time}</div>
              <small>{row.arrival.city}</small>
            </div>
            <div className="cell">{row.duration}</div>
            <div className="cell price">{row.price}</div>
            <div className="cell">
              <a href={row.buttonUrl} className="btn">{row.buttonText}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
    

    );
  }
  if(section.id === 2)
  {
    
    return(
      <section className="cruise-carousel-container">
      <div className="carousel-header">
        <h2 className="carousel-title">Book Hotels in {capitalizeWords(city)}</h2>
        <div className="nav-buttons">
          <button className="nav-btn top" onClick={() => scroll("left")}>❮</button>
          <button className="nav-btn top" onClick={() => scroll("right")}>❯</button>
        </div>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track" ref={trackRef}>
          {hotels.map((c, i) => (
            <div className="cruise-card" key={i}>
              <div className="card-image">
                <img src={c.img} alt={c.title} />
              </div>
              <div className="card-content">
                <h3>{c.title}</h3>
                <p className="route">{c.route}</p>
                <p className="duration">{c.duration}</p>
                <div className="card-footer">
                <p className="price">
                  <span className="amount">{c.price.split(" ")[0]}</span>{" "}<br />
                  <span className="per-person">{c.price.split(" ").slice(1).join(" ")}</span>
                </p>
                <p className="price"><button className="details-btn">View Details</button></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
  }
  
  
    return(
      <section className="cruise-carousel-container">
      <div className="carousel-header">
        <h2 className="carousel-title">Book Cruises to {capitalizeWords(city)}</h2>
        <div className="nav-buttons">
          <button className="nav-btn top" onClick={() => scroll("left")}>❮</button>
          <button className="nav-btn top" onClick={() => scroll("right")}>❯</button>
        </div>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track" ref={trackRef}>
          {cruises.map((c, i) => (
            <div className="cruise-card" key={i}>
              <div className="card-image">
                <img src={c.img} alt={c.title} />
              </div>
              <div className="card-content">
                <h3>{c.title}</h3>
                <p className="route">{c.route}</p>
                <p className="duration">{c.duration}</p>
                <div className="card-footer">
                <p className="price">
                  <span className="amount">{c.price.split(" ")[0]}</span>{" "}<br />
                  <span className="per-person">{c.price.split(" ").slice(1).join(" ")}</span>
                </p>
                <a href={c.url} target="_blank" rel="noopener noreferrer">
                <p className="price"><button className="details-btn">View Details</button></p>
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );

  
    
};
function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
export default Propertylisting;