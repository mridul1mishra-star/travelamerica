export interface PlantripcontentSection {
  id: number;
  section: string;
  content: string[]; // array of HTML strings
}


export interface PlantripcontentJson {
  plantripcontentsection: PlantripcontentSection[];
}