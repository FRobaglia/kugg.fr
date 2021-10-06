import React from "react";
import { useTranslation } from "react-i18next";

function ProjectCard(props) {
    const { t } = useTranslation();
    return (
      <article className="project">
        <a
          target="_blank"
          rel="noopener"
          title={`${props.project.title} — ${t("discoverWebsite")}`}
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
                title={`${t("seeSourceCode")} '${props.project.title}' ${t("onGithub")}`}
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
          {props.projectTags.map((ptag) => {
            const tagTranslation = t("tags", { returnObjects: true}).find(tag => tag.id === ptag.id)
            return (
              <li key={ptag.id} className={`project-tag ${ptag.slug}`}>
                {tagTranslation.name}
              </li>
            );
          })}
        </ul>

      </article>
    );
}

export default ProjectCard;
