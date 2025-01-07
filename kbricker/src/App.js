import * as React from 'react';

import MainCard from './components/mainCard';
import ItemGrid from './components/itemGrid';

import './index.css';

import background from './img/mordor-landscape-alyssa-rosales.jpg';

function App() {
  return (
    <div className='content' style={{backgroundImage: background}}>
      <MainCard></MainCard>
      <ItemGrid></ItemGrid>
    </div>
  );
}

export default App;
