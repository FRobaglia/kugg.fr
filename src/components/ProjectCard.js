import React from 'react'

class ProjectCard extends React.Component {
  render() {
    return (
        <article className="project">
          <a target="_blank" rel="noopener noreferrer" title={`${this.props.project.title} — Découvrir le site web`} href={this.props.project.link} className="project-clickable-area">
            <h2 className="project-title">
              {this.props.project.title}
              {this.props.project.github && 
              <a className="github-logo" href={this.props.github} target="_blank" rel="noopener noreferrer" title={`${this.props.project.title} — Visiter le repository GitHub`}> 
                <img alt="GitHub" src="../assets/images/github-logo.svg" />
              </a> 
              }
            </h2>
            <img src={require(`../assets/images/${this.props.project.slug}.png`)} className="project-thumbnail" alt={this.props.project.alt} />
            <p className="project-description"> {this.props.project.description} </p>
          </a>
          <ul className="project-tags">
            {this.props.projectTags.map(tag => {
              return <li key={tag.id} className={`project-tag ${tag.slug}`}>{tag.slug}</li>
            })}
          </ul>
        </article>
    )
  }
}

export default ProjectCard