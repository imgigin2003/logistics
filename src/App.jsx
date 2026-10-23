import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Review from "@/pages/Review";
import NotFound from "@/pages/NotFound";

// Router and HelmetProvider are supplied by main.jsx (browser) and
// entry-server.jsx (build-time prerender).
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
