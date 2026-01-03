import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Github,
  Linkedin,
  Mail,
  Fingerprint,
  ChevronRight,
  Search,
  CheckCircle2,
  Box,
  Activity,
  Binary,
  Cpu,
  Layout,
  Zap,
  Database
} from 'lucide-react';

// Animation timing constants
const TYPING_DELAY = 100;
const EXECUTION_PAUSE = 400;
const NAME_DISPLAY_DURATION = 3500;
const RESET_DELAY = 1000;

// Icon mapping for tech stack
const TECH_ICONS = {
  Binary: <Binary className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Box: <Box className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
};

const App = () => {
  const [commandText, setCommandText] = useState('');
  const [showName, setShowName] = useState(false);
  
  const fullCommand = "./say_my_name.sh";
  const myName = "Clausemberg";

  // Ciclo de Animação Completa do Terminal (Comando -> Nome -> Clear -> Repete)
  useEffect(() => {
    let isMounted = true;
    let timeoutId;

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const runTerminalCycle = async () => {
      if (!isMounted) return;

      // 1. Digitar o comando
      for (let i = 0; i <= fullCommand.length; i++) {
        if (!isMounted) return;
        setCommandText(fullCommand.substring(0, i));
        await sleep(TYPING_DELAY);
      }

      // 2. Pequena pausa de execução
      await sleep(EXECUTION_PAUSE);

      // 3. Mostrar o nome e logs
      if (!isMounted) return;
      setShowName(true);

      // 4. Pausa para leitura (Exibição do Nome)
      await sleep(NAME_DISPLAY_DURATION);

      // 5. Limpar e reiniciar
      if (!isMounted) return;
      setShowName(false);
      setCommandText('');
      await sleep(RESET_DELAY);

      if (!isMounted) return;
      // Agenda o próximo ciclo de forma recursiva
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

  const techStack = [
    { name: 'Python', iconName: 'Binary', category: 'Logic' },
    { name: 'Rust', iconName: 'Cpu', category: 'Core' },
    { name: 'Next.js', iconName: 'Layout', category: 'View' },
    { name: 'FastAPI', iconName: 'Zap', category: 'Route' },
    { name: 'Docker', iconName: 'Box', category: 'Infra' },
    { name: 'SQL', iconName: 'Database', category: 'Data' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#a1a1aa] font-mono selection:bg-[#10B981] selection:text-black overflow-x-hidden">
      
      {/* Grid Overlay de Fundo */}
      <div className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }}>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-white tracking-widest text-sm uppercase">
            <Fingerprint className="text-[#10B981] w-5 h-5" />
            <span className="hidden sm:inline">Identity_Verified</span>
            <span className="sm:hidden text-[10px]">Verified</span>
          </div>
          <div className="flex items-center gap-4 md:gap-8 text-[10px] tracking-[0.2em] uppercase">
            <a href="#solve" className="hover:text-[#10B981] transition-colors">Solve</a>
            <a href="#tech" className="hover:text-[#10B981] transition-colors hidden sm:inline">Stack</a>
            <div className="h-4 w-[1px] bg-white/10"></div>
            <span className="text-white/40 italic hidden xs:inline">v2.5.0</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4 z-10 min-h-[85vh] flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
            
            {/* Terminal Principal */}
            <div className="w-full max-w-4xl bg-[#0a0a0a] border border-[#10B981]/30 rounded-lg shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)] p-6 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-[#10B981]">
                <Terminal size={48} className="md:w-20 md:h-20" />
              </div>
              
              <div className="flex gap-2 mb-6 md:mb-8 border-b border-white/5 pb-4 text-left">
                <div className="w-3 h-3 rounded-full bg-red-900/40"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-900/40"></div>
                <div className="w-3 h-3 rounded-full bg-green-900/40"></div>
                <span className="text-[9px] md:text-[10px] text-slate-600 ml-4 tracking-[0.3em] uppercase truncate">Auth: Level 1 Access</span>
              </div>

              <div className="text-left space-y-4 md:space-y-6">
                <div className="space-y-1 md:space-y-2">
                  <p className="text-slate-500 text-[10px] md:text-sm flex items-center gap-2">
                    <span className="text-[#10B981]">➜</span> <span className="text-[#61DAFB]">~</span> /identity <span className="text-slate-700">--exec</span>
                  </p>
                  <p className="text-white/80 text-lg md:text-2xl font-bold flex items-center gap-2">
                    <span className="text-[#10B981]">$</span> {commandText}
                    {!showName && <span className="w-2 h-5 bg-[#10B981] animate-pulse"></span>}
                  </p>
                </div>

                <div className="min-h-[1.2em]">
                  {showName && (
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-none break-words animate-in fade-in slide-in-from-left-4 duration-500">
                      {myName}<span className="text-[#10B981] animate-pulse">_</span>
                    </h1>
                  )}
                </div>
                
                <div className="pt-2 opacity-40 text-[9px] md:text-xs font-mono h-8">
                  {showName && (
                    <>
                      <p>&gt; USER_FOUND: SOLVER_ARCHITECT</p>
                      <p>&gt; STATUS: READY_TO_CODE</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="max-w-3xl space-y-4 md:space-y-6 px-2">
              <h2 className="text-xl md:text-4xl font-light text-slate-300 leading-tight">
                Aquele que desenvolve a <span className="text-[#10B981] font-bold">solução exata</span> para o seu gargalo operacional. 
              </h2>
              <p className="text-sm md:text-lg opacity-60 max-w-2xl mx-auto leading-relaxed">
                Especialista em sintetizar complexidade em sistemas de alta pureza. Eu não escrevo apenas código; eu resolvo problemas que impedem sua escala.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-2">
              <button
                type="button"
                className="bg-white text-black px-8 md:px-12 py-3 md:py-4 font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-[#10B981] transition-all shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] md:shadow-[8px_8px_0px_0px_rgba(16,185,129,1)] hover:shadow-none active:translate-x-1 active:translate-y-1"
              >
                You're Goddamn Right
              </button>
              <div className="flex items-center justify-center gap-6 px-6 py-3 border border-white/10 rounded-sm">
                <button
                  type="button"
                  aria-label="Abrir perfil no GitHub"
                  className="hover:text-white cursor-pointer transition-colors bg-transparent border-0 p-0"
                >
                  <Github size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Abrir perfil no LinkedIn"
                  className="hover:text-white cursor-pointer transition-colors bg-transparent border-0 p-0"
                >
                  <Linkedin size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Enviar e-mail"
                  className="hover:text-white cursor-pointer transition-colors bg-transparent border-0 p-0"
                >
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Resolução de Problemas */}
      <section id="solve" className="py-20 md:py-24 px-6 bg-[#080808] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block px-3 py-1 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 text-[10px] font-bold tracking-widest uppercase">
                Problem-Solution Matrix
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">Minha missão é remover o <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-white">atrito</span> do seu negócio.</h3>
              
              <div className="space-y-4 md:space-y-6">
                {[
                  { p: "Processos Manuais", s: "Automação com Python e Inteligência" },
                  { p: "Instabilidade", s: "Infraestrutura robusta em Rust/Docker" },
                  { p: "Lentidão", s: "APIs de baixa latência em FastAPI" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 border border-white/5 bg-white/[0.02] hover:border-[#10B981]/30 transition-all">
                    <div className="flex gap-4 flex-1">
                      <div className="flex-shrink-0 mt-1 text-red-500/50"><Search size={14} /></div>
                      <div className="flex-grow">
                        <p className="text-[9px] text-slate-500 uppercase mb-0.5">Problema:</p>
                        <p className="text-white font-bold text-sm">{item.p}</p>
                      </div>
                    </div>
                    <div className="hidden sm:block w-px bg-white/10 h-8 self-center"></div>
                    <div className="flex gap-4 flex-1">
                      <div className="flex-shrink-0 mt-1 text-[#10B981]"><CheckCircle2 size={14} /></div>
                      <div className="flex-grow">
                        <p className="text-[9px] text-slate-500 uppercase mb-0.5">Solução:</p>
                        <p className="text-[#10B981] font-bold text-sm">{item.s}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/[0.01] border border-white/5 p-6 md:p-8 flex flex-col justify-end space-y-3 md:space-y-4 hover:border-[#10B981]/50 transition-all group">
                <Box className="text-[#10B981] group-hover:scale-110 transition-transform" size={24} />
                <h4 className="text-white font-bold uppercase text-[10px] md:text-xs tracking-widest">Estrutura</h4>
                <p className="text-[9px] md:text-[10px] leading-relaxed opacity-40 uppercase">Arquiteturas para sustentar o crescimento agressivo.</p>
              </div>
              <div className="aspect-square bg-white/[0.01] border border-white/5 p-6 md:p-8 flex flex-col justify-end space-y-3 md:space-y-4 hover:border-[#10B981]/50 transition-all translate-y-6 md:translate-y-8 group">
                <Activity className="text-[#10B981] group-hover:scale-110 transition-transform" size={24} />
                <h4 className="text-white font-bold uppercase text-[10px] md:text-xs tracking-widest">Fluxo</h4>
                <p className="text-[9px] md:text-[10px] leading-relaxed opacity-40 uppercase">Eliminação de gargalos em dados e processos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className="py-20 md:py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12 md:mb-16 opacity-50 text-left">
            <div className="h-[1px] w-12 bg-[#10B981]"></div>
            <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase">Tech_Stack_Synthesis</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 border border-white/10">
            {techStack.map((tech, idx) => (
              <div key={idx} className="bg-[#050505] p-6 md:p-8 hover:bg-white/[0.03] transition-colors group relative text-center">
                <div className="text-[#10B981] mb-4 md:mb-6 group-hover:scale-110 transition-transform flex justify-center">
                  {TECH_ICONS[tech.iconName]}
                </div>
                <div className="space-y-1">
                  <p className="text-[8px] tracking-widest text-white/30 uppercase">{tech.category}</p>
                  <h4 className="text-white font-bold tracking-tighter uppercase text-sm md:text-base">{tech.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10 md:space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase leading-tight">Iniciar <span className="text-[#10B981]">Protocolo de Solução</span>?</h2>
            <p className="text-white/40 text-[10px] md:text-sm tracking-widest uppercase">Não entregamos apenas código. Entregamos o fim do seu problema.</p>
          </div>
          
          <div className="flex justify-center">
             <button className="group bg-white text-black px-10 md:px-16 py-5 md:py-6 font-black text-xs tracking-[0.3em] uppercase hover:bg-[#10B981] transition-all flex items-center gap-4">
               Establish_Connection
               <ChevronRight className="group-hover:translate-x-2 transition-transform" />
             </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] md:text-[10px] tracking-[0.2em] uppercase opacity-40 text-center md:text-left">
          <div className="leading-loose">
            Clausemberg // Molecular Logic Solver // {new Date().getFullYear()}
          </div>
          <div className="flex gap-6 md:gap-8">
            <span className="text-white/60">Purity: 99.1%</span>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
