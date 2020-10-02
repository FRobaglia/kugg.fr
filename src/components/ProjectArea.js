import React from "react";
import Tag from "./Tag";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

class ProjectArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [
        {
          slug: "javascript",
          name: "JavaScript",
          tooltip: "Les projets réalisés en javascript natif.",
          checked: false,
          id: 1,
        },
        {
          slug: "vue",
          name: "Vue.js",
          tooltip: "Les projets réalisés avec le framework JavaScript Vue.js.",
          checked: false,
          id: 2,
        },
        {
          slug: "react",
          name: "React.js",
          tooltip: "Les projets réalisés avec le framework JavaScript React.",
          checked: false,
          id: 3,
        },
        {
          slug: "php",
          name: "PHP",
          tooltip: "Les projets utilisant PHP et/ou le CMS Wordpress.",
          checked: false,
          id: 4,
        },
        {
          slug: "game",
          name: "Jeux",
          tooltip: "Les jeux vidéos, ou les projets en lien avec le jeu vidéo.",
          checked: false,
          id: 5,
        },
        {
          slug: "school",
          name: "Projets scolaires",
          tooltip:
            'Les projets réalisés lors de "semaines intensives", période de 4 jours dans le cadre de ma formation durant laquelle un projet est imaginé en partant de zéro, en groupe de 5.',
          checked: false,
          id: 6,
        },
        {
          slug: "integration",
          name: "Intégration",
          tooltip:
            "Les projets ayant nécessité une étape d'intégration HTML/CSS importante (templating HTML, animations CSS/SVG...)",
          checked: false,
          id: 7,
        },
        {
          slug: "lemonde",
          name: "Le Monde",
          tooltip:
            "Les projets sur lesquels j'ai travaillé durant mon alternance au Monde.",
          checked: false,
          id: 8,
        },
        {
          slug: "perso",
          name: "Projets personnels",
          tooltip: "Les projets développés sur mon temps libre.",
          checked: false,
          id: 9,
        },
      ],
    };

    this.handleTagClick = this.handleTagClick.bind(this);
  }

  render() {
    return (
      <div className="project-area">
        <ul className="tags">
          {this.state.tags.map((tag) => {
            return (
              <Tag
                onClick={() => {
                  this.handleTagClick(tag.id);
                }}
                key={tag.id}
                tag={tag}
              />
            );
          })}
        </ul>

        <div className="projects">
          {this.getProjectsThatShouldAppear()}
          {!this.atLeastOneProjectIsShowing() ? (
            <div className="no-project-found">
              {" "}
              Aucun projet ne comporte ces{" "}
              {this.state.tags.filter((tag) => tag.checked).length} tags.
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  handleTagClick(tagId) {
    this.setState((prevState) => ({
      tags: prevState.tags.map((tag) =>
        tag.id === tagId ? { ...tag, checked: !tag.checked } : tag
      ),
    }));
  }

  getProjectsThatShouldAppear() {
    function isChecked(tag) {
      return tag.checked;
    }

    return projects.map((project) => {
      if (!this.state.tags.some(isChecked))
        return (
          <ProjectCard
            key={project.id}
            project={project}
            projectTags={this.getTags(project)}
          />
        );

      if (
        this.allSlugsAreInArray(
          project.tags,
          this.state.tags.filter((tag) => tag.checked)
        )
      )
        return (
          <ProjectCard
            key={project.id}
            project={project}
            projectTags={this.getTags(project)}
          />
        );

      return null;
    });
  }

  atLeastOneProjectIsShowing() {
    let showing = false;
    projects.forEach((project) => {
      if (
        this.allSlugsAreInArray(
          project.tags,
          this.state.tags.filter((tag) => tag.checked)
        )
      )
        showing = true;
    });

    return showing;
  }

  allSlugsAreInArray(slugs, tagsArray) {
    // Find if all given slugs are in the array tagsArray (which should be currently checked tags)
    return tagsArray.every((tag) => slugs.includes(tag.slug));
  }

  getTags(project) {
    return project.tags.map((slug) => {
      return this.findTagBySlug(slug, this.state.tags);
    });
  }

  findTagBySlug(slug, tags) {
    for (var i = 0; i < tags.length; i++) {
      const tag = tags[i];
      if (tag.slug === slug) {
        return tag;
      }
    }

    console.error(`${slug} | Ce tag est invalide.`);
    return undefined;
  }
}

export default ProjectArea;
