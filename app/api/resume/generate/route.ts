import { headers } from "next/headers";
import { getResumeSettings, hashToken, recordResumeVisit, type ResumeSource } from "../../../../db/resume";

export const dynamic = "force-dynamic";

const roles = {
  product: { label: "产品经理", focus: "产品策略、用户体验与增长结果", keywords: ["产品", "用户", "需求", "增长", "数据", "迭代", "体验", "项目", "上线", "指标"] },
  solution: { label: "解决方案", focus: "客户需求、方案设计与项目交付", keywords: ["客户", "方案", "交付", "行业", "实施", "项目", "协同", "沟通", "企业", "落地"] },
  sales: { label: "销售", focus: "客户开拓、商业价值与业绩转化", keywords: ["销售", "客户", "商业", "营收", "转化", "增长", "签约", "市场", "合作", "业绩"] },
} as const;

type RoleKey = keyof typeof roles;

function rankLines(text: string, keywords: readonly string[]) {
  return text.split(/\r?\n/).map((line, index) => ({ line: line.trim(), index, score: keywords.reduce((sum, key) => sum + (line.includes(key) ? 1 : 0), 0) })).filter((item) => item.line).sort((a, b) => b.score - a.score || a.index - b.index).map((item) => item.line);
}

function generateResume(source: ResumeSource, role: RoleKey) {
  const profile = roles[role];
  const skills = rankLines(source.skills.replace(/[，、]/g, "\n"), profile.keywords);
  const experience = rankLines(source.experience, profile.keywords);
  const achievements = rankLines(source.achievements, profile.keywords);
  return { ...source, targetRole: profile.label, headline: `${profile.label}｜${source.headline}`, summary: `${source.summary}\n\n岗位匹配重点：${profile.focus}。`, skills, experience, achievements };
}

export async function POST(request: Request) {
  const body = await request.json() as { token?: string; role?: string };
  const role = body.role as RoleKey;
  if (!body.token?.trim() || !(role in roles)) return Response.json({ error: "请输入访问令牌并选择目标岗位" }, { status: 400 });
  const settings = await getResumeSettings();
  if (!settings) return Response.json({ error: "简历尚未配置" }, { status: 503 });
  if (await hashToken(body.token) !== settings.token_hash) return Response.json({ error: "访问令牌无效" }, { status: 403 });
  const requestHeaders = await headers();
  await recordResumeVisit(role, requestHeaders.get("oai-authenticated-user-id"));
  return Response.json({ resume: generateResume(JSON.parse(settings.resume_json) as ResumeSource, role) });
}
