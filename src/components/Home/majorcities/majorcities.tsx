import React from "react";
import "./majorcities.css"; // optional if you want to style it
import { StoriesSectionProps } from "../../../models/story";
import StoryCard from "./storycard/storycard";



const majorcities: React.FC<StoriesSectionProps> = ({section }) => {
  const { heading, storydescription, stories } = section;
    return (
        <section className="green-stories">
  <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="back-to-top"><h2  className="section-heading">{heading}</h2></button>
  <p className="description-text">{storydescription}</p>

  <div className="story-cards">
    {stories.map((story, index) => (
          <StoryCard key={index} story={story} />
        ))}
  </div>

  <div className="carousel-controls">
    <a href="/majorcities/newyork" className="view-more-btn">View More</a>
  </div>
        </section>
    );
};

export default majorcities;