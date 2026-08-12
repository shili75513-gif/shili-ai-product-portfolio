import { env } from "cloudflare:workers";

export type ResumeSource = {
  name: string;
  contact: string;
  headline: string;
  summary: string;
  skills: string;
  experience: string;
  education: string;
  achievements: string;
};

export type ResumeSettings = {
  owner_user_id: string;
  token_hash: string;
  resume_json: string;
  updated_at: string;
};

export function isResumeOwner(userId: string) {
  return Boolean(env.RESUME_ADMIN_USER_ID) && userId === env.RESUME_ADMIN_USER_ID;
}

async function ensureSchema() {
  await env.DB.batch([
    env.DB.prepare("CREATE TABLE IF NOT EXISTS resume_settings (id INTEGER PRIMARY KEY, owner_user_id TEXT NOT NULL, token_hash TEXT NOT NULL, resume_json TEXT NOT NULL, updated_at TEXT NOT NULL)"),
    env.DB.prepare("CREATE TABLE IF NOT EXISTS resume_visits (id INTEGER PRIMARY KEY AUTOINCREMENT, role TEXT NOT NULL, visitor_id TEXT, created_at TEXT NOT NULL)"),
    env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_resume_visits_role_created_at ON resume_visits(role, created_at)"),
  ]);
}

export async function getResumeSettings(): Promise<ResumeSettings | null> {
  await ensureSchema();
  return (await env.DB.prepare("SELECT owner_user_id, token_hash, resume_json, updated_at FROM resume_settings WHERE id = 1").first<ResumeSettings>()) ?? null;
}

export async function saveResumeSettings(ownerUserId: string, tokenHash: string, resume: ResumeSource) {
  await ensureSchema();
  const now = new Date().toISOString();
  await env.DB.prepare("INSERT INTO resume_settings (id, owner_user_id, token_hash, resume_json, updated_at) VALUES (1, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET token_hash = excluded.token_hash, resume_json = excluded.resume_json, updated_at = excluded.updated_at")
    .bind(ownerUserId, tokenHash, JSON.stringify(resume), now).run();
  return now;
}

export async function recordResumeVisit(role: string, visitorId: string | null) {
  await ensureSchema();
  await env.DB.prepare("INSERT INTO resume_visits (role, visitor_id, created_at) VALUES (?, ?, ?)")
    .bind(role, visitorId, new Date().toISOString()).run();
}

export async function getVisitStats() {
  await ensureSchema();
  const result = await env.DB.prepare("SELECT role, COUNT(*) AS count FROM resume_visits GROUP BY role").all<{ role: string; count: number }>();
  return result.results;
}

export async function hashToken(token: string) {
  const bytes = new TextEncoder().encode(token.trim());
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}
