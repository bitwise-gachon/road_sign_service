import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import ImageUploadPage from './pages/ImageUploadPage';
import ImageUploadResultPage from './pages/ImageUploadResultPage';
import PageLayout from './pages/page_layout/PageLayout';
import ImageListPage from './pages/ImageListPage';
import ResultListPage from './pages/ResultListPage';
import ResultDetailPage from './pages/ResultDetailPage';
import ImageDetailPage from './pages/ImageDetailPage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const fontFamily = ['Roboto', 'Arial'].join(',');
  const theme = createTheme({
    typography: {
      fontFamily,
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            index
            path="/upload"
            element={<PageLayout Article={ImageUploadPage} />}
          />
          <Route
            path="/test"
            element={<PageLayout Article={ImageUploadResultPage} />}
          />
          <Route
            path="/images"
            element={<PageLayout Article={ImageListPage} />}
          />
          <Route
            path="/images/:imageId"
            element={<PageLayout Article={ImageDetailPage} />}
          />
          <Route
            path="/results"
            element={<PageLayout Article={ResultListPage} />}
          />
          <Route
            path="/results/:resultId"
            element={<PageLayout Article={ResultDetailPage} />}
          />
        </Routes>
      </ThemeProvider>
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
