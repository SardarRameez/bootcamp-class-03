import React from 'react';
import './App.css';
import { User } from './User';
import { MediaCard } from './MediaCard';
import { Gate } from './Gate';

function App() {
  let name="Rameez";
  let status="close";
  return (
    <div>
      <User userName={name}></User>
      <MediaCard></MediaCard>
      <Gate status={status}></Gate>
    </div>
  );
}

export default App;
