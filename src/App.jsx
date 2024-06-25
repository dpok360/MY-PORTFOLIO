import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobatlStyles from "./styles/GlobalStyles";
import Home from "./componets/Home";
import AppLayout from "./componets/AppLayout";
import About from "./componets/About";
import WildOasis from "./componets/WildOasis";
import WorldWise from "./componets/WorldWise";
import FastPizza from "./componets/FastPizza";
import EatNSplit from "./componets/EatNSplit";
import ReactQuiz from "./componets/ReactQuiz";
import FarAway from "./componets/FarAway";
import Experience from "./componets/Experience";
import NotFound from "./componets/NotFound";

function App() {
  return (
    <>
      <GlobatlStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<AppLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="wildoasis" element={<WildOasis />} />
            <Route path="worldwise" element={<WorldWise />} />
            <Route path="fastpizza" element={<FastPizza />} />
            <Route path="eatnsplit" element={<EatNSplit />} />
            <Route path="reactquiz" element={<ReactQuiz />} />
            <Route path="faraway" element={<FarAway />} />
            <Route path="/experience" element={<Experience />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
