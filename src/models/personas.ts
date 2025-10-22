export interface Tab {
  id: number;
  label: string;
  img: string;
  section: string;
  color: string;
}

export default interface Personas {
  title: string;
  description: string;
  tabs: Tab[];
}