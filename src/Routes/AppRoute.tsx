import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import TrackingPage from "../Pages/TrackingPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path = "/tracking" element={<TrackingPage/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}
