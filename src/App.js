import logo from './logo.svg';
import {useContext, useState} from 'react';
import {AuthContext} from './index';
import './App.css';
import {Route, Switch, Link, useLocation} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import Login from ;

function App() {
  const location = useLocation();
  const {isAuthed} = useContext(AuthContext);
  
 

  console.log(isAuthed);
  return (
    <div className="App">
      <Menu>
        <Menu.Item
          name ='about'
          active={location.pathname === '/about'}>
          <Link to='/about'></Link> // create one of these for each view or page
        </Menu.Item>
      </Menu>
      <Switch>
      <Route exact path='/index'>
        <h1>Index</h1>
      </Route>
      <Route exact path='/about'>
        <h1>About</h1>
      </Route>
      <Route exact path='/gallery'>
        <h1>Gallery</h1>
      </Route>
      <Route exact path='/music'>
        <h1>Music</h1>
      </Route>
      <Route exact path='/shoppingcart'>
        <h1>Shopping Cart</h1>
      </Route>
      <Route exact path='/profile'>
        <h1>Profile</h1>
      </Route>
      {isAuthed ? null : (
        <Route exact path='/login'>
        <h1>Login</h1>
      </Route>
      )
      }
    
      
      </Switch>
    </div>
  );
}

export default App;
