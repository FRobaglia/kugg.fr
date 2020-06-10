import React from 'react';
import Header from './components/Header.js'
import ProjectArea from './components/ProjectArea'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ProjectArea />
        <footer>

          <address>
            <a href="mailto:felix.robaglia@gmail.com">felix.robaglia@gmail.com</a>
          </address>

          <address>
            <a href="https://twitter.com/FRobaglia">Twitter</a> | <a href="https://github.com/FRobaglia">GitHub</a>
          </address>
          
        </footer>
      </>
    )
  }
}

export default App;
