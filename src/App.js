import React from 'react';
import data from "./Components/Back/Data/Data";
import Header from './Components/Front/Header/Header';
import Routes from "./Components/Front/Routes/Routes";
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  const {productItems} = data;

  return (
    <div>
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
};

export default App;