import React from 'react';
import Header from './components/Header.js'
import Tag from './components/Tag.js'
import ProjectCard from './components/ProjectCard.js'
import datas from './datas'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <ul className="tags">
        {datas.tags.map(tag => {
          return <Tag key={tag.id} tag={tag} />
        })}
        </ul>
        
        <div className="projects">
        {datas.projects.map(project => {
          return <ProjectCard key={project.id} project={project} />
        })}

        </div>
      </div>
    )
  }
}

export default App;
