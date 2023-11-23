import React from 'react';
import logo from './logo.svg';
import './App.css';
import Memory from './components/MemoryItem';
import Header from './UI/Header';
import MemoriesList from './components/MemoriesList';

export type Memory = {
  id: number,
  description: string,
  imgUrl?: string,
  age: string
};

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
