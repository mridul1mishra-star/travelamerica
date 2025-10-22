export default interface PropertyListing  {
  sections: Section[];
}

export interface Section {
  id: number;
  title: string;
  className: string;
  header: string[];
  rows: Row[];
}

export interface Row {
  airline: Airline;
  departure: { time: string; city: string };
  arrival: { time: string; city: string };
  duration: string;
  price: string;
  buttonText: string;
  buttonUrl: string;
  highlight?: boolean;
}
export interface Airline {
  name: string;
  logo: string;
}

export interface Cruise {
  img: string;
  title: string;
  route: string;
  duration: string;
  price: string;
  url: string;
}