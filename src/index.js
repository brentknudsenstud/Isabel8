import React, {createContext, useState, useContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
</style>

export const AuthContext = createContext({isAuthed: false, user: {} });
export const useAuthContext = () => {
  return useContext(AuthContext)
}

function AuthProvider (props) { // properties
  const [isAuthed, setIsAuthed] = useState(false);
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{
      isAuthed,
      user,
      login: (user, callback) => {
        setIsAuthed(true);
        setUser(user);
        callback && callback();
      },
      logout: (callback) => {
        setIsAuthed(false)
        setUser(user);
        callback && callback();
      }
    }}>
      {props.children}
      </AuthContext.Provider>

  )
}

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
    <App />
    </Router>
    </AuthProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
