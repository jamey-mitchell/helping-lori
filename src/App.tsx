import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout, { Item } from './layout';

// Here's a list of sample items we want to pass to our Layout component
const itemList: Item[] = [{ name: "Jamey"}, { name: "Robert"}, { name: "Lori"}];

// Since the items property is defined ont the LayoutProps object, we can reference it
// directly here where we define the Layout element
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
