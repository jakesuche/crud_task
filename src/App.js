
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/reducers/store";
import Home from "./pages/home";
import Create from "./pages/create";
// import Header from "../../components/ui/header";
import Heaader from './components/ui/header'
import Edit from './pages/edit_user'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Heaader  />
          <h1 className="container mt-5">Dashboard</h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create-user">
            <Create />
          </Route>
          <Route path="/edit-user/:id">
            <Edit />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
