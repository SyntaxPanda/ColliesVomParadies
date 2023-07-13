import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import WelpenPage from "./pages/WelpenPage";
import AileenPage from "./pages/AileenPage";
import AusstellungserfolgePage from "./pages/AusstellungserfolgePage";
import ChiffonPage from "./pages/ChiffonPage";
import FleurPage from "./pages/FleurPage";
import JackyPage from "./pages/JackyPage";
import KontaktPage from "./pages/KontaktPage";
import LiebevolleErinnerungenPage from "./pages/LiebevolleErinnerungenPage";
import LinksPage from "./pages/LinksPage";
import LouLouPage from "./pages/Lou-LouPage";
import NachwuchsPage from "./pages/NachwuchsPage";
import NachzuchtPage from "./pages/NachzuchtPage";
import NewsPage from "./pages/NewsPage";
import OldiesPage from "./pages/OldiesPage";
import WirÜberUnsPage from "./pages/WirÜberUnsPage";
import WurfPlanungPage from "./pages/WurfPlanungPage";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path={"/"} element={<HomePage/>}/>
      <Route path={"/welpen"} element={<WelpenPage/>}/>
      <Route path={"/aileen"} element={<AileenPage/>}/>
      <Route path={"/ausstellungserfolge"} element={<AusstellungserfolgePage/>}/>
      <Route path={"/chiffon"} element={<ChiffonPage/>}/>
      <Route path={"/fleur"} element={<FleurPage/>}/>
      <Route path={"/jacky"} element={<JackyPage/>}/>
      <Route path={"/kontakt"} element={<KontaktPage/>}/>
      <Route path={"/erinnerungen"} element={<LiebevolleErinnerungenPage/>}/>
      <Route path={"/links"} element={<LinksPage/>}/>
      <Route path={"/loulou"} element={<LouLouPage/>}/>
      <Route path={"/nachwuchs"} element={<NachwuchsPage/>}/>
      <Route path={"/nachzucht"} element={<NachzuchtPage/>}/>
      <Route path={"/news"} element={<NewsPage/>}/>
      <Route path={"/oldies"} element={<OldiesPage/>}/>
      <Route path={"/überuns"} element={<WirÜberUnsPage/>}/>
      <Route path={"/wurfplanung"} element={<WurfPlanungPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
