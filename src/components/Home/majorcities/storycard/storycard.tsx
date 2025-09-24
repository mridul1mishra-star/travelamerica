import React from "react";
import { Story } from "../../../../models/story";


interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const { title, description, image, link } = story;

  return (
    <div className="story-card">
      <img src={image} alt={title} />
      <div className="story-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Know More</a>
      </div>
    </div>
  );
};

export default StoryCard;