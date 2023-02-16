import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouritePage from "./components/FavouritePage";
import FavouritePageLink from "./components/FavouritePageLink";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FavouritePageLink />} />
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<FavouritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
