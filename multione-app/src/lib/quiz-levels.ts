export interface QuizQuestion {
  id: number;
  pergunta: string;
  opcoes: string[];
  respostaCorreta: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    pergunta: "Qual é o primeiro passo para configurar a plataforma MultiOne?",
    opcoes: [
      "Criar um relatório",
      "Realizar o cadastro inicial do cliente",
      "Configurar integrações",
      "Enviar e-mail de boas-vindas",
    ],
    respostaCorreta: 1,
  },
  {
    id: 2,
    pergunta: "Como funciona o processo de importação de dados na plataforma?",
    opcoes: [
      "Apenas manualmente",
      "Via API REST e importação em lote por CSV",
      "Somente por e-mail",
      "Não é possível importar dados",
    ],
    respostaCorreta: 1,
  },
  {
    id: 3,
    pergunta: "Qual módulo é responsável pelo gerenciamento de usuários?",
    opcoes: [
      "Módulo Financeiro",
      "Módulo de Relatórios",
      "Módulo de Administração",
      "Módulo de Integrações",
    ],
    respostaCorreta: 2,
  },
  {
    id: 4,
    pergunta:
      "Qual é a melhor prática ao configurar permissões de acesso para um novo implantador?",
    opcoes: [
      "Dar acesso total a tudo",
      "Configurar perfis com permissões específicas por função",
      "Não configurar permissões",
      "Usar a senha do administrador",
    ],
    respostaCorreta: 1,
  },
  {
    id: 5,
    pergunta: "Como agendar treinamentos dentro da plataforma?",
    opcoes: [
      "Não é possível agendar",
      "Pelo módulo de calendário integrado",
      "Apenas por e-mail externo",
      "Ligando para o suporte",
    ],
    respostaCorreta: 1,
  },
  {
    id: 6,
    pergunta: "Qual é o processo correto para gerar relatórios de implantação?",
    opcoes: [
      "Exportar manualmente cada dado",
      "Acessar o dashboard de relatórios e selecionar os filtros desejados",
      "Solicitar ao suporte técnico",
      "Não existe essa funcionalidade",
    ],
    respostaCorreta: 1,
  },
  {
    id: 7,
    pergunta: "O que fazer quando um cliente reporta um erro durante a implantação?",
    opcoes: [
      "Ignorar o erro",
      "Reiniciar todo o processo",
      "Documentar o erro, verificar logs e escalar se necessário",
      "Pedir para o cliente resolver sozinho",
    ],
    respostaCorreta: 2,
  },
  {
    id: 8,
    pergunta: "Como validar se a implantação foi concluída com sucesso?",
    opcoes: [
      "Perguntar ao cliente se está tudo bem",
      "Executar o checklist de validação e verificar todos os módulos configurados",
      "Apenas verificar se o login funciona",
      "Não é necessário validar",
    ],
    respostaCorreta: 1,
  },
];

export function calcularNivel(pontuacao: number): {
  nivel: string;
  descricao: string;
  cor: string;
} {
  const percentual = (pontuacao / quizQuestions.length) * 100;

  if (percentual >= 90) {
    return {
      nivel: "Expert",
      descricao:
        "Você domina a plataforma! Está pronto para liderar implantações complexas.",
      cor: "#00d4ff",
    };
  } else if (percentual >= 70) {
    return {
      nivel: "Avançado",
      descricao:
        "Ótimo conhecimento! Algumas áreas podem ser aprimoradas, mas você está no caminho certo.",
      cor: "#6c63ff",
    };
  } else if (percentual >= 50) {
    return {
      nivel: "Intermediário",
      descricao:
        "Bom progresso! Revise os módulos onde errou para fortalecer seu conhecimento.",
      cor: "#ff6bcb",
    };
  } else {
    return {
      nivel: "Iniciante",
      descricao:
        "Recomendamos revisar os vídeos de treinamento para melhorar seu entendimento da plataforma.",
      cor: "#ff4444",
    };
  }
}
