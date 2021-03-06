import React from "react";

class ProjectCard extends React.Component {
  render() {
    return (
      <article className="project">
        <a
          target="_blank"
          rel="noopener noreferrer"
          title={`${this.props.project.title} — Découvrir le site web`}
          href={this.props.project.link}
          className="project-clickable-area"
        >
          <img
            src={require(`../assets/images/${this.props.project.slug}.png`)}
            className="project-thumbnail"
            alt={this.props.project.alt}
          />
          <h2 className="project-title">
            <span>{this.props.project.title}</span>&nbsp;
            {this.props.project.github && (
              <a
                className="github-logo"
                href={this.props.project.github}
                target="_blank"
                rel="noopener noreferrer"
                title={`Explorer le code source de '${this.props.project.title}' sur GitHub`}
              >
                <img
                  alt="GitHub"
                  src={require("../assets/images/github-logo.svg")}
                />
              </a>
            )}
          </h2>
          <p
            className="project-description"
            dangerouslySetInnerHTML={{ __html: this.props.project.description }}
          ></p>
        </a>
        <ul className="project-tags">
          {this.props.projectTags.map((tag) => {
            return (
              <li key={tag.id} className={`project-tag ${tag.slug}`}>
                {tag.name}
              </li>
            );
          })}
        </ul>
      </article>
    );
  }
}

export default ProjectCard;
