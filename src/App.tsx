import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Layout/Navbar";
import Home from "./pages/Home";
import RegisterChoice from "./Login sign-up/ChooseRole";
import SignInForm from "./Login sign-up/SignInForm";
import RegisterFormPage from "./Login sign-up/RegisterForm";
import Courses from "./pages/Courses";
import Categories from "./pages/Categories";

// instructor dashboard routes
import InstructorDashboard from "./dashboards/InstructorDashboard";
import DashboardSection from "./ID-sections/DashboardSection";
import CreateCourses from "./ID-sections/CreateCourses";
import Earnings from "./ID-sections/Earnings";
import MyCourses from "./ID-sections/MyCourses";
import Students from "./ID-sections/Students";
import Settings from "./ID-sections/Settings";


function AppLayout() {
  const location = useLocation();

  // hide Header if user is on /instructor/*
  const hideHeader = location.pathname.startsWith("/instructor");

  return (
    <>
      {!hideHeader && <Header />} {/* only show on public pages */}

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterChoice />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/register/:role" element={<RegisterFormPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/categories" element={<Categories />} />

        {/* Instructor Dashboard routes */}
        <Route path="/instructor" element={<InstructorDashboard />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardSection />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="create-course" element={<CreateCourses />} />
          <Route path="students" element={<Students />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <AppLayout />
    </Router>
  );
}

export default App;
