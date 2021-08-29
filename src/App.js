import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { Group } from './pages/group/Group';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

        <Route exact path="/">
          <Group/>
          </Route>

          <Route exact path="/login">
          <Login/>
          </Route>

          <Route exact path="/dashboard">
            <DashboardPage/>
          </Route>

          <Route exact path = "/signup">
          <Signup/>
          </Route>

          <Route path="*">
						<h1>404 Page not found</h1>
					</Route>

        </Switch>
      </Router>
    

    
    </div>
  );
}

export default App;
