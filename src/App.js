import { BrowserRouter, Route } from "react-router-dom";

import SignInPage from "./pages/sign-in/signIn.page";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/signin" component={SignInPage} exact />
    </BrowserRouter>
  );
}

export default App;
