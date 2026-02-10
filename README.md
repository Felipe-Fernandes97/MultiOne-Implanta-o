Stack Tecnológica

Framework: Next.js 14 + TypeScript (App Router)
Estilização: Tailwind CSS + Framer Motion
Efeitos Visuais: React Bits (reactbits.dev) - Particles background, text animations
Backend/DB: Supabase (PostgreSQL + Storage para vídeos)
Ícones: Lucide React

Estrutura de Páginas
1. Landing Page (/)

Hero section com partículas animadas (React Bits Particles background)
Texto animado com efeitos do React Bits (ex: SplitText, GradientText)
Cards de navegação para as seções principais com hover animations (Framer Motion)
Tema escuro com gradientes sutis

2. Treinamentos (/treinamentos)

Grid de vídeos organizados por categorias/módulos
Player de vídeo com upload próprio (Supabase Storage)
Progresso de visualização por vídeo
Thumbnails com efeito hover

3. FAQ / Dúvidas (/duvidas)

Accordion com as dúvidas mais frequentes dos clientes
Categorias de dúvidas
Busca por palavras-chave
Animações de abertura/fechamento com Framer Motion

4. Informações da Plataforma (/plataforma)

Seções com features/funcionalidades da plataforma
Cards informativos com ícones e animações
Timeline ou steps de uso

5. Questionário (/questionario)

Quiz de 8 perguntas sobre a plataforma
Interface step-by-step (uma pergunta por vez)
Barra de progresso animada
Resultado final com nível do implantador (ex: Iniciante, Intermediário, Avançado, Expert)
Salvar respostas + resultado no Supabase

Design System (Tema Escuro)

Background: #0a0a0a / #111111
Cards: #1a1a2e com bordas sutis #16213e
Primária: Cor da marca MultiOne (azul/roxo gradiente)
Texto: #e0e0e0 / #ffffff
Acentos: Gradientes neon sutis

Banco de Dados (Supabase)
Tabelas:

quiz_responses - id, nome_implantador, email, respostas (jsonb), pontuacao, nivel, created_at
faq_items - id, categoria, pergunta, resposta, ordem, created_at
videos - id, titulo, descricao, categoria, url_video, thumbnail_url, ordem, created_at

Estrutura de Arquivos
src/
├── app/
│   ├── layout.tsx          (Layout global com tema escuro + particles)
│   ├── page.tsx            (Landing page)
│   ├── treinamentos/
│   │   └── page.tsx
│   ├── duvidas/
│   │   └── page.tsx
│   ├── plataforma/
│   │   └── page.tsx
│   └── questionario/
│       └── page.tsx
├── components/
│   ├── ui/                 (Componentes reutilizáveis)
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Card.tsx
│   │   └── Button.tsx
│   ├── ParticlesBackground.tsx
│   ├── VideoPlayer.tsx
│   ├── FaqAccordion.tsx
│   ├── QuizForm.tsx
│   └── QuizResult.tsx
├── lib/
│   ├── supabase.ts         (Client Supabase)
│   └── quiz-levels.ts      (Lógica de cálculo de nível)
└── styles/
    └── globals.css          (Tailwind base + custom dark theme)
Passos de Implementação

Setup do projeto - Criar Next.js app com TypeScript, instalar dependências (Tailwind, Framer Motion, React Bits, Supabase client, Lucide)
Tema escuro global - Configurar Tailwind dark theme, globals.css, layout base
Navbar + Footer - Navegação responsiva com links para todas as seções
Landing Page - Hero com particles + cards de navegação
Página de Treinamentos - Grid de vídeos com player
Página de Dúvidas - FAQ accordion com busca
Página Plataforma - Informações com cards animados
Questionário - Quiz step-by-step com cálculo de nível
Integração Supabase - Configurar client, criar tipos, conectar questionário
Efeitos React Bits - Adicionar particles, text animations, e outros efeitos visuais

Verificação

Rodar npm run dev e testar todas as páginas
Verificar responsividade mobile
Testar questionário completo (envio + resultado)
Validar efeitos visuais e animações
