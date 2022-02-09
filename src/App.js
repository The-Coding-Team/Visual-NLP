import { Page1 } from "./components/Page1";
import Page2 from "./components/Page2";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import "./custom.css";
import { useEffect, useState } from "react";
function App() {
  const history = useHistory()
  const [file,setFile]=useState('')
  useEffect(() => {
    if(file.length)
    history.push("/page-2")
  }, [file])
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Page1} />
          <Route path="/page-1" render={(props)=>(<Page1 {...props} setFile={setFile} />)} />
          <Route path="/page-2" render={(props)=>(<Page2 {...props} file={file} />)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
