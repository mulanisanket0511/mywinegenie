import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginform from "./component/loginsystem/Loginform";
import "bootstrap/dist/css/bootstrap.min.css";
import Step1 from "./component/dashboard/step-1/Step1";
import Step2 from "./component/dashboard/step-2/Step2";
import Step3 from "./component/dashboard/step-3/Step3";
import By_region from "./component/dashboard/step-3 region/By_region";
import By_ocassion from "./component/dashboard/step-3 ocassion/By_occasion";
import By_food from "./component/dashboard/step-3 food pair/By_food";
import By_grape from "./component/dashboard/step-3 grape variety/By_grap";

function App() {
  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Loginform />} />
          <Route exact path="/step-1" element={<Step1 />} />
          <Route exact path="/step-2" element={<Step2 />} />
          <Route exact path="/step-3" element={<Step3 />} />
          <Route exact path="/step-3/region" element={<By_region />} />
          <Route exact path="/step-3/grape" element={<By_grape/>} />
          <Route exact path="/step-3/food" element={<By_food />} />
          <Route exact path="/step-3/ocassion" element={<By_ocassion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
