import React from 'react';
import './App.css';
import Header from './UI/Header';
import MemoriesList from './components/MemoriesList';
import { Memory } from './common/@types/types';


const defaultMemories: Memory[] = [
  {
    id: 1,
    description: "Olympic National Park 2023",
    age: '0-2'
  },
  {
    id: 2,
    description: "Second Birthday 2023",
    age: '0-2'
  },
  {
    id: 1,
    description: "Fun around Chicago",
    age: '0-2'
  },
];

function App() {
  return (
      <>
        <Header text='Mila Memories'/>
        <div className='container'>
            <MemoriesList memories={defaultMemories}/>
        </div>
      </>
  );
}

export default App;

