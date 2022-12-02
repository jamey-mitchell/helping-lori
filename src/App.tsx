import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout, { Item } from './layout';

const itemList: Item[] = [{ name: "Jamey"}, { name: "Robert"}, { name: "Lori"}];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Layout items={itemList} />
      </header>
    </div>
  );
}

export default App;
