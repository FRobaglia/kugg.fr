import React from 'react'

class ProjectCard extends React.Component {
  render() {
    return (
        <article className="project">
          <a title={`${this.props.project.title} — Découvrir le site web`} href="" className="project-clickable-area">
            <h2 className="project-title">{this.props.project.title}</h2>
            <img src={require(`../assets/images/${this.props.project.slug}.png`)} className="project-thumbnail" alt={this.props.project.alt} />
            <p className="project-description"> {this.props.project.description} </p>
          </a>
          <ul className="project-tags">
            {this.props.project.tags.map(tag => {
              return <li key={tag} className={`project-tag ${tag}`}>{tag}</li>
            })}
          </ul>
        </article>
    )
  }
}

export default ProjectCard