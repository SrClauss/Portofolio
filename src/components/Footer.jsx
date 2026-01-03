import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        px: { xs: 3, md: 6 },
        bgcolor: '#000000',
      }}
    >
      <Box
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4,
          fontSize: { xs: '0.5625rem', md: '0.625rem' },
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          opacity: 0.4,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Box sx={{ lineHeight: 2 }}>
          <Typography sx={{ fontSize: 'inherit' }}>
            Clausemberg // Molecular Logic Solver // {new Date().getFullYear()}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: { xs: 3, md: 4 } }}>
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 'inherit' }}>
            Purity: 99.1%
          </Typography>
          <Link
            href="#"
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              transition: 'color 0.3s',
              fontSize: 'inherit',
              '&:hover': {
                color: 'text.primary',
              },
            }}
          >
            GitHub
          </Link>
          <Link
            href="#"
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              transition: 'color 0.3s',
              fontSize: 'inherit',
              '&:hover': {
                color: 'text.primary',
              },
            }}
          >
            Privacy
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
