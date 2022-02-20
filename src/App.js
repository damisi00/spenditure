import "./App.css";
import LandingPage from "../src/components/landingPage/LandingPage";
import SignIn from "../src/components/SignIn";
import SignUp from "../src/components/signUp/SignUp";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/*" element={<LandingPage />}></Route>
        <Route exact path="/login/*" element={<SignIn />}></Route>
        <Route exact path="/signup/*" element={<SignUp />}></Route>
        <Route exact path="/homepage/*" element={<Home />}></Route>
        <Route exact path="/account/*" element={<Account />}></Route>
      </Routes>
    </div>
  );
}

export default App;
