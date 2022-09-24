import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import PatientDisplay from "./pages/Patient/patientdisplay";
import PatientLogin from "./pages/Patient/patientLogin";
import staffLogin from "./pages/Staff/staffLogin";
import StaffDisplay from "./pages/Staff/staffDisplay";
import Menu from "./pages/Staff/menu";
import visitationLog from "./pages/Patient/visitationLog";
import OutpatientChecklist from "./pages/Patient/outpatientChecklist";
import Translate from "./pages/Staff/translate";
import Admin from "./pages/Admin/admin";
import { useState, React } from "react";
import { PageContext } from "./hooks/pageContext";

function App() {
  const [userToken, setUserToken] = useState({
    username: "",
    isDoctor: true,
  });

  //Check to see if there's data for userName and isDoctor in our session storage

  if (
    window.sessionStorage.getItem("username") != null &&
    userToken.username == ""
  ) {
    setUserToken({
      username: window.sessionStorage.getItem("username"),
      isDoctor: window.sessionStorage.getItem("isDoctor"),
    });
  }

  //Doctor token
  const [doctorToken, setDoctorToken] = useState("");

  return (
    <PageContext.Provider value={[doctorToken, setDoctorToken]}>
      <Router>
        <div className="min-h-screen bg-white text-black dark:bg-[#121212]  dark:text-gray-100/90">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/patientdisplay" component={PatientDisplay} />
            <Route path="/patientlogin" component={PatientLogin} />
            <Route path="/stafflogin" component={staffLogin} />
            <Route path="/staffdisplay" component={StaffDisplay} />
            <Route path="/menu" component={Menu} />
            <Route path="/visitationlog" component={visitationLog} />
            <Route
              path="/outpatientchecklist"
              component={OutpatientChecklist}
            />
            <Route path="/translate" component={Translate} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
      </Router>
    </PageContext.Provider>
  );
}

export default App;
