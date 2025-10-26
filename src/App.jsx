import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Review from "@/pages/Review";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/review"
            element={
              <Layout>
                <Review />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
