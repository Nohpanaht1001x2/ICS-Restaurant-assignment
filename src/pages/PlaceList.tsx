import React, { useEffect, useState } from "react";
import PlaceCard from "../components/PlaceCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import { fetchPlaces } from "../services/api";
import { Place } from "../types/Type";

const PlaceList: React.FC = () => {
  const [places, setPlaces] = useState<Array<Place>>([]);

  useEffect(() => {
    fetchPlaces().then((data) => setPlaces(data));
  }, []);

  return (
    <div className="ml-32 mr-9 relative z-[1]">
      <main className="">
        <div className="flex flex-row flex-wrap mt-8 align-middle">
          <h3 className="font-bold">Place List</h3>
          <div className="flex-grow"></div>
          <div className="flex flex-row flex-wrap w-[35%]">
            <Filter />
            <div className="main-blue w-[2px] h-[45%] mx-3 my-auto align-middle"></div>
            <SearchBar />
          </div>
        </div>
        <div
          className="place-list max-w-screen
            justify-center 
            grid grid-cols-1 gap-4 gap-x-12
            sm:grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-3
        "
        >
          {places.map((place) => (
            <PlaceCard key={place.id} {...place} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PlaceList;
