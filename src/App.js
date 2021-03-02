import React, {useContext} from 'react';
import {List, WithUserLoading} from './components';
import Toolbar from './components/toolbar';
import {UserContext} from './config/userContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserPage from './pages/UserPage';


export default function App(){
  const user = useContext(UserContext);
  const UserLoading = WithUserLoading(List)

  return (
    <Router>
      <div>
        <header>
          <h1>Users List</h1>
        </header>
        <main>
          <Switch>
            <Route path="/users/:id">
              <Link to="/">Back to home</Link>
              <UserPage />
            </Route>
            <Route path='/'>
              <Toolbar /> 
              <UserLoading isLoading={user.loading}/>
            </Route>
          </Switch>
        </main>
        <footer>
          <p>Integrass React Test by Leonardo Vega</p>
        </footer>
      </div>
    </Router>
  )
}