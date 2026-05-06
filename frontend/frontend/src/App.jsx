import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ErrorFound from "./pages/ErrorFound";
import Navbar from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/about"
          element={
            <>
              <About /> <Navbar />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
