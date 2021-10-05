import React from "react";

function Header() {
  return (
    <header>
      <h1 className="name">
        Félix Robaglia <span>— Développeur web</span>
      </h1>

      <address>
        <a style={{marginRight: 0}} href="./cv.html"> CV </a>  |&nbsp;
        <a href="mailto:felix.robaglia@gmail.com">
          felix.robaglia@gmail.com
        </a>
        <a
          class="social twitter"
          title="Twitter | Félix Robaglia"
          href="https://twitter.com/FRobaglia"
        ></a>
        <a
          class="social github"
          title="GitHub | Félix Robaglia"
          href="https://github.com/FRobaglia"
        ></a>
      </address>
    </header>
  );
}

export default Header;
