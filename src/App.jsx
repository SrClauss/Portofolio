import React from 'react';
import { Box } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import BackgroundGrid from './components/BackgroundGrid';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.secondary',
          fontFamily: 'monospace',
          overflowX: 'hidden',
        }}
      >
        <BackgroundGrid />
        <Navigation />
        <Hero />
        <ProblemSolution />
        <TechStack />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
