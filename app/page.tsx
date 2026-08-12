const Arrow = () => <span aria-hidden="true">↗</span>;

const capabilities = [
  ["01", "产品策略", "从业务目标到产品路线图，明确阶段价值与资源投入。"],
  ["02", "体验设计", "把复杂能力组织成易理解、可完成的用户流程。"],
  ["03", "数据增长", "建立指标、验证假设，并用真实反馈持续迭代。"],
  ["04", "AI 应用", "设计对话、工作流与人机协作边界，让模型成为产品能力。"],
];

export default function Home() {
  return (
    <main id="top">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <nav className="nav glass wrap" aria-label="主导航">
        <a className="brand" href="#top"><span className="brand-orb" />LIN CHE</a>
        <div className="nav-links">
          <a href="#mindset">产品能力</a>
          <a href="#work">产品作品</a>
          <a href="#experience">个人经历</a>
        </div>
        <a className="contact-link" href="mailto:hello@example.com">联系我 <Arrow /></a>
      </nav>

      <section className="hero wrap">
        <div className="availability"><i /> PRODUCT MANAGER · AVAILABLE</div>
        <h1>把想法做成<br /><span>真正的产品。</span></h1>
        <div className="hero-bottom">
          <p>我是林澈，一名专注 AI 产品与用户体验的产品经理。我从真实问题出发，连接策略、设计与技术，把模糊需求推进到可验证的产品结果。</p>
          <a className="round-action" href="#work" aria-label="查看产品作品"><span>查看作品</span><Arrow /></a>
        </div>
        <div className="product-console glass" aria-label="个人产品能力概览">
          <div className="console-top"><span>PRODUCT OPERATING SYSTEM</span><span className="live"><i /> ONLINE</span></div>
          <div className="console-grid">
            <div className="console-main">
              <span className="console-kicker">CURRENT FOCUS</span>
              <strong>AI × EXPERIENCE</strong>
              <div className="signal"><i /><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
            <div className="console-stat"><b>4+</b><span>YEARS<br />IN PRODUCT</span></div>
            <div className="console-stat"><b>12</b><span>PRODUCT<br />LAUNCHES</span></div>
            <div className="console-note"><span>从需求洞察到产品落地</span><small>Strategy / UX / Growth</small></div>
          </div>
        </div>
      </section>

      <section className="mindset wrap" id="mindset">
        <div className="section-head">
          <span>HOW I BUILD</span>
          <h2>产品不是功能集合。<br />它是一套清晰的取舍。</h2>
        </div>
        <div className="capability-grid glass">
          {capabilities.map(([num, title, desc]) => (
            <article key={num}>
              <span>{num}</span><h3>{title}</h3><p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio" id="work">
        <div className="wrap">
          <div className="section-head portfolio-head">
            <span>PRODUCT LIBRARY</span>
            <h2>持续生长的产品作品库。</h2>
            <p>不只陈列结果，也开放真实体验。这里会持续收录 AI 产品、生成式影像和新的数字实验。</p>
          </div>

          <div className="project-grid">
            <a className="project-card featured glass" href="#live-demo">
              <div className="project-top"><span>01 · LIVE PRODUCT</span><Arrow /></div>
              <div className="chat-visual" aria-hidden="true">
                <div className="bubble bot">你好，我能为你做什么？</div>
                <div className="bubble user">帮我快速找到合适的方案</div>
                <div className="bubble bot short">正在理解你的需求...</div>
              </div>
              <div className="project-copy"><small>AI CONVERSATION</small><h3>智能对话流</h3><p>从意图识别到多轮应答的客服产品体验。</p></div>
            </a>

            <article className="project-card video-card glass">
              <div className="project-top"><span>02 · NEXT DROP</span><span>COMING SOON</span></div>
              <div className="video-visual" aria-hidden="true"><div className="play">▶</div><div className="frame-code">00:18:24</div></div>
              <div className="project-copy"><small>GENERATIVE VIDEO</small><h3>生成式影像实验</h3><p>为 AI 视频、短片与动态叙事预留的作品空间。</p></div>
            </article>

            <article className="project-card future-card glass">
              <div className="project-top"><span>03 · OPEN SLOT</span><span>IN PROGRESS</span></div>
              <div className="future-visual" aria-hidden="true"><i /><i /><i /><i /></div>
              <div className="project-copy"><small>FUTURE PRODUCT</small><h3>下一个产品</h3><p>这里可以继续扩展工具、平台、增长项目或独立产品。</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="demo-section wrap" id="live-demo">
        <div className="demo-intro">
          <div><span className="demo-index">CASE 01 / AI PRODUCT</span><h2>智能对话流<br />客服产品</h2></div>
          <div className="demo-summary"><p>围绕真实客服场景设计的对话产品。通过自然语言澄清需求、收集信息并完成即时应答。</p><dl><div><dt>角色</dt><dd>产品策略 / 对话设计 / 体验验收</dd></div><div><dt>能力</dt><dd>意图识别 / 多轮对话 / 知识库</dd></div><div><dt>验证</dt><dd>解决率 / 响应速度 / 满意度</dd></div></dl></div>
        </div>
        <div className="demo-window glass">
          <div className="window-bar"><div><i /><i /><i /></div><span>CONVERSATION LAB</span><span className="window-live"><i /> LIVE DEMO</span></div>
          <div className="iframe-wrap"><iframe src="https://udify.app/chatbot/6REmnCrTm6etK3nL" title="AI 智能客服对话流演示" allow="microphone;clipboard-write" /></div>
        </div>
      </section>

      <section className="experience wrap" id="experience">
        <div className="section-head"><span>EXPERIENCE INDEX</span><h2>用结果记录经历。</h2></div>
        <div className="experience-list">
          <article><span>2024 — NOW</span><div><h3>高级产品经理 · AI 科技公司</h3><p>主导企业智能助手产品线，从产品定义推进到商业化交付。完成三个行业方案上线，核心任务完成率提升 36%。</p></div><b>AI / B2B / 商业化</b></article>
          <article><span>2022 — 2024</span><div><h3>产品经理 · 互联网平台</h3><p>负责增长与用户体验，搭建关键行为漏斗与实验机制。注册链路重构后，新用户激活率提升 21%。</p></div><b>增长 / 数据 / 实验</b></article>
        </div>
      </section>

      <footer className="wrap glass">
        <div><span>LET&apos;S BUILD</span><h2>有值得解决的问题？<br /><a href="mailto:hello@example.com">一起做成产品。<Arrow /></a></h2></div>
        <div className="footer-meta"><p>期待 AI 产品、平台产品与用户增长方向的机会。</p><a href="mailto:hello@example.com">hello@example.com</a><span>© 2026 LIN CHE</span></div>
      </footer>
    </main>
  );
}
