import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/Navbar";
import RegisterChoice from "./Login sign-up/ChooseRole";
import SignInForm from "./Login sign-up/SignInForm";
import RegisterFormPage from "./Login sign-up/RegisterFormPage";
import Courses from "./pages/Courses";
import Categories from "./pages/Categories";
import About from "./pages/About";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/register" element={<RegisterChoice />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/register/:role" element={<RegisterFormPage />} />


         {/* Navigation routes */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
