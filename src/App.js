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
import By_occasion from "./component/dashboard/step-3 ocassion/By_occasion";
import MultipleSelectChip from "./DropDownWithAutoSelect";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
