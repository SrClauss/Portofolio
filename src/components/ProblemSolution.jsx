import React from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import { Search, CheckCircle2, Box as BoxIcon, Activity } from 'lucide-react';

const problemSolutions = [
  { p: "Processos Manuais", s: "Automação com Python e Inteligência" },
  { p: "Instabilidade", s: "Infraestrutura robusta em Rust/Docker" },
  { p: "Lentidão", s: "APIs de baixa latência em FastAPI" }
];

export default function ProblemSolution() {
  return (
    <Box
      component="section"
      id="solve"
      sx={{
        py: { xs: 10, md: 12 },
        px: { xs: 3, md: 6 },
        bgcolor: '#080808',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
      }}
    >
      <Box sx={{ maxWidth: '1280px', mx: 'auto' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
            <Chip
              label="Problem-Solution Matrix"
              sx={{
                alignSelf: 'flex-start',
                px: 1.5,
                py: 0.5,
                bgcolor: 'rgba(16, 185, 129, 0.1)',
                color: 'primary.main',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                fontSize: '0.625rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                height: 'auto',
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.875rem', md: '2.25rem' },
                fontWeight: 700,
                color: 'text.primary',
                letterSpacing: '-0.025em',
              }}
            >
              Minha missão é remover o{' '}
              <Box
                component="span"
                sx={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(to right, #10B981, white)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                atrito
              </Box>{' '}
              do seu negócio.
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
              {problemSolutions.map((item, i) => (
                <Paper
                  key={i}
                  elevation={0}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 1, sm: 2 },
                    p: 2,
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    bgcolor: 'rgba(255, 255, 255, 0.02)',
                    transition: 'border-color 0.3s',
                    '&:hover': {
                      borderColor: 'rgba(16, 185, 129, 0.3)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5, color: 'rgba(239, 68, 68, 0.5)' }}>
                      <Search size={14} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        sx={{
                          fontSize: '0.5625rem',
                          color: '#64748b',
                          textTransform: 'uppercase',
                          mb: 0.25,
                        }}
                      >
                        Problema:
                      </Typography>
                      <Typography
                        sx={{
                          color: 'text.primary',
                          fontWeight: 700,
                          fontSize: '0.875rem',
                        }}
                      >
                        {item.p}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: 'none', sm: 'block' },
                      width: '1px',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      height: 32,
                      alignSelf: 'center',
                    }}
                  />
                  <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5, color: 'primary.main' }}>
                      <CheckCircle2 size={14} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        sx={{
                          fontSize: '0.5625rem',
                          color: '#64748b',
                          textTransform: 'uppercase',
                          mb: 0.25,
                        }}
                      >
                        Solução:
                      </Typography>
                      <Typography
                        sx={{
                          color: 'primary.main',
                          fontWeight: 700,
                          fontSize: '0.875rem',
                        }}
                      >
                        {item.s}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 2,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                aspectRatio: '1',
                bgcolor: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                p: { xs: 3, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                gap: { xs: 1.5, md: 2 },
                transition: 'all 0.3s',
                '&:hover': {
                  borderColor: 'rgba(16, 185, 129, 0.5)',
                  '& svg': {
                    transform: 'scale(1.1)',
                  },
                },
              }}
            >
              <BoxIcon
                style={{
                  color: '#10B981',
                  transition: 'transform 0.3s',
                }}
                size={24}
              />
              <Typography
                variant="h4"
                sx={{
                  color: 'text.primary',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  fontSize: { xs: '0.625rem', md: '0.75rem' },
                  letterSpacing: '0.1em',
                }}
              >
                Estrutura
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.5625rem', md: '0.625rem' },
                  lineHeight: 1.75,
                  opacity: 0.4,
                  textTransform: 'uppercase',
                }}
              >
                Arquiteturas para sustentar o crescimento agressivo.
              </Typography>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                aspectRatio: '1',
                bgcolor: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                p: { xs: 3, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                gap: { xs: 1.5, md: 2 },
                transform: { xs: 'translateY(24px)', md: 'translateY(32px)' },
                transition: 'all 0.3s',
                '&:hover': {
                  borderColor: 'rgba(16, 185, 129, 0.5)',
                  '& svg': {
                    transform: 'scale(1.1)',
                  },
                },
              }}
            >
              <Activity
                style={{
                  color: '#10B981',
                  transition: 'transform 0.3s',
                }}
                size={24}
              />
              <Typography
                variant="h4"
                sx={{
                  color: 'text.primary',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  fontSize: { xs: '0.625rem', md: '0.75rem' },
                  letterSpacing: '0.1em',
                }}
              >
                Fluxo
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.5625rem', md: '0.625rem' },
                  lineHeight: 1.75,
                  opacity: 0.4,
                  textTransform: 'uppercase',
                }}
              >
                Eliminação de gargalos em dados e processos.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
