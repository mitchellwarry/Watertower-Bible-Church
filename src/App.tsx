import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import NewHere from "./pages/NewHere";
import ContactUs from "./pages/ContactUs";
import MembersPortal from "./pages/MembersPortal";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <ScrollToTop />
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/new-here" element={<NewHere />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/members-portal" element={<MembersPortal />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
