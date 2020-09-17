import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateList from './CreateList';
import {KeepList} from './KeepList';

function App() {
  return (
    <>
      <Header></Header>
      <CreateList/>
      <KeepList/>
      <Footer></Footer>
    </>
  );
}

export default App;
