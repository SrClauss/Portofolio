import React from 'react';
import { Box } from '@mui/material';

export default function BackgroundGrid() {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        opacity: 0.15,
        pointerEvents: 'none',
        backgroundImage:
          'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }}
    />
  );
}
