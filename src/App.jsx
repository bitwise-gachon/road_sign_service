import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImageUploadPage from './pages/ImageUploadPage';
import ImageUploadResultPage from './pages/ImageUploadResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<ImageUploadPage />} />
        <Route path="/result" element={<ImageUploadResultPage />} />
      </Routes>
    </BrowserRouter>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
