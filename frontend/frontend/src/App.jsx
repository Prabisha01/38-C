import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ErrorFound from "./pages/ErrorFound";
import Navbar from "./component/Navbar";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import User from "./pages/User";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
