import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton, Paper } from '@mui/material';
import { Terminal, Github, Linkedin, Mail, ChevronRight } from 'lucide-react';

// Animation timing constants
const TYPING_DELAY = 100;
const EXECUTION_PAUSE = 400;
const NAME_DISPLAY_DURATION = 3500;
const RESET_DELAY = 1000;

export default function Hero() {
  const [commandText, setCommandText] = useState('');
  const [showName, setShowName] = useState(false);
  
  const fullCommand = "./say_my_name.sh";
  const myName = "Clausemberg";

  // Terminal animation cycle
  useEffect(() => {
    let isMounted = true;
    let timeoutId;

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const runTerminalCycle = async () => {
      if (!isMounted) return;

      // 1. Type the command
      for (let i = 0; i <= fullCommand.length; i++) {
        if (!isMounted) return;
        setCommandText(fullCommand.substring(0, i));
        await sleep(TYPING_DELAY);
      }

      // 2. Execution pause
      await sleep(EXECUTION_PAUSE);

      // 3. Show name and logs
      if (!isMounted) return;
      setShowName(true);

      // 4. Display pause
      await sleep(NAME_DISPLAY_DURATION);

      // 5. Clear and restart
      if (!isMounted) return;
      setShowName(false);
      setCommandText('');
      await sleep(RESET_DELAY);

      if (!isMounted) return;
      timeoutId = setTimeout(runTerminalCycle, 0);
    };

    runTerminalCycle();
    return () => {
      isMounted = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [fullCommand]);

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        pt: { xs: 12, md: 16 },
        pb: 6,
        px: { xs: 2, md: 4 },
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        zIndex: 10,
      }}
    >
      <Box sx={{ maxWidth: '1536px', mx: 'auto', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Terminal */}
          <Paper
            elevation={0}
            sx={{
              width: '100%',
              maxWidth: '896px',
              bgcolor: '#0a0a0a',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: 2,
              boxShadow: '0 0 50px -12px rgba(16, 185, 129, 0.2)',
              p: { xs: 3, md: 5 },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                p: 2,
                opacity: 0.1,
                color: 'primary.main',
                '& svg': {
                  width: { xs: 48, md: 80 },
                  height: { xs: 48, md: 80 },
                },
              }}
            >
              <Terminal size={48} />
            </Box>
            
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                mb: { xs: 3, md: 4 },
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                pb: 2,
                textAlign: 'left',
              }}
            >
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'rgba(153, 27, 27, 0.4)' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'rgba(161, 98, 7, 0.4)' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'rgba(21, 128, 61, 0.4)' }} />
              <Typography
                sx={{
                  fontSize: { xs: '0.5625rem', md: '0.625rem' },
                  color: '#475569',
                  ml: 2,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                Auth: Level 1 Access
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.5, md: 1 } }}>
                <Typography
                  sx={{
                    color: '#64748b',
                    fontSize: { xs: '0.625rem', md: '0.875rem' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box component="span" sx={{ color: 'primary.main' }}>➜</Box>
                  <Box component="span" sx={{ color: '#61DAFB' }}>~</Box>
                  /identity
                  <Box component="span" sx={{ color: '#334155' }}>--exec</Box>
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: { xs: '1.125rem', md: '1.5rem' },
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box component="span" sx={{ color: 'primary.main' }}>$</Box>
                  {commandText}
                  {!showName && (
                    <Box
                      sx={{
                        width: 8,
                        height: 20,
                        bgcolor: 'primary.main',
                        animation: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        '@keyframes pulse': {
                          '0%, 100%': { opacity: 1 },
                          '50%': { opacity: 0.5 },
                        },
                      }}
                    />
                  )}
                </Typography>
              </Box>

              <Box sx={{ minHeight: '1.2em' }}>
                {showName && (
                  <Typography
                    sx={{
                      fontSize: { xs: '2.25rem', sm: '3.75rem', md: '6rem', lg: '8rem' },
                      fontWeight: 900,
                      color: 'text.primary',
                      letterSpacing: '-0.05em',
                      textTransform: 'uppercase',
                      lineHeight: 1,
                      wordBreak: 'break-word',
                      animation: 'fadeInSlide 0.5s ease-in-out',
                      '@keyframes fadeInSlide': {
                        '0%': {
                          opacity: 0,
                          transform: 'translateX(-16px)',
                        },
                        '100%': {
                          opacity: 1,
                          transform: 'translateX(0)',
                        },
                      },
                    }}
                  >
                    {myName}
                    <Box
                      component="span"
                      sx={{
                        color: 'primary.main',
                        animation: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                      }}
                    >
                      _
                    </Box>
                  </Typography>
                )}
              </Box>
              
              <Box
                sx={{
                  pt: 1,
                  opacity: 0.4,
                  fontSize: { xs: '0.5625rem', md: '0.75rem' },
                  fontFamily: 'monospace',
                  height: 32,
                }}
              >
                {showName && (
                  <>
                    <Typography sx={{ fontSize: 'inherit' }}>&gt; USER_FOUND: SOLVER_ARCHITECT</Typography>
                    <Typography sx={{ fontSize: 'inherit' }}>&gt; STATUS: READY_TO_CODE</Typography>
                  </>
                )}
              </Box>
            </Box>
          </Paper>

          <Box sx={{ maxWidth: '768px', display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 }, px: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.25rem', md: '2.25rem' },
                fontWeight: 300,
                color: '#cbd5e1',
                lineHeight: 1.4,
              }}
            >
              Aquele que desenvolve a{' '}
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                solução exata
              </Box>{' '}
              para o seu gargalo operacional.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.875rem', md: '1.125rem' },
                opacity: 0.6,
                maxWidth: '672px',
                mx: 'auto',
                lineHeight: 1.75,
              }}
            >
              Especialista em sintetizar complexidade em sistemas de alta pureza. Eu não escrevo apenas código; eu resolvo problemas que impedem sua escala.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, md: 3 }, pt: 1 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'white',
                color: 'black',
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                fontWeight: 900,
                fontSize: { xs: '0.75rem', md: '0.875rem' },
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                boxShadow: { xs: '4px 4px 0px 0px #10B981', md: '8px 8px 0px 0px #10B981' },
                transition: 'all 0.3s',
                borderRadius: 0,
                '&:hover': {
                  bgcolor: 'primary.main',
                  boxShadow: 'none',
                  transform: 'translate(4px, 4px)',
                },
                '&:active': {
                  transform: 'translate(4px, 4px)',
                },
              }}
            >
              You're Goddamn Right
            </Button>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3,
                px: 3,
                py: 1.5,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 0.5,
              }}
            >
              <IconButton
                aria-label="GitHub profile"
                sx={{
                  color: 'text.secondary',
                  transition: 'color 0.3s',
                  p: 0,
                  '&:hover': {
                    color: 'text.primary',
                    bgcolor: 'transparent',
                  },
                }}
              >
                <Github size={18} />
              </IconButton>
              <IconButton
                aria-label="LinkedIn profile"
                sx={{
                  color: 'text.secondary',
                  transition: 'color 0.3s',
                  p: 0,
                  '&:hover': {
                    color: 'text.primary',
                    bgcolor: 'transparent',
                  },
                }}
              >
                <Linkedin size={18} />
              </IconButton>
              <IconButton
                aria-label="Send email"
                sx={{
                  color: 'text.secondary',
                  transition: 'color 0.3s',
                  p: 0,
                  '&:hover': {
                    color: 'text.primary',
                    bgcolor: 'transparent',
                  },
                }}
              >
                <Mail size={18} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
