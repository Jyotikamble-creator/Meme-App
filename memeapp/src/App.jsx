import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MemeDisplay from './components/MemeDisplay';

// the main page of the website
// page to display the result
function App() {
  return (
    <>
      <div className=' p-6  flex flex-col items-center bg-gray-500'>
        <h1 className='text-3xl text-white  font-bold  mb-8'>THIS IS MEME WORLD</h1>
        <MemeDisplay />
      </div>
    </>
  )
}

export default App;
