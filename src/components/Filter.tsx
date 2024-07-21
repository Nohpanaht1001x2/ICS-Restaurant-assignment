import React, { useContext} from "react";
import { GlobalContext } from "../App";
import {
  FilterOptions,
  GlobalStateContextType,
} from "../types/Type";

const Filter: React.FC = () => {
  const { globalState, setGlobalState } =
    useContext<GlobalStateContextType>(GlobalContext);

  const handleChangeFilter: React.ChangeEventHandler<HTMLSelectElement> = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (setGlobalState !== undefined) {
      setGlobalState({ filteroption: event.target.value as FilterOptions });
    }
  };

  return (
    <div className="filter flex flex-grow min-w-[30%] max-w-[40%] h-[65%] my-auto
    border-2 border-solid rounded-full border-mainblue align-middle">
      <label htmlFor="filter"></label>
      <select
        name="filter"
        className="ml-1 text-xl flex-grow w-[75%] bg-transparent outline-none"
        value={globalState?.filteroption}
        onChange={handleChangeFilter}
      >
        <option value="All">All</option>
        <option value="restaurant">Restaurant</option>
        <option value="bakery">Bakery</option>
        <option value="cafe">Cafe</option>
      </select>
    </div>
  );
};

export default Filter;
