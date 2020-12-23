import React, {useState} from 'react';
import Header from './components/Header'
import './App.css';
import backgroundImage from './assets/fuscao.jpg';

function App() {
const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function userAddProject() {
    setProjects([...projects, `New Project ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <img src={backgroundImage}/>
        <ul>
          {projects.map(project => <li key='project'>{project}</li>)}
        </ul>

        <button type="button" onClick={userAddProject}>Add NewProject</button>
    </>
  );
}

export default App;
