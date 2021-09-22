import { Page1 } from "./components/Page1";
import Page2 from "./components/Page2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./custom.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Page1} />
          <Route path="/page-1" component={Page1} />
          <Page2 path="/page-2" component={Page2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
