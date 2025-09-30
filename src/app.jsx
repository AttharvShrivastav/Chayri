import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="min-h-screen tea-pattern">
      <Helmet>
        <title>चायरी - दादा जी की चाय और शायरी</title>
        <meta name="description" content="दादा जी और उनके मित्र की 500+ चायरी का संग्रह। चाय के साथ शायरी का अनूठा मेल।" />
        <meta name="keywords" content="चायरी, शायरी, चाय, हिंदी कविता, दादा जी" />
        <meta property="og:title" content="चायरी - दादा जी की चाय और शायरी" />
        <meta property="og:description" content="दादा जी और उनके मित्र की 500+ चायरी का संग्रह" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
