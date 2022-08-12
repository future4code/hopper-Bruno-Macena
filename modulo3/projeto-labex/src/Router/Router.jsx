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
          <Route path="/admin/trips/list" element={<AdminHomePage />} />
          <Route path="/trips/application" element={<ApplicationFormPage />} />
          <Route path="/admin/trips/create" element={<CreateTripPage />} />
          <Route path="/trips/list" element={<ListTripsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/trips/:id" element={<TripDetailsPage />} />          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;