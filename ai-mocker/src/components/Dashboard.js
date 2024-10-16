import React from 'react';
import MockInt from './MockInt';
import MockEssay from './MockEssay';
import MockQuizzy from './MockQuizzy';
import './compo.css'; // Assuming you're using this CSS file

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <MockInt />
      <MockEssay />
      <MockQuizzy />
    </div>
  );
}
