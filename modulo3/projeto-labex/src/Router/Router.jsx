import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../pages/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/AdminHomePage" element={<AdminHomePage />} />
          <Route path="/ApplicationFormPage" element={<ApplicationFormPage />} />
          <Route path="/CreateTripPage" element={<CreateTripPage />} />
          <Route path="/ListTripsPage" element={<ListTripsPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/TripDetailsPage" element={<TripDetailsPage />} />          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;