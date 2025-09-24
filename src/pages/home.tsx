import React from 'react';
import Header from '../components/Header/header';
import Majorcities from "../components/Home/majorcities/majorcities";
import { StorySection } from '../models/story';
import mySectionData from "../data/home/mysection.json";
import naturalwonders from "../data/home/naturalwonders.json";
import Footer from '../components/Header/Footer/footer';
import banner from "../assets/Banner.jpg";

const section: StorySection = mySectionData as StorySection;
const naturalwonderssection: StorySection = naturalwonders as StorySection;
function Home(){
    return (
    <div className="App">
      <Header image={banner} bannerText="Our Story" />
      <div id="major-cities">
        <Majorcities section={section} />
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;