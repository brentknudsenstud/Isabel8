import logo from './logo.svg';
import {useContext, useState} from 'react';
import {AuthContext} from './index';
import './App.css';
import {Route, Switch, Link, useLocation} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import Login from './views/public/login';
import {Gallery} from './views/public/gallery';
import {AboutInfo} from './views/public/about';

function App() {
  const location = useLocation();
  const {isAuthed} = useContext(AuthContext);
  
 

  console.log(isAuthed);
  return (
    <div className="App">
      <Menu>
        <Menu.Item
          name ='home'
          active={location.pathname === '/home'}>
          <Link to='/home'>Home</Link>
        </Menu.Item>
        <Menu.Item
          name ='about'
          active={location.pathname === '/about'}>
          <Link to='/about'>About</Link> 
        </Menu.Item>
        <Menu.Item
          name ='login'
          active={location.pathname === '/login'}>
          <Link to='/login'>Login</Link> 
        </Menu.Item>
        <Menu.Item
          name ='music'
          active={location.pathname === '/music'}>
          <Link to='/music'>Music</Link> 
        </Menu.Item>
        <Menu.Item
          name ='gallery'
          active={location.pathname === '/gallery'}>
          <Link to='/gallery'>Gallery</Link> 
        </Menu.Item>
        <Menu.Item
          name ='profile'
          active={location.pathname === '/profile'}>
          <Link to='/profile'>Profile</Link> 
        </Menu.Item>
        <Menu.Item
          name ='shoppingcart'
          active={location.pathname === '/shoppingcart'}>
          <Link to='/shoppingcart'>Cart</Link> 
        </Menu.Item>
      </Menu>
      <div className='content'>        
        <Switch>
          <Route exact path='/home'>
            <h1>Home</h1>
          </Route>
          <Route exact path='/about'>
            <h1>About</h1>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/music'>
            <h1>Music</h1>
          </Route>
          <Route exact path='/gallery'>
            <h1>Gallery</h1>
            <Gallery />
          </Route>
          <Route exact path='/profile'>
            <h1>Profile</h1>
          </Route>
          <Route exact path='/shoppingcart'>
            <h1>Cart</h1>
          </Route>
        </Switch>
     </div> 
    </div>
  );
}

export default App;
