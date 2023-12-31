import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// * React Router
import { Switch, Route } from 'react-router-dom'


// * components

import Navbar from './components/Navbar';
// import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart';
import Error from './components/Error';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Modal from './components/Modal'
import SignUp from './components/SignUp'
import RedirectSign from './components/RedirectSignup'
import productList from './components/ProductList'





import { AuthenticatedUser } from '../src/context/AuthenticatedUser'

function App() {
  // const [isAuth, setAuth] = useState(false)

  const { isAuthenticated, user, setUser } = React.useContext(AuthenticatedUser)

  return (
    <React.Fragment>

      {/* EXCLUDE NAVBAR :
        to be displayed all over Pages
       */}
      <Navbar />

      <Switch>
        {/* Home Component */}
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={SignUp} />

        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/details" component={Details} />
        <Route path="/productList" component={productList} />

        {isAuthenticated ? (
          <Route path="/cart" component={Cart} />
        ) : (
          <RedirectSign />
        )}


        {/* 404 Page  */}
        <Route component={Error} />
      </Switch>

      <Modal />

    </React.Fragment>
  );
}

export default App;
