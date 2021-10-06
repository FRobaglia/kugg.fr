import React from "react";
import { useTranslation } from "react-i18next";

function Tag(props) {
  const { t } = useTranslation();

  const tagTranslation = t("tags", { returnObjects: true}).find(tag => tag.id === props.tag.id)

  return (
    <li
      onClick={props.onClick}
      className={`tag tag-${props.tag.slug} ${
        props.tag.checked ? "checked" : ""
      }`}
    >
      <div className="tooltip"> {tagTranslation.tooltip} </div>
      {tagTranslation.name}
    </li>
  );
}

export default Tag;
