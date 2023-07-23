import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import ListYourProp from "./pages/ListYourProp";
import Host from "./pages/host";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/host" element={<Host />} />
        <Route path="/host/LYP" element={<ListYourProp />} />
      </Routes>
    </Router>
  );
}

export default App;
