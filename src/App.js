import logo from './logo.svg';
import {useContext, useState} from 'react';
import {AuthContext} from './index';
import './App.css';
import {Route, Switch, Link, useLocation} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import Login from './views/public/login';
import Gallery from './views/public/gallery';
import AboutInfo from './views/public/about';
import BandLogo from './Isabel8Logotransbckgrnd.png';
import Is8MainHeader from './components/Is8MainHeader/Is8MainHeader'
import Is8Footer from './components/Is8Footer/Is8Footer'
import Songclips from './views/public/music'
import Profile from './views/protected/profile'
import {Form} from 'semantic-ui-react';
import Survey from './views/public/fansurvey';

function App() {
  const location = useLocation();
  const {isAuthed} = useContext(AuthContext);
  
 

  console.log(isAuthed);
  return (
    <>
    <div className="App">
    <Is8MainHeader path={location.pathname} isAuthed={isAuthed} bandLogo={BandLogo} />
      <div className='content'>        
        <Switch>
          <Route exact path='/home'>
            <h1>Home</h1>
          </Route>
          <Route exact path='/about'>
            <AboutInfo />
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/music'>
            <Songclips/>
          </Route>
          <Route exact path='/gallery'>
            <Gallery />
          </Route>
          <Route exact path='/profile'>
            <Profile/>
          </Route>
          <Route exact path='/fansurvey'>
            <Survey/>
          </Route>
        </Switch>
        </div>
        <Is8Footer />
     </div> 
    
    </>
  );
}

export default App;
