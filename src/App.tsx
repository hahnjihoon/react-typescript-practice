import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./routes/Home";
import About from "./routes/About";
import RouteProps from "./routes/RouteProps";
import RoutePropsResult from "./routes/RoutePropsResult";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="routeprops" element={<RouteProps />} />
        <Route path="routerpropsresult" element={<RoutePropsResult />} />
      </Routes>
    </Router>
  );
}

export default App;
