import React, { Component } from 'react';
import './App.css';

import HeroComponent from  './components/hero/heroComponent';
import SkillComponent from './components/skills/skillsComponent';
import WorkComponent from './components/work/workComponent';

class App extends Component {
  render() {
    return (
      <div>
        <HeroComponent/>
        <SkillComponent/>
        <WorkComponent/>
      </div>
    );
  }
}

export default App;
