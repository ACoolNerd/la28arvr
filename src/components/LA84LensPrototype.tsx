"use client";

import { useState } from 'react';
import { mockScenes } from '../data/scenes';

export default function LA84LensPrototype() {
  const [currentScene, setCurrentScene] = useState(mockScenes[0]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>LA84 Lens Prototype</h1>
      <div style={{ border: '2px solid #E8520F', padding: '10px', height: '300px', background: '#04050A', color: 'white' }}>
        <h2>AR Viewport (Mock)</h2>
        <p>Showing: {currentScene.name}</p>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Controls</h3>
        <button onClick={() => alert('Time slider moved')}>Time Slider</button>
      </div>
    </div>
  );
}
