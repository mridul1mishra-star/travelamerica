export interface Story {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface StorySection {
  heading: string;
  storydescription: string;
  stories: Story[];
}
export interface StoriesSectionProps {
  section: StorySection; // expects one StorySection object
}