import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import PlaceList from "./pages/PlaceList";
import NotFound from "./pages/NotFound";
import React, { useState } from "react";
import { FilterOptions, GlobalState, GlobalStateContextType } from "./types/Type";
import PlaceDetails from "./pages/PlaceDetails";

export const GlobalContext = React.createContext<GlobalStateContextType>({});

function App() {
  const [globalState, setGlobalState] = useState<GlobalState>({
    filteroption:FilterOptions.ALL
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PlaceList />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <GlobalContext.Provider
        value={{globalState,setGlobalState}}
        >
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
