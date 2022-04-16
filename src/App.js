import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services";
import Notfound from "./Pages/Notfound/Notfound";

import "./app.scss";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
