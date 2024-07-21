import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Place } from "../types/Type";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomCarousel: React.FC<Place> = (place) => {
  return (
    <Carousel className="rounded-xl mt-6" 
    responsive={responsive}
    customTransition="transform 1ms linear" minimumTouchDrag={10} transitionDuration={1}
    infinite={true}
    autoPlay={false}
    >
      {place.images.map((image) => (
        <div
        key={place.id}
          className="
          h-32
          min-h-24 max-h-32 overflow-hidden"         
        >
          <img key={place.id} className="object-cover min-h-32" src={image} alt={image.toString()} />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
