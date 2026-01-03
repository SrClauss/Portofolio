import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Binary, Cpu, Layout, Zap, Box as BoxIcon, Database } from 'lucide-react';

// Icon mapping for tech stack
const TECH_ICONS = {
  Binary: <Binary style={{ width: 20, height: 20 }} />,
  Cpu: <Cpu style={{ width: 20, height: 20 }} />,
  Layout: <Layout style={{ width: 20, height: 20 }} />,
  Zap: <Zap style={{ width: 20, height: 20 }} />,
  Box: <BoxIcon style={{ width: 20, height: 20 }} />,
  Database: <Database style={{ width: 20, height: 20 }} />,
};

const techStack = [
  { name: 'Python', iconName: 'Binary', category: 'Logic' },
  { name: 'Rust', iconName: 'Cpu', category: 'Core' },
  { name: 'Next.js', iconName: 'Layout', category: 'View' },
  { name: 'FastAPI', iconName: 'Zap', category: 'Route' },
  { name: 'Docker', iconName: 'Box', category: 'Infra' },
  { name: 'SQL', iconName: 'Database', category: 'Data' },
];

export default function TechStack() {
  return (
    <Box
      component="section"
      id="tech"
      sx={{
        py: { xs: 10, md: 12 },
        px: { xs: 3, md: 6 },
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <Box sx={{ maxWidth: '1280px', mx: 'auto' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: { xs: 6, md: 8 },
            opacity: 0.5,
            textAlign: 'left',
          }}
        >
          <Box
            sx={{
              height: '1px',
              width: 48,
              bgcolor: 'primary.main',
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
            }}
          >
            Tech_Stack_Synthesis
          </Typography>
        </Box>
        
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(6, 1fr)',
            },
            gap: '1px',
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {techStack.map((tech, idx) => (
            <Paper
              key={idx}
              elevation={0}
              sx={{
                bgcolor: '#050505',
                p: { xs: 3, md: 4 },
                transition: 'background-color 0.3s',
                textAlign: 'center',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.03)',
                  '& .tech-icon': {
                    transform: 'scale(1.1)',
                  },
                },
              }}
            >
              <Box
                className="tech-icon"
                sx={{
                  color: 'primary.main',
                  mb: { xs: 2, md: 3 },
                  transition: 'transform 0.3s',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {TECH_ICONS[tech.iconName]}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Typography
                  sx={{
                    fontSize: '0.5rem',
                    letterSpacing: '0.1em',
                    color: 'rgba(255, 255, 255, 0.3)',
                    textTransform: 'uppercase',
                  }}
                >
                  {tech.category}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 700,
                    letterSpacing: '-0.025em',
                    textTransform: 'uppercase',
                    fontSize: { xs: '0.875rem', md: '1rem' },
                  }}
                >
                  {tech.name}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
