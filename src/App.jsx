import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Favourites from "./Favourites";
import Home from "./Home";
import Error from "./Error";
import Header from "./Header";
import Read from "./Read";
import Profile from "./Profile";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/read" element={<Read />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
