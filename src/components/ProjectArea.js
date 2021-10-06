import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Tag from "./Tag";
import ProjectCard from "./ProjectCard";

function ProjectArea() {
  const { t } = useTranslation()
  const projects = t("projects", {returnObjects: true})
  const tagsArray = t("tags", {returnObjects: true})
  
  const [tags, setTags] = useState(tagsArray)
  const [englishOnly, setEnglishOnly] = useState(false)

  function handleTagClick(tagId) {
    setTags(tags.map(tag => {
      return (tag.id === tagId ? { ...tag, checked: !tag.checked } : tag)
    }),)
  }

  function getProjectsThatShouldAppear() {
    function isChecked(tag) {
      return tag.checked;
    }
    
    return projects.map((project) => {

      if ((i18n.language === "en" && englishOnly && !project.en)) return null // Don't show if user wants english-only and project isn't in english

      if (!tags.some(isChecked)) // Show every project if no tags are checked
        return (
          <ProjectCard
            key={project.id}
            project={project}
            projectTags={getTags(project)}
          />
        );

      if (
        allSlugsAreInArray(
          project.tags,
          tags.filter((tag) => tag.checked)
        )
      )
      
      return (
        <ProjectCard
          key={project.id}
          project={project}
          projectTags={getTags(project)}
        />
      );

      return null;
    });
  }

  function atLeastOneProjectIsShowing() {
    let showing = false;
    projects.forEach((project) => {
      if (
        allSlugsAreInArray(
          project.tags,
          tags.filter((tag) => tag.checked)
        )
      )
        showing = true;
    });

    return showing;
  }

  function allSlugsAreInArray(slugs, tagsArr) {
    // Find if all given slugs are in the array tagsArr (which should be currently checked tags)
    return tagsArr.every((tag) => slugs.includes(tag.slug));
  }

  function getTags(project) {
    return project.tags.map((slug) => {
      return findTagBySlug(slug, tags);
    });
  }

  function findTagBySlug(slug, tagsArr) {
    for (var i = 0; i < tagsArr.length; i++) {
      const tag = tagsArr[i];
      if (tag.slug === slug) {
        return tag;
      }
    }

    console.error(`${slug} | Ce tag est invalide.`);
    return undefined;
  }
  
  
  return (
    <div className="project-area">
      <ul className="tags">
        {tags.map((tag) => {
          return (
            <Tag
              onClick={() => {
                handleTagClick(tag.id);
              }}
              key={tag.id}
              tag={tag}
            />
          );
        })}
      </ul>
      
      {i18n.language === "en" && !englishOnly && 
        <div style={{marginTop: "24px"}}>To hide projects using French,&nbsp;
          <button class="click-here" onClick={() => setEnglishOnly(!englishOnly)}>click here</button> 
        </div>
      }
      
      {i18n.language === "en" && englishOnly && 
        <div style={{marginTop: "24px"}}>
          <button class="click-here" onClick={() => setEnglishOnly(!englishOnly)}>Show all projects again</button> 
        </div>
      }

      <div className="projects">
        {getProjectsThatShouldAppear()}
        {!atLeastOneProjectIsShowing() ? (
          <div className="no-project-found">
            {" "}
            {t("noProjectFound")}{" "}
            {tags.filter((tag) => tag.checked).length} tags.
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectArea;
