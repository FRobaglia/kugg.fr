import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="name">
          Félix Robaglia <span>— Portfolio</span>
        </h1>

        <address>
          <a href="mailto:felix.robaglia@gmail.com">
            felix.robaglia[at]gmail.com
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
}

export default Header;
