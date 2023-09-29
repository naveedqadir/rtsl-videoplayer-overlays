import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routing from "./routes/Routing";
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>

      <Navbar />
      <Routing />
      <Footer />

      </Router>
    </div>
  );
}
