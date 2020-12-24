import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import './App.css';
import api from './services/api';

function App() {
const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  });

  function userAddProject() {
    setProjects([...projects, `New Project ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

        <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={userAddProject}>Add NewProject</button>
    </>
  );
}

export default App;
