import React from 'react'
import Tag from './Tag'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

class ProjectArea extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      tags: [
        {
          slug: 'javascript', 
          name: 'JavaScript', 
          tooltip: "Les projets faits en javascript \"natif\", qui n'utilisent pas de framework javascript externe.",
          checked: false,
          id: 1
        },
        {
          slug: 'vue', 
          name: 'Vue.js', 
          tooltip: "Les projets utilisant le framework javascript Vue.js, ayant vu le jour en 2014.", 
          id: 2
        },
        {
          slug: 'react', 
          name: 'React.js', 
          tooltip: "Les projets utilisant le framework javascript React, développé par Facebook en 2013.",
          checked: false,
          id: 3
        },
        {
          slug: 'php', 
          name: 'PHP', 
          tooltip: "Les projets utilisant PHP et/ou le CMS Wordpress.",
          checked: false,
          id: 4
        },
        {
          slug: 'game', 
          name: 'Jeux', 
          tooltip: "Les jeux vidéos, ou les projets en lien avec le jeu vidéo.",
          checked: false,
          id: 5
        },
        { 
          slug: 'integration', 
          name: 'Intégration', 
          tooltip: "Les projets ayant nécessité une grosse étape d'intégration HTML/CSS (templating HTML, animations CSS...)",
          checked: false,
          id: 6
        },
        {
          slug: 'perso', 
          name: 'Projets personnels', 
          tooltip: 'Les projets que j\'ai développé sur mon temps libre.',
          checked: false,
          id: 7
        },
        {
          slug: 'school', 
          name: 'Projets scolaires',
          tooltip: 'Projets effectués en "semaine intensive", période de 4 jours dans le cadre de ma formation durant laquelle des groupes de 5 élèves créent un projet en partant de zéro.',
          checked: false,
          id: 8
        }
        
      ]
    }

    this.handleTagClick = this.handleTagClick.bind(this)
  }

  render() {
    return (
      <div className="project-area">
        <ul className="tags">
          {this.state.tags.map(tag => {
            return <Tag onClick={() => { this.handleTagClick(tag.id) }} key={tag.id} tag={tag} />
          })}
        </ul>

        <div className="projects">
          {projects.map(function(project) {
            if (this.projectShouldAppear(project)) {
              return <ProjectCard key={project.id} project={project} projectTags={this.getTags(project)}/>
            }
          }.bind(this))}
        </div>
      </div>
    )
  }

  findTagBySlug(slug, tags) {
    for (var i=0; i < tags.length; i++) {
      const tag = tags[i]
      if (tag.slug === slug) {
          return tag;
      }
    }

    console.error(`${slug} | Ce tag est invalide.`)
    return undefined
  }

  handleTagClick(tagId) {
    this.setState(prevState => ({
      tags: prevState.tags.map(tag => tag.id === tagId ? {...tag, checked: !tag.checked} : tag)
    }))
  }

  projectShouldAppear(project) {

    if (!(this.state.tags.some(isChecked))) return true // Show all projects if no tag is checked

    const tags = this.getTags(project)
    
    function isChecked(tag) {
      return tag.checked
    }

    return tags.some(isChecked)
  }

  getTags(project) {

    const tags = []
    project.tags.forEach(slug => {
      const tag = this.findTagBySlug(slug, this.state.tags)
      tags.push(tag)
    })
    
    return tags
  }
}

export default ProjectArea