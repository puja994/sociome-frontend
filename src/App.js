import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { Group } from './pages/group/Group';
import { AccountPage } from './pages/account/AccountPage';
import { GroupDescriptionPage } from './pages/groupdescription/GroupDescriptionPage';
import { VideoConferencePage } from './pages/videoconference/VideoConferencePage';

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

          <Route exact path = "/account">
          <AccountPage/>
          </Route>

          <Route exact path = "/groupdescription">
            <GroupDescriptionPage/>
          </Route>

          <Route exact path = "/videoconference">
            <VideoConferencePage/>
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
