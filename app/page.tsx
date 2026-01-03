export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Portfólio
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">Sobre</a>
              <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">Projetos</a>
              <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">Habilidades</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-purple-400 text-sm font-medium">Bem-vindo ao meu portfólio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Olá, eu sou{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Desenvolvedor
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Criando experiências digitais incríveis com código limpo e design moderno
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Ver Projetos
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
              Entre em Contato
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Sobre <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Mim</span>
          </h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Sou um desenvolvedor apaixonado por criar soluções inovadoras e experiências de usuário excepcionais. 
              Com expertise em desenvolvimento web moderno, busco sempre aprender novas tecnologias e melhores práticas.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Meu foco está em construir aplicações escaláveis, performáticas e com design atraente que fazem a diferença 
              na vida dos usuários.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Meus <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Projetos</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Projeto {project}</h3>
                <p className="text-gray-400 mb-4">
                  Uma descrição interessante sobre este projeto incrível que desenvolvi com paixão e dedicação.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TypeScript</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Minhas <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Habilidades</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Frontend', 'Backend', 'Design', 'DevOps'].map((category) => (
              <div key={category} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-4xl mb-4">
                  {category === 'Frontend' && '💻'}
                  {category === 'Backend' && '⚙️'}
                  {category === 'Design' && '🎨'}
                  {category === 'DevOps' && '🚀'}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category}</h3>
                <p className="text-gray-400">
                  Experiência sólida em {category.toLowerCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Entre em <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Contato</span>
          </h2>
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-gray-300 text-lg text-center mb-8">
              Interessado em trabalhar junto ou apenas quer dizer olá? Sinta-se à vontade para entrar em contato!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contato@exemplo.com" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity text-center">
                📧 Email
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20 text-center">
                💻 GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20 text-center">
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2026 Portfólio. Desenvolvido com ❤️ usando Next.js</p>
        </div>
      </footer>
    </div>
  );
}
