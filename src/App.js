import React from 'react';
import { GlobalStyle } from './style.js';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store/index.js';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Register from './pages/register';
import Write from './pages/write';


function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail' component={Detail}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/write' component={Write}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
