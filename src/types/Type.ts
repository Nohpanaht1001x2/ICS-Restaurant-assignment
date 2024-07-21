// Interface for Place
export interface Place {
    id: number;
    name: string;
    categories:string[];
    profile_image_url:string;
    images: string[];
    rating: number;
    operation_time: {
      day:string,
      time_open:string,
      time_close:string
    }[];
    description?: string;
  }
  
  // Interface for Review
  export interface Review {
    id: string;
    placeId: string;
    reviewerName: string;
    reviewText: string;
    reviewRating: number;
  }
  
  // Interface for User
  export interface User {
    id: string;
    name: string;
    email: string;
    profilePicture?: string;
  }

  export interface GlobalState {
    searchString?:string | string[];
    filteroption?:FilterOptions;
  }

  export interface GlobalStateContextType {
    globalState?:GlobalState
    setGlobalState?: React.Dispatch<React.SetStateAction<GlobalState>>
  }
  
  // Enum for filter options (example)
  export enum FilterOptions {
    ALL = "All",
    RESTAURANT = "restaurant",
    BAKERY = "bakery",
    CAFE = "cafe"
  }
  
  // Props for PlaceCard component
  export interface PlaceCardProps {
    place: Place;
  }
  
  // Props for ReviewItem component
  export interface ReviewItemProps {
    review: Review;
  }
  
  // Props for UserProfileContent component
  export interface UserProfileContentProps {
    user: User;
  }
  