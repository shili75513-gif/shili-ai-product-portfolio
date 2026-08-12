const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>
);

const skills = [
  ["01", "需求洞察", "用户访谈 · 数据分析 · 机会识别"],
  ["02", "产品设计", "需求拆解 · 原型设计 · 交互体验"],
  ["03", "增长迭代", "指标体系 · A/B 测试 · 复盘迭代"],
  ["04", "协同落地", "路线图 · 项目管理 · 跨团队推进"],
];

const process = [
  ["发现", "从用户场景与业务数据中定位真问题"],
  ["定义", "明确目标、边界、指标与优先级"],
  ["交付", "串联设计、研发与运营，高质量上线"],
  ["验证", "用数据和反馈判断价值，持续迭代"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark">PM</span>
          <span>林澈 / 产品经理</span>
        </a>
        <div className="nav-links">
          <a href="#about">关于我</a>
          <a href="#work">项目作品</a>
          <a href="#experience">经历</a>
        </div>
        <a className="nav-cta" href="mailto:hello@example.com">
          和我聊聊 <Arrow diagonal />
        </a>
      </nav>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO WORK · 2026</div>
          <h1>把复杂问题，<br />做成<span>简单好用</span>的产品。</h1>
          <p className="hero-desc">你好，我是林澈，一名专注 AI 与用户体验的产品经理。我擅长在业务目标、用户价值和技术可行性之间，找到清晰的产品解法。</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#work">查看作品 <Arrow /></a>
            <a className="text-btn" href="mailto:hello@example.com">获取简历 PDF <Arrow diagonal /></a>
          </div>
        </div>
        <aside className="hero-card" aria-label="个人能力摘要">
          <div className="card-topline"><span>PRODUCT PROFILE</span><span>SHANGHAI · CN</span></div>
          <div className="avatar-block"><span>LC</span></div>
          <div className="identity">
            <div><strong>林澈</strong><small>LIN CHE</small></div>
            <span className="role-pill">产品经理</span>
          </div>
          <div className="mini-metrics">
            <div><b>4+</b><span>年产品经验</span></div>
            <div><b>12</b><span>次完整上线</span></div>
            <div><b>36%</b><span>核心指标提升</span></div>
          </div>
          <div className="card-footer"><span>AI 产品 / B 端工具 / 用户增长</span><span className="scan">⌁</span></div>
        </aside>
      </section>

      <section className="signal-bar" aria-label="擅长领域">
        <div className="signal-track"><span>AI 产品设计</span><i /> <span>用户洞察</span><i /> <span>数据驱动增长</span><i /> <span>0→1 产品落地</span><i /> <span>跨团队协作</span></div>
      </section>

      <section className="section wrap" id="about">
        <div className="section-label">01 / PRODUCT MINDSET</div>
        <div className="section-heading">
          <h2>我如何做产品</h2>
          <p>不堆功能，不凭感觉。先看见问题，再定义价值，最后用结果说话。</p>
        </div>
        <div className="skill-grid">
          {skills.map(([num, title, desc]) => (
            <article className="skill-card" key={num}>
              <span className="skill-num">{num}</span>
              <div className="skill-icon" aria-hidden="true">{num === "01" ? "◎" : num === "02" ? "◇" : num === "03" ? "↗" : "⌘"}</div>
              <h3>{title}</h3><p>{desc}</p>
            </article>
          ))}
        </div>
        <div className="process-line">
          {process.map(([title, desc], index) => (
            <div className="process-step" key={title}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <div><h3>{title}</h3><p>{desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="wrap">
          <div className="section-label light">02 / SELECTED WORK</div>
          <div className="work-heading">
            <div><h2>让产品自己说话。</h2><p>这里不是静态截图，而是一个可以直接体验的 AI 客服产品 Demo。</p></div>
            <div className="work-meta"><span>PROJECT 01</span><span>2026</span></div>
          </div>
          <article className="case-card">
            <div className="case-info">
              <div className="case-badges"><span>AI PRODUCT</span><span>0 → 1</span></div>
              <h3>智能对话流<br />客服体验设计</h3>
              <p>围绕客服场景设计的对话式产品。通过自然语言理解用户意图，以气泡对话完成问题澄清、信息收集与即时应答。</p>
              <dl>
                <div><dt>我的角色</dt><dd>产品策略 / 对话设计 / 体验验收</dd></div>
                <div><dt>核心能力</dt><dd>意图识别 / 多轮对话 / 知识库问答</dd></div>
                <div><dt>验证重点</dt><dd>问题解决率 / 响应速度 / 用户满意度</dd></div>
              </dl>
              <div className="case-note"><span>LIVE DEMO</span><p>在右侧直接发送消息，体验完整对话流程。</p></div>
            </div>
            <div className="demo-shell">
              <div className="browser-bar">
                <div className="dots"><i /><i /><i /></div>
                <span>AI 智能客服 · 在线</span>
                <span className="secure">● LIVE</span>
              </div>
              <div className="iframe-wrap">
                <iframe
                  src="https://udify.app/chatbot/6REmnCrTm6etK3nL"
                  title="AI 智能客服对话流演示"
                  allow="microphone;clipboard-write"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section wrap" id="experience">
        <div className="section-label">03 / EXPERIENCE</div>
        <div className="experience-layout">
          <div><h2>经历不是年表，<br />是解决问题的证据。</h2></div>
          <div className="timeline">
            <article><span>2024 — 至今</span><div><h3>高级产品经理 · 某 AI 科技公司</h3><p>负责企业智能助手产品线，主导从产品定义到商业化交付；推动 3 个行业方案上线，核心任务完成率提升 36%。</p><div className="tags"><i>AI Agent</i><i>B2B</i><i>商业化</i></div></div></article>
            <article><span>2022 — 2024</span><div><h3>产品经理 · 某互联网平台</h3><p>负责增长与用户体验，搭建关键行为漏斗与实验机制；通过注册链路重构将新用户激活率提升 21%。</p><div className="tags"><i>用户增长</i><i>数据分析</i><i>A/B Test</i></div></div></article>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div><span className="section-label light">LET’S BUILD SOMETHING USEFUL</span><h2>有值得解决的问题？<br /><a href="mailto:hello@example.com">我们聊聊。<Arrow diagonal /></a></h2></div>
          <div className="footer-side"><p>期待 AI 产品、平台产品与用户增长方向的机会。</p><a href="mailto:hello@example.com">hello@example.com</a><span>© 2026 LIN CHE</span></div>
        </div>
      </footer>
    </main>
  );
}
