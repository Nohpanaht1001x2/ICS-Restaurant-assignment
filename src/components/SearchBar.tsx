import React, { useContext, useState } from "react";
import "../App.css";
import { GlobalContext } from "../App";
import { GlobalStateContextType } from "../types/Type";

const SearchBar: React.FC = () => {
  const [inputString] = useState();

  const { globalState, setGlobalState } =
    useContext<GlobalStateContextType>(GlobalContext);

  const handleOntyping: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (setGlobalState !== undefined) {
      setGlobalState({ searchString: event.target.value  , filteroption: globalState?.filteroption});
      console.log(inputString, globalState?.searchString);
    }
  };

  return (
    <div
      className="search-bar flex-grow h-[65%] my-auto min-w-[40%] max-w-[60%] 
    border-2 border-solid rounded-full border-mainblue align-middle"
    >
      <input
        className="ml-2 h-full flex-grow my-auto bg-transparent outline-none"
        type="text"
        placeholder="Search..."
        value={inputString}
        onChange={handleOntyping}
      />
    </div>
  );
};

export default SearchBar;
