import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
