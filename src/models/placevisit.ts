export interface Place {
  name: string;
  icon: string;
}

export type PlaceRow = Place[];

export interface PlanTripSection {
  title: string;
  places: PlaceRow[];
}

export interface PlacevisitJson {
  planTripSection: PlanTripSection;
}