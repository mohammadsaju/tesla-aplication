import react, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Account from './pages/account/TeslaAccount';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import {Redirect} from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])
  
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Home isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
          </Route>
          <Route exact path='/login'>
            {user ? <Redirect to='/tesla-account'/> : <SignIn/> }
          </Route>
          <Route exact path='/signup'>
            <SignUp/>
          </Route>
          <Route exact path='/tesla-account'>
            <Account isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
