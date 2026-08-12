import { getChatGPTUser } from "../../../chatgpt-auth";
import { getResumeSettings, getVisitStats, hashToken, isResumeOwner, saveResumeSettings, type ResumeSource } from "../../../../db/resume";

export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "请先登录管理账号" }, { status: 401 });
  if (!isResumeOwner(user.userId)) return Response.json({ error: "无权访问此简历后台" }, { status: 403 });
  const settings = await getResumeSettings();
  if (settings && settings.owner_user_id !== user.userId) return Response.json({ error: "无权访问此简历后台" }, { status: 403 });
  const resume = settings ? JSON.parse(settings.resume_json) : null;
  return Response.json({ resume, configured: Boolean(settings), updatedAt: settings?.updated_at ?? null, stats: await getVisitStats() });
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "请先登录管理账号" }, { status: 401 });
  if (!isResumeOwner(user.userId)) return Response.json({ error: "无权修改此简历" }, { status: 403 });
  const current = await getResumeSettings();
  if (current && current.owner_user_id !== user.userId) return Response.json({ error: "无权修改此简历" }, { status: 403 });
  const body = await request.json() as { token?: string; resume?: ResumeSource };
  if (!body.token?.trim() || body.token.trim().length < 6) return Response.json({ error: "访问令牌至少需要 6 个字符" }, { status: 400 });
  if (!body.resume?.name?.trim() || !body.resume?.experience?.trim()) return Response.json({ error: "姓名和工作经历不能为空" }, { status: 400 });
  const updatedAt = await saveResumeSettings(user.userId, await hashToken(body.token), body.resume);
  return Response.json({ ok: true, updatedAt });
}
