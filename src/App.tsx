import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import ServicesGrid from "./components/home/ServicesGrid";
import WhyChooseUs from "./components/home/WhyChooseUs";
import HomeProjects from "./components/home/Projects";
import CTA from "./components/home/CTA";
import ClientsISO from "./components/home/ClientsISO";
import Footer from "./components/layout/Footer";

// Page Imports
import Services from "./pages/Services";
import EquipmentMaintenance from "./pages/EquipmentMaintenance";
import Products from "./pages/Products";
import Careers from "./pages/Careers";
import ProjectsPage from "./pages/Projects";
import MarketFocus from "./pages/MarketFocus";
import Contact from "./pages/Contact";
import About from "./pages/About";

const Home = () => (
  <main className="relative min-h-screen bg-white">
    <Navbar />
    <Hero />
    <ServicesGrid />
    <WhyChooseUs />
    <HomeProjects />
    <CTA />
    <ClientsISO />
    <Footer />
  </main>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/equipment-maintenance" element={<EquipmentMaintenance />} />
        <Route path="/products" element={<Products />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/market-focus" element={<MarketFocus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
