import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apod from "./pages/Apod";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/apod" element={<Apod />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
