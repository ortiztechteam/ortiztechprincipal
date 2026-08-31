import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  ExternalLink,
  Instagram,
  Layers3,
  Menu,
  MessageCircle,
  MoveUpRight,
  Palette,
  PenTool,
  Phone,
  Plus,
  Quote,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';

type Project = {
  title: string;
  category: string;
  description: string;
  tone: string;
  accent: string;
  type: 'dashboard' | 'restaurant' | 'law' | 'clinic' | 'studio' | 'shop';
};

const whatsappUrl = 'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20criar%20um%20site%20para%20meu%20neg%C3%B3cio.';

const projects: Project[] = [
  { title: 'Ateliê Aroeira', category: 'Arquitetura & interiores', description: 'Uma presença digital que traduz a sofisticação de cada projeto.', tone: 'stone', accent: '#c9a76a', type: 'studio' },
  { title: 'Bendita Massa', category: 'Gastronomia', description: 'Mais reservas e mais desejo em cada visita.', tone: 'terracotta', accent: '#e18c5c', type: 'restaurant' },
  { title: 'Clínica Vitta', category: 'Saúde & bem-estar', description: 'Acolhimento e clareza para cuidar melhor.', tone: 'sage', accent: '#9ab69a', type: 'clinic' },
  { title: 'Núcleo Legal', category: 'Advocacia', description: 'Autoridade construída com uma comunicação humana.', tone: 'navy', accent: '#92a7c5', type: 'law' },
  { title: 'Ortiz Tech', category: 'Branding & criação', description: 'Um espaço para ideias que não cabem no óbvio.', tone: 'lilac', accent: '#cab5df', type: 'studio' },
  { title: 'Casa Nativa', category: 'Varejo & lifestyle', description: 'Uma loja online tão especial quanto seus produtos.', tone: 'olive', accent: '#b4bd7a', type: 'shop' },
];

function Logo() {
  return <a href="/" className="logo" aria-label="Ortiz Tech início"><span className="logo-mark"><span /></span><span>ortiz<span className="logo-light">.</span></span></a>;
}

function WhatsAppButton({ label = 'Falar no WhatsApp', outline = false }: { label?: string; outline?: boolean }) {
  return <a className={outline ? 'button button-outline' : 'button button-gold'} href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={15} />{label}<ArrowRight size={15} /></a>;
}

function Nav({ portfolio = false }: { portfolio?: boolean }) {
  const [open, setOpen] = useState(false);
  const navigate = (path: string) => { setOpen(false); window.history.pushState({}, '', path); window.dispatchEvent(new PopStateEvent('popstate')); };
  return <header className={`site-header ${portfolio ? 'header-dark' : ''}`}>
    <div className="container nav-wrap">
      <a href="/" onClick={(event) => { event.preventDefault(); navigate('/'); }}><Logo /></a>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
        <a href="/#servicos" onClick={() => setOpen(false)}>Serviços</a>
        <a href="/portfolio" className={portfolio ? 'active' : ''} onClick={(event) => { event.preventDefault(); navigate('/portfolio'); }}>Portfólio <MoveUpRight size={12} /></a>
        <a href="/#processo" onClick={() => setOpen(false)}>Processo</a>
        <a href="/#sobre" onClick={() => setOpen(false)}>Sobre nós</a>
        <div className="mobile-cta"><WhatsAppButton /></div>
      </nav>
      <div className="desktop-cta"><WhatsAppButton /></div>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}

function SectionEyebrow({ children }: { children: string }) { return <div className="eyebrow"><span />{children}</div>; }

function BrowserPreview({ project }: { project: Project }) {
  return <div className={`browser-preview preview-${project.type}`}>
    <div className="browser-bar"><span /><span /><span /><div className="address">{project.title.toLowerCase().replace(/ /g, '')}.com.br</div></div>
    <div className="mock-site">
      {project.type === 'dashboard' && <><div className="mock-nav"><b>VÉRTICE</b><i /><i /><i /></div><div className="mock-dashboard"><div className="mock-side" /><div className="mock-main"><small>Olá, Marina</small><strong>Visão geral</strong><div className="mock-stats"><span /><span /><span /></div><div className="mock-chart" /></div></div></>}
      {project.type === 'restaurant' && <><div className="food-photo"><span>massa<br /><b>feito à mão</b></span></div><div className="mock-food-text"><small>BENDITA MASSA</small><strong>O sabor de<br />estar em casa.</strong><button>Reservar mesa</button></div></>}
      {project.type === 'clinic' && <><div className="clinic-top"><b>VITTA</b><span>cuidado que acolhe</span></div><div className="clinic-copy"><small>CLÍNICA INTEGRADA</small><strong>Seu bem-estar<br />em primeiro lugar.</strong><button>Agende sua consulta</button></div><div className="clinic-circle" /></>}
      {project.type === 'law' && <><div className="law-top"><b>NÚCLEO<br /><em>LEGAL</em></b><span>Atuação estratégica</span></div><div className="law-copy"><small>ADVOCACIA CONTEMPORÂNEA</small><strong>Direito com<br />clareza e propósito.</strong><button>Conheça nossa atuação</button></div></>}
      {project.type === 'shop' && <><div className="shop-top"><b>CASA NATIVA</b><span>Buscar　 Sacola (0)</span></div><div className="shop-copy"><small>COLEÇÃO ESSENCIAL</small><strong>Peças para<br />viver com calma.</strong><button>Ver coleção</button></div><div className="shop-product" /></>}
      {project.type === 'studio' && <><div className="studio-top"><b>AROEIRA</b><span>projetos　 contato</span></div><div className="studio-copy"><small>ARQUITETURA SENSÍVEL</small><strong>Espaços que<br />contam histórias.</strong><button>Explorar projetos</button></div><div className="studio-shape" /></>}
    </div>
  </div>;
}

function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  return <div className="app-shell">
    <Nav />
    <main>
      <section className="hero home-hero"><div className="hero-grid" /><div className="container hero-content">
        <div className="hero-copy"><div className="pill"><Sparkles size={13} /> Estratégia, design & tecnologia</div><h1>Seu negócio<br /><em>merece ser visto.</em></h1><p className="hero-lead">Criamos sites que traduzem o valor da sua marca, conquistam confiança e transformam visitantes em clientes.</p><div className="hero-actions"><WhatsAppButton label="Quero meu site" /><a href="#servicos" className="text-link">Descobrir como <ChevronRight size={16} /></a></div><div className="hero-trust"><div className="avatars"><span>MP</span><span>JR</span><span>LC</span><span>+</span></div><p><b>+40 marcas</b><br />já passaram por aqui</p></div></div>
        <div className="hero-art"><div className="art-ring ring-one" /><div className="art-ring ring-two" /><div className="art-card card-back" /><div className="art-card card-front"><div className="card-top"><span>ORTIZ TECH</span><span>2024</span></div><div className="card-title">Ideias que<br /><i>ganham forma.</i></div><div className="card-line" /><div className="card-bottom"><span>Scroll to explore</span><ArrowRight size={14} /></div></div><div className="art-note"><span className="note-dot" /><b>Design com<br />intenção</b></div></div>
      </div></section>
      <section className="logo-strip"><div className="container logo-strip-inner"><span>Marcas que confiam no nosso trabalho</span><div className="client-logos"><b>aurora</b><b>norte<span>.</span></b><b>VÉRTICE</b><b>mimo</b><b>casa<span>nativa</span></b></div></div></section>
      <section className="section services-section" id="servicos"><div className="container"><div className="section-heading split-heading"><div><SectionEyebrow>O que fazemos</SectionEyebrow><h2>Mais que um site.<br /><em>Uma presença.</em></h2></div><p>Cada negócio tem uma história única. A nossa missão é fazer com que as pessoas certas encontrem, entendam e escolham a sua.</p></div><div className="services-grid"><ServiceCard number="01" icon={<PenTool />} title="Sites sob medida" text="Nada de templates prontos. Criamos uma experiência única, pensada para a personalidade e os objetivos do seu negócio." /><ServiceCard number="02" icon={<Layers3 />} title="Estratégia que conecta" text="Antes de desenhar, entendemos. Posicionamento, conteúdo e estrutura para seu site trabalhar a favor da sua marca." /><ServiceCard number="03" icon={<Zap />} title="Tecnologia simples" text="Performance, responsividade e autonomia. Um site bonito, rápido e fácil de manter no dia a dia." /></div></div></section>
      <section className="section showcase-section"><div className="container"><div className="section-heading centered"><SectionEyebrow>Trabalho recente</SectionEyebrow><h2>Feito para <em>ser lembrado.</em></h2><p>Projetos com propósito, personalidade e resultados reais.</p></div><div className="featured-project"><BrowserPreview project={{ ...projects[0], type: 'dashboard', title: 'Vértice' }} /><div className="featured-info"><span className="project-index">01 / 04</span><h3>Vértice<br /><em>gestão inteligente.</em></h3><p>Uma plataforma de gestão que transformou dados complexos em decisões simples — e uma experiência digital à altura.</p><div className="tag-list"><span>Estratégia</span><span>UX/UI Design</span><span>Desenvolvimento</span></div><a href="/portfolio" onClick={(event) => { event.preventDefault(); window.history.pushState({}, '', '/portfolio'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="arrow-link">Ver projeto completo <ArrowRight size={16} /></a></div></div><a href="/portfolio" className="center-link" onClick={(event) => { event.preventDefault(); window.history.pushState({}, '', '/portfolio'); window.dispatchEvent(new PopStateEvent('popstate')); }}>Explorar portfólio <ArrowRight size={16} /></a></div></section>
      <section className="section process-section" id="processo"><div className="container"><div className="section-heading split-heading"><div><SectionEyebrow>Nosso processo</SectionEyebrow><h2>Do primeiro papo<br />ao <em>resultado.</em></h2></div><p>Um processo próximo, transparente e sem complicação. Você sabe onde estamos e para onde vamos em cada etapa.</p></div><div className="process-list"><ProcessStep number="01" title="Imersão" text="A gente ouve, pergunta e entende o que torna seu negócio especial." /><ProcessStep number="02" title="Estratégia" text="Transformamos objetivos em uma direção clara para o projeto." /><ProcessStep number="03" title="Criação" text="É quando a estratégia ganha forma, cor, texto e movimento." /><ProcessStep number="04" title="Entrega" text="Seu novo site no ar, pronto para fazer a diferença." /></div></div></section>
      <section className="section about-section" id="sobre"><div className="container about-grid"><div className="about-art"><div className="about-stamp">ORTIZ<br /><span>TECH</span></div><div className="about-quote">“Design bom<br /><em>faz sentido.</em>”</div></div><div className="about-copy"><SectionEyebrow>Por que a Ortiz</SectionEyebrow><h2>Seu negócio é único.<br /><em>Seu site também.</em></h2><p>Somos um estúdio pequeno, curioso e obcecado por fazer bem feito. Acreditamos que tecnologia não precisa ser fria — e que um site pode ser, ao mesmo tempo, bonito, estratégico e humano.</p><div className="about-points"><span><Check size={14} /> Atendimento próximo</span><span><Check size={14} /> Olhar estratégico</span><span><Check size={14} /> Feito com cuidado</span><span><Check size={14} /> Resultado que importa</span></div></div></div></section>
      <section className="section faq-section"><div className="container faq-grid"><div><SectionEyebrow>Tem alguma dúvida?</SectionEyebrow><h2>Vamos deixar<br /><em>tudo claro.</em></h2><p>Se a sua pergunta não estiver aqui, chama a gente. Estamos sempre por perto.</p><WhatsAppButton label="Tirar uma dúvida" outline /></div><div className="faq-list"><Faq index={0} question="Quanto custa criar um site?" answer="Cada projeto é único, então montamos uma proposta sob medida depois de entender suas necessidades. Fale com a gente para receber uma estimativa." active={activeFaq === 0} onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)} /><Faq index={1} question="Quanto tempo leva para ficar pronto?" answer="Em média, nosso processo leva de 4 a 8 semanas, dependendo do tamanho e da complexidade do projeto." active={activeFaq === 1} onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)} /><Faq index={2} question="Eu vou conseguir atualizar o site?" answer="Sim. Entregamos tudo organizado para que você tenha autonomia, e também oferecemos acompanhamento contínuo." active={activeFaq === 2} onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)} /></div></div></section>
      <CTASection />
    </main><Footer />
  </div>;
}

function ServiceCard({ number, icon, title, text }: { number: string; icon: React.ReactNode; title: string; text: string }) { return <article className="service-card"><div className="card-number">{number}<span>{icon}</span></div><h3>{title}</h3><p>{text}</p><a href="#contato" className="card-arrow"><ArrowRight size={17} /></a></article>; }
function ProcessStep({ number, title, text }: { number: string; title: string; text: string }) { return <div className="process-step"><span className="process-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="process-arrow" size={19} /></div>; }
function Faq({ question, answer, active, onClick }: { index: number; question: string; answer: string; active: boolean; onClick: () => void }) { return <div className={`faq-item ${active ? 'faq-active' : ''}`}><button onClick={onClick}><span>{question}</span><Plus size={20} /></button>{active && <p>{answer}</p>}</div>; }
function CTASection() { return <section className="cta-section" id="contato"><div className="cta-glow" /><div className="container cta-inner"><SectionEyebrow>Pronto para começar?</SectionEyebrow><h2>Seu próximo cliente<br /><em>está procurando por você.</em></h2><p>Vamos criar uma presença digital que faça seu negócio crescer.</p><WhatsAppButton label="Quero conversar" /></div></section>; }
function Footer() { return <footer><div className="container footer-main"><div><Logo /><p>Sites com intenção<br />para negócios com visão.</p></div><div className="footer-links"><div><span>Explore</span><a href="#servicos">Serviços</a><a href="/portfolio">Portfólio</a><a href="#processo">Processo</a></div><div><span>Fale com a gente</span><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ExternalLink size={12} /></a><a href="mailto:oi@ortiztech.com.br">oi@ortiztech.com.br</a></div></div></div><div className="container footer-bottom"><span>© 2024 Ortiz Tech. Feito com intenção.</span><div><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={16} /></a><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} /></a></div></div></footer>; }

function Portfolio() { return <div className="app-shell portfolio-page"><Nav portfolio /><main><section className="portfolio-hero"><div className="container"><SectionEyebrow>Projetos selecionados</SectionEyebrow><h1>Ideias que<br /><em>ganham forma.</em></h1><p>Uma seleção de trabalhos feitos para marcas que entendem que presença é tudo.</p></div></section><section className="portfolio-grid-section"><div className="container"><div className="portfolio-toolbar"><span>06 projetos</span><span className="toolbar-line" /><span>2022 — 2024</span></div><div className="portfolio-grid">{projects.map((project, index) => <article className={`portfolio-card portfolio-card-${index % 2 === 0 ? 'tall' : 'standard'}`} key={project.title}><BrowserPreview project={project} /><div className="portfolio-card-info"><div><h2>{project.title}</h2><p>{project.category}</p></div><ArrowUpRightIcon /></div></article>)}</div></div></section><CTASection /></main><Footer /></div>; }
function ArrowUpRightIcon() { return <span className="round-arrow"><MoveUpRight size={16} /></span>; }

function App() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => { const onPopState = () => setPath(window.location.pathname); window.addEventListener('popstate', onPopState); return () => window.removeEventListener('popstate', onPopState); }, []);
  return path === '/portfolio' ? <Portfolio /> : <Home />;
}

export default App;
