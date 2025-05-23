import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DestinationsPage from "./pages/DestinationsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ToursPage from "./pages/ToursPage";
import NotFoundPage from "./pages/NotFound";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
