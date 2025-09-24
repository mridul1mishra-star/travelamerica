export default interface Personas {
  title: string;
  description: string;
  tabs: {
    id: number;
    label: string;
    img: string;
    section: string;
    color: string;
  }[];
}
