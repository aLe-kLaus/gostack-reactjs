import React from 'react';
import Header from './components/Header'

function App() {
  return (
    <>
      <Header title="FirstPage">
        <ul>
          <li>Login</li>
          <li>Logout</li>
        </ul>
      </Header>
      <Header title="SecondPage">
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="ThirdPage">
        <ul>
          <li>CreateProject</li>
          <li>EditProject</li>
        </ul>
      </Header>
    </>
  );
}

export default App;
