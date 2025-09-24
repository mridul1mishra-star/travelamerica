export default interface Cities {
  title: string;
  description: string;
  tabs: {
    id: number;
    label: string;
    img: string;
    section: string;
  }[];
}
