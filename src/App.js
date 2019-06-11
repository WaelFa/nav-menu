import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navmenu from './navmenu'
import Home from './home'
import Services from './services'
import Contact from './contact'

function App() {
  return (
    <div className="App">
      <Navmenu />
      <div>
        <Route className='act' exact path="/Home" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/services/For_entrepreneurs" render={() => 'For entrepreneurs'} />
        <Route path="/services/For_students" render={() => 'For students'} />
        <Route path="/services/For_hobbyists" render={() => 'For hobbyists'} />

      </div>

    </div>
  );
}

export default App;
