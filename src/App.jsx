import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import './index.css'

import Header from "./components/main-elements/header/Header";
import NavigationMenu from "./components/main-elements/navigation-menu/NavigationMenu";
import FooterCanva from "./components/main-elements/footer/FooterCanva";

import { Home } from "./pages/home/Home";
import { Info } from "./pages/info/Info";
import { TechnicalSupport } from "./pages/technical-support/TechnicalSupport";
import { Community } from "./pages/community/Community";
import { Restaurants } from "./pages/restaurants/Restaurants";


function App() {
  return (
    <>
      <Router>
        <Header />
        <NavigationMenu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/technicalsupport" element={<TechnicalSupport />} />
          <Route path="/community" element={<Community />} />
          <Route path="/restaurants" element={<Restaurants />} />
        </Routes>

        <FooterCanva />
      </Router>
    </>
  )
}

export default App
