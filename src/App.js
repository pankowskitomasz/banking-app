import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import AccountView from './views/accountView';
import CardsView from './views/cardsView';
import ExchangeView from './views/exchangeView';
import ExchangeListView from './views/exchange/exchangeListView';
import PasswordUpdateView from './views/passwordUpdateView';
import RestorePasswordView from './views/restorePasswordView';
import ServicesDetailsView from './views/services/servicesDetailsView';
import ServicesListView from './views/services/servicesListView';
import ServicesView from './views/servicesView';
import SignInView from './views/signInView';
import SignUpView from './views/signUpView';
import WelcomeView from './views/welcomeView';

import './App.css';

function App() {
  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<WelcomeView/>}/>
            <Route exact path="/account" element={<AccountView/>}/>
            <Route exact path="/cards" element={<CardsView/>}/>
            <Route exact path="/exchange" element={<ExchangeView/>}/>
            <Route exact path="/exchange/list" element={<ExchangeListView/>}/>
            <Route exact path="/update-password" element={<PasswordUpdateView/>}/>
            <Route exact path="/restore-password" element={<RestorePasswordView/>}/>
            <Route exact path="/services" element={<ServicesView/>}/>
            <Route exact path="/services/list" element={<ServicesListView/>}/>
            <Route exact path="/services/details/*">
              <Route path=":id" element={<ServicesDetailsView/>}/>
            </Route>
            <Route exact path="/signin" element={<SignInView/>}/>
            <Route exact path="/signup" element={<SignUpView/>}/>
          </Routes>
    </Router>
  );
}

export default App;
