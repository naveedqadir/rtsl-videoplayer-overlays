import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routing from "./routes/Routing";
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from "react";
import MaintenancePage from "./components/MaintenancePage"

export default function App() {
  const [backendStatus, setBackendStatus] = useState('online'); // Track backend status


  async function checkBackendStatus() {
    try {
      const response = await fetch('https://videobackend-mu.vercel.app/api/check-status');
      const data = await response.json();
      setBackendStatus(data.status);
    } catch (error) {
      setBackendStatus('offline');
    }
  }
  useEffect(() => {
    checkBackendStatus();
  }, []);

  return (
    <div>
      <Router>
      <Navbar />
      {backendStatus === 'online' ? (
       <Routing /> ) : (
        <MaintenancePage />
      )}
      <Footer />
      </Router>
    </div>
  );
}
