import React from "react";
import { Route } from "react-router-dom";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import EpisodesList from "./components/EpisodesList";


export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav />  */}
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationList} />
      <Route path="/episodes" component={EpisodesList} />
    </main>
  );
}



