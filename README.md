MultiOne Implantação
Portal de capacitação para implantadores da plataforma MultiOne. Centraliza conteúdos sobre o sistema, dúvidas frequentes e um questionário para validar o nível de conhecimento.

Tecnologias


Framework: Next.js 16 (App Router) + TypeScript


Estilização: Tailwind CSS 4


Animações: Framer Motion 12 e GSAP 3


Efeitos visuais: WebGL com OGL (plasma animado)


Ícones: Lucide React



Estrutura do Projeto
multione-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout global
│   │   ├── page.tsx            # Landing page
│   │   ├── duvidas/            # Página de FAQ
│   │   ├── plataforma/         # Informações da plataforma
│   │   └── questionario/       # Quiz de avaliação
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── Plasma.tsx          # Fundo WebGL animado
│   │   ├── Lightning.tsx
│   │   ├── MagicBento.tsx
│   │   └── ParticlesBackground.tsx
│   └── lib/
│       └── quiz-levels.ts      # Lógica de cálculo de nível
├── public/
├── package.json
├── next.config.ts
└── tsconfig.json


Páginas
Landing Page (/)
Hero com fundo em plasma animado via WebGL.
Cards de navegação direcionando para as principais seções.
Dúvidas (/duvidas)
10 perguntas frequentes sobre a plataforma.
Busca por palavra-chave.
Filtro por categoria.
Modal com resposta completa ao selecionar uma pergunta.
Plataforma (/plataforma)
Cinco módulos principais: Atendimento, Gestão, Inteligência Artificial, Serviços e Suporte.
Cards expansíveis com subtemas e funcionalidades detalhadas de cada módulo.
Questionário (/questionario)
8 perguntas de múltipla escolha.
Interface em etapas com barra de progresso.
Resultado classificado em quatro níveis: Iniciante, Intermediário, Avançado e Expert.

Como rodar
cd multione-app

# Instalar dependências
npm install

# Iniciar ambiente de desenvolvimento
npm run dev
# Acesse: http://localhost:3000

# Gerar build de produção
npm run build
npm start


Design System
TokenValorBackground#0a0a0a / #111111Cards#0a1628Borda cards#0f2847Primária#1d4ed8 (azul)Secundária#0ea5e9 (ciano)Texto#e2e8f0 / #ffffffMuted#64748b