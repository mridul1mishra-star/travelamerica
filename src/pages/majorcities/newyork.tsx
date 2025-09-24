import React, {JSX, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Header/Footer/footer";
import Header from "../../components/Header/header";
import Airportsection from "../../components/majorcities/airportsection/airportsection";
import Propertylisting from "../../components/majorcities/flightsection/propertylisting"
import banner from "../../assets/nycbanner.jpeg";
import Plantripsection from "../../components/majorcities/plantripsection/plantripsection";
import Plantripcontent from "../../components/majorcities/plantripcontent/plantripcontent";
import Placevisit from "../../components/majorcities/placevisitsection/placevisit";
import Cities from "../../models/majorcities";
import airportsectionData from "../../data/majorcities/Newyork/airportsection.json";
import PropertyListingModel, { Section } from "../../models/propertylisting";
import propertylistingData from "../../data/majorcities/Newyork/propertylisting.json"
import Personas from "../../models/personas";
import personaData from "../../data/majorcities/Newyork/plantrip.json";
import { PlantripcontentSection } from "../../models/plantripcontent";
import plantripcontentJson from "../../data/majorcities/Newyork/plantripcontent.json";
import { PlanTripSection, PlacevisitJson } from "../../models/placevisit";



const newyorkContent: Cities[] = airportsectionData as Cities[];
const propertyListing: PropertyListingModel  = propertylistingData as PropertyListingModel ;
const sections: Section[] = propertyListing.sections;
const personaContent: Personas[] = personaData as Personas[];
const personaSection: PlantripcontentSection[] = plantripcontentJson.plantripcontentsection;





function CityPage(): JSX.Element {
  const { city } = useParams<{ city: string }>();
    const [activeSection, setActiveSection] = useState<number | null>(1);
    const [activeGroup, setActiveGroup] = useState<number | null>(1);
    const [content, setContent] = useState<PlanTripSection | null>(null);
    useEffect(() => {
    console.log("Active section changed:", activeSection);
  }, [activeSection]);
  useEffect(() => {
  fetch(process.env.PUBLIC_URL + "/data/majorcities/Newyork/placevisit.json")
    .then((res) => res.json())
    .then((data: PlacevisitJson) => setContent(data.planTripSection))
    .catch((err) => console.error("Error loading JSON:", err));
}, []);
  if (!city) {
    return <div>City not found</div>;
  }
    return(
        
        <div className="App">
      <Header image={banner} bannerText="Welcome to New York!" />
      <Airportsection content={newyorkContent} onSelect={setActiveSection} />
      <Propertylisting content={sections} active={activeSection} />
      <Plantripsection content={personaContent} onSelect={setActiveGroup}/>
      <Plantripcontent content={personaSection} active={activeGroup}/>
      
      <Placevisit city={city}/>
      <Footer />
      </div>
      
    );
};

export default CityPage;