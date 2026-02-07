import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey || !supabaseUrl.startsWith("http")) {
    return null;
  }
  if (!_supabase) {
    _supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _supabase;
}

export interface QuizResponse {
  id?: string;
  nome_implantador: string;
  email: string;
  respostas: Record<string, string>;
  pontuacao: number;
  nivel: string;
  created_at?: string;
}

export interface FaqItem {
  id?: string;
  categoria: string;
  pergunta: string;
  resposta: string;
  ordem: number;
  created_at?: string;
}

export interface Video {
  id?: string;
  titulo: string;
  descricao: string;
  categoria: string;
  url_video: string;
  thumbnail_url: string;
  ordem: number;
  created_at?: string;
}
