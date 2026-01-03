import React from 'react';
import { AppBar, Toolbar, Box, Typography, Link } from '@mui/material';
import { Fingerprint } from 'lucide-react';

export default function Navigation() {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'rgba(5, 5, 5, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          maxWidth: '1280px',
          width: '100%',
          mx: 'auto',
          px: { xs: 3, sm: 6 },
          height: 64,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontWeight: 700,
            color: 'text.primary',
            letterSpacing: '0.1em',
            fontSize: '0.875rem',
            textTransform: 'uppercase',
          }}
        >
          <Fingerprint style={{ color: '#10B981', width: 20, height: 20 }} />
          <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
            Identity_Verified
          </Box>
          <Box
            component="span"
            sx={{
              display: { xs: 'inline', sm: 'none' },
              fontSize: '0.625rem',
            }}
          >
            Verified
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 2, md: 4 },
            fontSize: '0.625rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          <Link
            href="#solve"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              transition: 'color 0.3s',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            Solve
          </Link>
          <Link
            href="#tech"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              transition: 'color 0.3s',
              display: { xs: 'none', sm: 'inline' },
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            Stack
          </Link>
          <Box
            sx={{
              height: 16,
              width: '1px',
              bgcolor: 'rgba(255, 255, 255, 0.1)',
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.4)',
              fontStyle: 'italic',
              fontSize: '0.625rem',
              display: { xs: 'none', sm: 'inline' },
            }}
          >
            v2.5.0
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
