import React from "react";
import "./propertylisting2.css";
import PropertyListingModel from "../../../models/propertylisting";
import { useRef, useState, useEffect } from "react";
interface Cruise {
  img: string;
  title: string;
  route: string;
  duration: string;
  price: string;
}
const cruises: Cruise[] = [
  {
    img: "https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/content/dam/royal/ports-and-destinations/destinations/perfect-day/arrivals-plaza-perfect-day-at-cococay-aerial-view.jpg?$800x450$",
    title: "Caribbean Explorer",
    route: "Miami → Bahamas → Jamaica",
    duration: "7 Nights",
    price: "$1299/Person"
  },
  {
    img: "https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/content/dam/royal/ports-and-destinations/destinations/perfect-day/arrivals-plaza-perfect-day-at-cococay-aerial-view.jpg?$800x450$",
    title: "Mediterranean Voyage",
    route: "Barcelona → Rome → Athens",
    duration: "10 Nights",
    price: "$879/Person"

  },
  {
    img: "https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/content/dam/royal/ports-and-destinations/destinations/perfect-day/arrivals-plaza-perfect-day-at-cococay-aerial-view.jpg?$800x450$",
    title: "Alaskan Adventure",
    route: "Seattle → Juneau → Ketchikan",
    duration: "5 Nights",
    price: "$879/Person"
  },
  {
    img: "https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/content/dam/royal/ports-and-destinations/destinations/perfect-day/arrivals-plaza-perfect-day-at-cococay-aerial-view.jpg?$800x450$",
    title: "Pacific Escape",
    route: "Sydney → Fiji → Honolulu",
    duration: "8 Nights",
    price: "$879/Person"
  },
];


type SectionsProps = {
  active: number | null;
  content: PropertyListingModel['sections'];
};

export default function CruiseCardCarousel() {
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

  return (
    <section className="cruise-carousel-container">
      <div className="carousel-header">
        <h2 className="carousel-title">Book Cruises to New York</h2>
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
                <p className="price">{c.price}</p>
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