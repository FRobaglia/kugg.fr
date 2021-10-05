import React from "react";

function ProjectCard(props) {
    return (
      <article className="project">
        <a
          target="_blank"
          rel="noopener"
          title={`${props.project.title} — Découvrir le site web`}
          href={props.project.link}
          className="project-clickable-area"
        >
          <img
            src={`./images/${props.project.slug}.png`}
            className="project-thumbnail"
            alt={props.project.alt}
          />
          <h2 className="project-title">
            <span>{props.project.title}</span>&nbsp;
            {props.project.github && (
              <a
                className="github-logo"
                href={props.project.github}
                target="_blank"
                rel="noopener noreferrer"
                title={`Explorer le code source de '${props.project.title}' sur GitHub`}
              >
                <img
                  alt="GitHub"
                  src={"./images/github-logo.svg"}
                />
              </a>
            )}
          </h2>
          <p
            className="project-description"
            dangerouslySetInnerHTML={{ __html: props.project.description }}
          ></p>
        </a>
        <ul className="project-tags">
          {props.projectTags.map((tag) => {
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

export default ProjectCard;
