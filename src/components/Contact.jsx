import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ChevronRight } from 'lucide-react';

export default function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 12, md: 16 },
        px: { xs: 3, md: 6 },
      }}
    >
      <Box
        sx={{
          maxWidth: '896px',
          mx: 'auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 5, md: 6 },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.875rem', md: '3rem' },
              fontWeight: 700,
              color: 'text.primary',
              letterSpacing: '-0.025em',
              textTransform: 'uppercase',
              lineHeight: 1.2,
            }}
          >
            Iniciar{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Protocolo de Solução
            </Box>
            ?
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.4)',
              fontSize: { xs: '0.625rem', md: '0.875rem' },
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Não entregamos apenas código. Entregamos o fim do seu problema.
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'white',
              color: 'black',
              px: { xs: 5, md: 8 },
              py: { xs: 2.5, md: 3 },
              fontWeight: 900,
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              transition: 'all 0.3s',
              borderRadius: 0,
              '&:hover': {
                bgcolor: 'primary.main',
                '& .arrow-icon': {
                  transform: 'translateX(8px)',
                },
              },
            }}
          >
            Establish_Connection
            <ChevronRight
              className="arrow-icon"
              style={{ transition: 'transform 0.3s' }}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
