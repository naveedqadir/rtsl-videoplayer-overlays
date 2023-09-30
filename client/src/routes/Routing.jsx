import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Video from "../pages/Video";
import OverlaySettings from "../pages/OverlaySetting";

export default function Routing() {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Video />} />
          <Route path="/overlaysettings" element={<OverlaySettings />} />
        </Routes>
  );
}
