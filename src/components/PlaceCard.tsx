import React, { useContext} from "react";
import {
  FilterOptions,
  GlobalState,
  GlobalStateContextType,
  Place,
} from "../types/Type";
import "../App.css";
import CircleIcon from "@mui/icons-material/Circle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CustomCarousel from "./CustomCarousel";
import { GlobalContext } from "../App";

const PlaceCard: React.FC<Place> = (place) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  const { globalState } = useContext<GlobalStateContextType>(GlobalContext);

  let displaytime = place.operation_time.filter((thistime) => {
    return daysOfWeek[today.getDay()] === thistime.day;
  })[0];

  if (checkDayFilterSearch(globalState, displaytime, place)) {
    return (
      <div
        className="
        place-card 
        visible
        min-h-72 max-h-96 px-5 py-4 my-3 rounded-xl shadow-md drop-shadow-md shadow-slate-400"
      >
        {/* min-h-72 max-h-96 */}
        <div className="flex">
          <div
            className="
            relative min-w-24 min-h-24 w-24 h-24 mt-1 
            rounded-[20%] overflow-hidden align-middle"
          >
            <img
              className="absolute object-cover max-w-48 max-h-48"
              src={place.images[0]}
              alt={place.name}
            />
          </div>
          <div className="flex flex-col w-full pl-6 pr-8">
            <h3 className="font-bold">{place.name}</h3>
            <div className="flex flex-row justify-between">
              <CalendarMonthIcon className="mx-2 mt-[1px]" fontSize="small" />
              <p>
                {displaytime.time_open} - {displaytime.time_close}
              </p>
              <div className="grow"></div>
              <div>
                <CircleIcon
                  className="text-mainblue mx-2 mb-1"
                  fontSize="small"
                />
              </div>
              <div className="font-bold text-mainblue">{place.rating}</div>
            </div>
            <div></div>
          </div>
        </div>
        {/* <div className="grow h-0"></div> */}
        <div className="-mb-6 ">
          <CustomCarousel {...place} />
        </div>
        <div className="grow h-6"></div>
      </div>
    );
  } else {
    return <></>;
  }
};

function checkDayFilterSearch(
  globalState: GlobalState | undefined,
  displaytime: any,
  place: Place
) {
  const searchString:any = globalState?.searchString;
  console.log(globalState?.searchString) 

  if (globalState !== undefined 
    && globalState.filteroption !== undefined 
    && globalState.searchString !== undefined) {
    return (
      displaytime.time_open !== "closed" &&
      JSON.stringify(place).includes(searchString) &&
      (place.categories.includes(globalState.filteroption) ||
        globalState.filteroption == FilterOptions.ALL)
    );
  } 
  else if (globalState !== undefined 
    && globalState.filteroption !== undefined) {
      return(
        displaytime.time_open !== "closed" &&
        (place.categories.includes(globalState.filteroption) ||
          globalState.filteroption == FilterOptions.ALL)
      );
  }
}

export default PlaceCard;
