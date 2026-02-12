import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import TrackingPage from "../Pages/TrackingPage";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path = "/tracking" element={<TrackingPage/>}/>
      <Route path="*" element={<NotFound/>} />
      <Route path="/login" element={<Login/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  );
}
