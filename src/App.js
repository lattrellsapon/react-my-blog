import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Blogs } from './components/blogs/Blogs';
import { Blog } from './components/pages/Blog';
import { About } from './components/pages/About';
import { Admin } from './components/pages/Admin';
import { AddNewBlog } from './components/pages/AddNewBlog';

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
              <Route exact path='/about' component={About} />
              <Route exact path='/admin' component={Admin} />
              <Route
                exact
                path='/admin/add-a-new-blog'
                component={AddNewBlog}
              />
            </div>
          </Switch>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
