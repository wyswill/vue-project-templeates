import React from 'react';
import './sass/init.scss'
import './sass/main.scss'
import Routers from './router/router'

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Routers/>
      </div>
    )
  }
}

export default App;
