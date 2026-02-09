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
      "Se apresentar para o cliente, informando o que será feito durante a implantação",
      "Realizar o cadastro inicial do cliente",
      "Configurar integrações",
      "Enviar e-mail de boas-vindas",
    ],
    respostaCorreta: 1,
  },
  {
    id: 2,
    pergunta: "Como funciona o processo de importação de contatos na plataforma?",
    opcoes: [
      "Manualemnte ou com importação em CSV",
      "Via integração com CRM",
      "Somente por e-mail",
      "Não é possível importar dados",
    ],
    respostaCorreta: 1,
  },
  {
    id: 3,
    pergunta: "Pode ser enviado um arquivo junto com a mensagem rápida?",
    opcoes: [
      "Não, não é possível enviar arquivos",
      "Sim, é possível enviar arquivos junto com mensagens rápidas",
      "Depende do tipo de arquivo",
      "Apenas imagens podem ser enviadas com mensagens rápidas",
    ],
    respostaCorreta: 2,
  },
  {
    id: 4,
    pergunta:
      "Sobre a aba de Inteligencia Artificial, para que serve a opção de Equipes de I.A?",
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
    pergunta: "Qual o limite de arquivo para enviar dentro da plataforma?",
    opcoes: [
      "2 GB",
      "5 GB",
      "2 GB",
      "17 GB",
    ],
    respostaCorreta: 3,
  },
  {
    id: 6,
    pergunta: "Qual opção o cliente tem que selecionar para adicionar algum atendente dentro do grupo?",
    opcoes: [
      "Adicionar como um participante através da opção de informações.",
      "Adicionar como um participante através da opção de mensagens rápidas.",
      "Adicionar como um participante através da opção de contatos.",
      
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
