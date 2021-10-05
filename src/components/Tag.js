import React from "react";

function Tag(props) {
  return (
    <li
      onClick={props.onClick}
      className={`tag tag-${props.tag.slug} ${
        props.tag.checked ? "checked" : ""
      }`}
    >
      <div className="tooltip"> {props.tag.tooltip} </div>
      {props.tag.name}
    </li>
  );
}

export default Tag;
