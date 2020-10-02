import React from "react";
import Header from "./components/Header.js";
import ProjectArea from "./components/ProjectArea";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ProjectArea />
      </>
    );
  }
}

export default App;
