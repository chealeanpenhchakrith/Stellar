import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Image from "./components/Image";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/apod" element={<Image />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
