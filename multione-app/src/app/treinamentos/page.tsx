"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, Filter, Search, X } from "lucide-react";

const categorias = ["Todos", "Introdução", "Configuração", "Avançado", "Integrações"];

const videosMock = [
  {
    id: 1,
    titulo: "Introdução à Plataforma MultiOne",
    descricao: "Visão geral da plataforma e suas funcionalidades principais.",
    categoria: "Introdução",
    thumbnail: null,
    duracao: "12:30",
  },
  {
    id: 2,
    titulo: "Cadastro Inicial do Cliente",
    descricao: "Como realizar o cadastro completo de um novo cliente.",
    categoria: "Introdução",
    thumbnail: null,
    duracao: "8:45",
  },
  {
    id: 3,
    titulo: "Configurando Permissões de Acesso",
    descricao: "Passo a passo para configurar perfis e permissões.",
    categoria: "Configuração",
    thumbnail: null,
    duracao: "15:20",
  },
  {
    id: 4,
    titulo: "Importação de Dados via CSV",
    descricao: "Como importar dados em lote utilizando arquivos CSV.",
    categoria: "Configuração",
    thumbnail: null,
    duracao: "10:15",
  },
  {
    id: 5,
    titulo: "Dashboard de Relatórios",
    descricao: "Explorando o módulo de relatórios e métricas.",
    categoria: "Avançado",
    thumbnail: null,
    duracao: "18:00",
  },
  {
    id: 6,
    titulo: "Integrações via API REST",
    descricao: "Como conectar sistemas externos à plataforma MultiOne.",
    categoria: "Integrações",
    thumbnail: null,
    duracao: "22:10",
  },
  {
    id: 7,
    titulo: "Resolução de Problemas Comuns",
    descricao: "Troubleshooting dos erros mais frequentes na implantação.",
    categoria: "Avançado",
    thumbnail: null,
    duracao: "14:30",
  },
  {
    id: 8,
    titulo: "Webhooks e Notificações",
    descricao: "Configurando webhooks para notificações automáticas.",
    categoria: "Integrações",
    thumbnail: null,
    duracao: "11:45",
  },
];

export default function TreinamentosPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [busca, setBusca] = useState("");
  const [videoSelecionado, setVideoSelecionado] = useState<number | null>(null);

  const videosFiltrados = videosMock.filter((video) => {
    const matchCategoria =
      categoriaAtiva === "Todos" || video.categoria === categoriaAtiva;
    const matchBusca =
      video.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      video.descricao.toLowerCase().includes(busca.toLowerCase());
    return matchCategoria && matchBusca;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Treinamentos</span>
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Assista aos vídeos de treinamento e domine a plataforma MultiOne.
        </p>
      </motion.div>

      {/* Filtros */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center gap-4 mb-8"
      >
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Buscar vídeo..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted focus:outline-none transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-muted" />
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                categoriaAtiva === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-card border border-card-border text-muted hover:text-foreground hover:border-primary/30"
              }`}
              style={
                categoriaAtiva === cat
                  ? { boxShadow: "0 2px 10px rgba(29, 78, 216, 0.3)" }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {videoSelecionado !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setVideoSelecionado(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl card p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoSelecionado(null)}
                className="absolute -top-3 -right-3 p-2 rounded-full bg-card border border-card-border hover:bg-primary/20 hover:border-primary/40 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="aspect-video bg-black rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <PlayCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-foreground font-medium">
                    {
                      videosMock.find((v) => v.id === videoSelecionado)?.titulo
                    }
                  </p>
                  <p className="text-sm text-muted mt-2">
                    Conecte o Supabase Storage para reproduzir vídeos
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {videosFiltrados.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setVideoSelecionado(video.id)}
            className="group cursor-pointer"
          >
            <div className="card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-card to-surface flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <PlayCircle className="w-12 h-12 text-primary/40 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                <span className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-black/70 text-xs text-white font-medium">
                  {video.duracao}
                </span>
              </div>
              <div className="p-4">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {video.categoria}
                </span>
                <h3 className="text-sm font-semibold text-foreground mt-1.5 line-clamp-2 group-hover:text-white transition-colors">
                  {video.titulo}
                </h3>
                <p className="text-xs text-muted mt-2 line-clamp-2 leading-relaxed">
                  {video.descricao}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {videosFiltrados.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted">Nenhum vídeo encontrado.</p>
        </div>
      )}
    </div>
  );
}
