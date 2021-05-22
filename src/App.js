import { BrowserRouter, Route } from "react-router-dom";

import SignInPage from "./pages/sign-in/signIn.page";
import HomePage from "./pages/homepage/homepage.page";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/signin" component={SignInPage} exact />
      <Route path="/" component={HomePage} exact />
    </BrowserRouter>
  );
}

export default App;
