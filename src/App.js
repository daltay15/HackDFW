import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import PatientDisplay from "./pages/Patient/patientdisplay";
import PatientLogin from "./pages/Patient/patientLogin";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black dark:bg-[#121212]  dark:text-gray-100/90">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/patientdisplay" component={PatientDisplay} />
          <Route path="/patientlogin" component={PatientLogin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
