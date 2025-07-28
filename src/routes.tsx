
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/misc/LandingPage.tsx";
import BookVendor from "./pages/misc/BookVendor.tsx";
import BookService from "./pages/customer/BookService.tsx";


function ApplicationRoutes(){
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/BookVendor" element={<BookVendor/>}/>
      <Route path="/BookingService"  element={<BookService/>}/>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export {ApplicationRoutes};