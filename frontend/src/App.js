import "./App.css";
import LandingPage from "../src/components/landingPage/LandingPage";
import SignIn from "../src/components/SignIn";
import SignUp from "../src/components/signUp/SignUp";
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/home/Home";
import Account from "./components/Account";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./components/AboutUs";
import Tracker from "./components/tracker/Tracker";
import TrackerIncome from "./components/tracker/TrackerIncome";
import TrackerExpense from "./components/tracker/TrackerExpense";
import Budget from "./components/budget/Budget";
import CreatBudget from "./components/budget/CreateBudget";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<LandingPage />}></Route>
        <Route exact path="/login/*" element={<SignIn />}></Route>
        <Route exact path="/about/*" element={<AboutUs />}></Route>
        <Route exact path="/signup/*" element={<SignUp />}></Route>
        <Route exact path="/homepage/*" element={<Home />}></Route>
        <Route exact path="/account/*" element={<Account />}></Route>
        <Route exact path="/tracker/*" element={<Tracker />}></Route>
        <Route exact path="/income/*" element={<TrackerIncome />}></Route>
        <Route exact path="/expense/*" element={<TrackerExpense />}></Route>
        <Route exact path="/budget/*" element={<Budget />}></Route>
        <Route exact path="/newbudget/*" element={<CreatBudget />}></Route>
      </Routes>
    </div>
  );
}

export default App;
