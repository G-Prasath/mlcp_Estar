import React, { Suspense, lazy } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const Twopost = lazy(() => import("./pages/TwoPost"));
const Fourpost = lazy(() => import("./pages/Fourpost"));
const Puzzleparking = lazy(() => import("./pages/Puzzleparking"));
const Shuttelstack = lazy(() => import("./pages/Shuttleparking"))
const Towerparking = lazy(() => import("./pages/Towerparking"))
const MSRP = lazy(() => import("./pages/Multilavelstackparking"))
const Bikeparking = lazy(() => import("./pages/Bikeparking"));
const ASRS = lazy(() => import("./pages/ASRS"));
const Carelvator = lazy(() => import("./pages/Carelevator"))




function App() {
  return (
    <Router>
      <Suspense fallback={<div/>}>
        <Navbar />

        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/twopost" element={<Twopost />} />
          <Route path="/fourpost" element={<Fourpost />} />
          <Route path="/puzzleparking" element={<Puzzleparking />} />
          <Route path="/shuttlestacker" element={<Shuttelstack />} />
          <Route path="/towerparking" element={<Towerparking />} />
          <Route path="/stackparking" element={<MSRP />} />
          <Route path="/bikeparking" element={<Bikeparking />} />
          <Route path="/asrs" element={<ASRS />} />
          <Route path="/carelevator" element={<Carelvator />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} /> {/* 404 Route */}
        </Routes>
        <Clients/>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
