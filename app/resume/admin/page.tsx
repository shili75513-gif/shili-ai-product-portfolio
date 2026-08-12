import { requireChatGPTUser } from "../../chatgpt-auth";
import { isResumeOwner } from "../../../db/resume";
import { notFound } from "next/navigation";
import ResumeAdmin from "./ResumeAdmin";
export const dynamic="force-dynamic";
export const metadata={title:"简历后台 · 林澈"};
export default async function AdminPage(){const user=await requireChatGPTUser("/resume/admin");if(!isResumeOwner(user.userId))notFound();return <ResumeAdmin/>}
