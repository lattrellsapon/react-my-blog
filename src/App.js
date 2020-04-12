import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import { Search } from './components/layout/Search';
import { Blogs } from './components/blogs/Blogs';
import { Blog } from './components/pages/Blog';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <div className='container'>
              <Route exact path='/' component={Blogs} />
              <Route exact path='/blog/blog-item/:id' component={Blog} />
            </div>
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
