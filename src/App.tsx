import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Administration from './pages/Administration';
import WaterSystem from './pages/WaterSystem';
import Documents from './pages/Documents';
import Emergency from './pages/Emergency';

const theme = createTheme({
  typography: {
    fontFamily: '"Noto Sans Serbian", sans-serif',
  },
  palette: {
    primary: {
      main: '#2C5282',
    },
    secondary: {
      main: '#4A5568',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/administration" element={<Administration />} />
              <Route path="/water-system" element={<WaterSystem />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/emergency" element={<Emergency />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;