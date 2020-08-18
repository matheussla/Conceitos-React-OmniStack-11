import React, { useState } from 'react';
import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  const [projects, setProject] = useState(['Desenvolvimento de app', 'Front-end web']);

  //UseState retorna um array com 2 posições
  //
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor

  function handleAddProject() {
    setProject([...projects, `Novo Projeto ${Date.now()}`]);

    console.log(projects);
  }

  return (
  <>
    <Header title="Projects"/>
    <ul>
      {projects.map(project => <li key={project}>{project}</li>)}
    </ul>

    <button type='button'onClick={handleAddProject}>Adicionar Projeto</button>
  </>
  );
};

export default App;