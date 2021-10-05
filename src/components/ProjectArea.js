import React, { useState } from "react";
import Tag from "./Tag";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const tagsArray = [
  {
    slug: "javascript",
    name: "JavaScript",
    tooltip: "Projets réalisés sans l'utilisation de framework front-end",
    checked: false,
    id: 1,
  },
  {
    slug: "vue",
    name: "Vue.js",
    tooltip: "Projets réalisés avec le framework JavaScript Vue.js",
    checked: false,
    id: 2,
  },
  {
    slug: "react",
    name: "React.js",
    tooltip: "Projets réalisés avec le framework JavaScript React",
    checked: false,
    id: 3,
  },
  {
    slug: "php",
    name: "PHP",
    tooltip: "Projets utilisant PHP et/ou le CMS Wordpress.",
    checked: false,
    id: 4,
  },
  {
    slug: "game",
    name: "Jeux",
    tooltip: "Jeux vidéos et autres projets en lien avec le jeu vidéo.",
    checked: false,
    id: 5,
  },
  {
    slug: "school",
    name: "Projets scolaires",
    tooltip:
      'Projets réalisés durant mes 3 ans en école',
    checked: false,
    id: 6,
  },
  {
    slug: "integration",
    name: "Intégration",
    tooltip:
      "Projets ayant nécessité une étape d'intégration HTML/CSS importante (templating HTML, animations CSS/SVG...)",
    checked: false,
    id: 7,
  },
  {
    slug: "lemonde",
    name: "Le Monde",
    tooltip:
      "Projets sur lesquels j'ai travaillé durant mon alternance au journal Le Monde",
    checked: false,
    id: 8,
  },
  {
    slug: "perso",
    name: "Projets personnels",
    tooltip: "Projets développés sur mon temps libre",
    checked: false,
    id: 9,
  },
]

function ProjectArea() {
  const [tags, setTags] = useState(tagsArray)

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  function handleTagClick(tagId) {
    setTags(tags.map(tag => {
      return (tag.id === tagId ? { ...tag, checked: !tag.checked } : tag)
    }),)
  }

  function getProjectsThatShouldAppear() {
    shuffle(projects)

    function isChecked(tag) {
      return tag.checked;
    }
    
    return projects.map((project) => {
      if (!tags.some(isChecked))
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

      <div className="projects">
        {getProjectsThatShouldAppear()}
        {!atLeastOneProjectIsShowing() ? (
          <div className="no-project-found">
            {" "}
            Aucun projet ne comporte ces{" "}
            {tags.filter((tag) => tag.checked).length} tags.
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectArea;
