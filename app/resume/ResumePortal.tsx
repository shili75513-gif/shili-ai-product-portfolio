"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import { useState } from "react";

type GeneratedResume = { name:string; contact:string; headline:string; summary:string; education:string; targetRole:string; skills:string[]; experience:string[]; achievements:string[] };
const roles = [{ id:"product", label:"产品经理", desc:"产品策略 · 用户体验 · 数据增长" },{ id:"solution", label:"解决方案", desc:"客户需求 · 方案设计 · 项目交付" },{ id:"sales", label:"销售", desc:"客户开拓 · 商业价值 · 业绩转化" }];

export default function ResumePortal() {
  const [token,setToken]=useState(""); const [role,setRole]=useState("product"); const [resume,setResume]=useState<GeneratedResume|null>(null); const [error,setError]=useState(""); const [loading,setLoading]=useState(false);
  async function generate(){setLoading(true);setError("");setResume(null);try{const response=await fetch("/api/resume/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token,role})});const data=await response.json();if(!response.ok)throw new Error(data.error);setResume(data.resume)}catch(e){setError(e instanceof Error?e.message:"生成失败，请稍后重试")}finally{setLoading(false)}}
  return <main className="resume-page">
    <header className="resume-nav glass wrap"><a href="/">← 返回作品集</a><span>DYNAMIC RESUME</span><a href="/resume/admin">简历后台</a></header>
    <section className="resume-hero wrap"><span>ROLE-ADAPTIVE PROFILE</span><h1>选择你关注的岗位，<br/>生成对应版本。</h1><p>同一份真实履历，不同的阅读重点。系统会根据目标岗位重新组织能力、经历与成果，不会添加原始简历中不存在的信息。</p></section>
    <section className="resume-generator wrap glass">
      <div className="generator-controls"><label>访问令牌<input type="text" value={token} onChange={e=>setToken(e.target.value)} placeholder="输入分享给你的文本令牌" autoComplete="off" /></label><fieldset><legend>希望了解的岗位</legend>{roles.map(item=><button type="button" key={item.id} aria-pressed={role===item.id} onClick={()=>setRole(item.id)}><b>{item.label}</b><span>{item.desc}</span></button>)}</fieldset><button className="generate-button" type="button" onClick={generate} disabled={loading||!token.trim()}>{loading?"正在组织简历...":"生成匹配简历 ↗"}</button>{error&&<p className="form-error" role="alert">{error}</p>}</div>
      <div className="generator-preview">{resume?<ResumeView resume={resume}/>:<div className="empty-preview"><span>PREVIEW AREA</span><div className="preview-lines"><i/><i/><i/><i/></div><p>验证令牌并选择岗位后，匹配简历将在这里生成。</p></div>}</div>
    </section>
  </main>
}

function ResumeView({resume}:{resume:GeneratedResume}){return <article className="generated-resume"><div className="generated-label">GENERATED FOR · {resume.targetRole}</div><header><h2>{resume.name}</h2><p>{resume.headline}</p><small>{resume.contact}</small></header><section><h3>职业摘要</h3>{resume.summary.split("\n").filter(Boolean).map((x,i)=><p key={i}>{x}</p>)}</section><section><h3>核心能力</h3><div className="resume-tags">{resume.skills.map((x,i)=><span key={i}>{x}</span>)}</div></section><section><h3>工作经历</h3><ul>{resume.experience.map((x,i)=><li key={i}>{x}</li>)}</ul></section>{resume.achievements.length>0&&<section><h3>代表成果</h3><ul>{resume.achievements.map((x,i)=><li key={i}>{x}</li>)}</ul></section>}<section><h3>教育经历</h3><p>{resume.education}</p></section><button type="button" className="print-button" onClick={()=>window.print()}>打印 / 保存为 PDF</button></article>}
