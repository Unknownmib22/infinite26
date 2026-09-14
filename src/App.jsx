import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Registration from "./pages/Registration";
import Brochure from "./pages/Brochure";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";
import SakuraBreeze from "./components/SakuraBreeze";

function App() {
  return (
    <>
      <SakuraBreeze />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;