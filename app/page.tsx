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
          <a className="brand" href="#top"><span className="brand-orb" />SHI LI</a>
        <div className="nav-links">
          <a href="#mindset">产品能力</a>
          <a href="#work">产品作品</a>
          <a href="#experience">个人经历</a>
        </div>
        <a className="contact-link" href="mailto:646146548@qq.com">联系我 <Arrow /></a>
      </nav>

      <section className="hero wrap">
        <div className="availability"><i /> AI PRODUCT · OPERATIONS · SOLUTIONS</div>
        <h1>把想法做成<br /><span>真正的产品。</span></h1>
        <div className="hero-bottom">
          <p>我是施丽，拥有 9 年政企 ToB 项目与 AIGC 自研实践的复合型产品人。我擅长把复杂业务拆解成可验证的 AI 产品、运营流程与解决方案，并用数据证明结果。</p>
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
            <div className="console-stat"><b>9</b><span>YEARS<br />IN TOB</span></div>
            <div className="console-stat"><b>58</b><span>COMPLEX<br />PROJECTS</span></div>
            <div className="console-note"><span>从行业洞察到 AI 产品落地</span><small>Product / Ops / Solution</small></div>
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
                <div className="bubble bot">您好，欢迎来到百货智能客服。</div>
                <div className="bubble user">帮我查找适合送礼的商品</div>
                <div className="bubble bot short">正在为您匹配商品与活动...</div>
              </div>
              <div className="project-copy"><small>RETAIL AI SERVICE</small><h3>百货产品智能客服</h3><p>面向百货消费场景的商品咨询、需求识别与多轮导购服务。</p></div>
            </a>

            <article className="project-card ai-ops-card glass">
              <div className="project-top"><span>02 · AI OPERATIONS</span><span>2024 — 2025</span></div>
              <div className="metric-visual" aria-hidden="true"><strong>3天<small>→ 8小时</small></strong><span>上新效率提升 300%</span></div>
              <div className="project-copy"><small>SHOPEE · THAILAND</small><h3>AI 自动化运营</h3><p>搭建内容生成、翻译、人工复检与 ERP 路由流程，带动转化提升 45%，供应链响应提速 50%。</p></div>
            </article>

            <article className="project-card foundation-card glass">
              <div className="project-top"><span>DOMAIN FOUNDATION</span><span>9 YEARS</span></div>
              <div className="foundation-list">
                <span><b>南科大附属医院</b><small>复杂需求拆解 · 多方协同 · 成本模型</small></span>
                <span><b>红坳幼儿园改造</b><small>独立交付 · 证据链 · 项目经营</small></span>
                <span><b>王若飞故居陈列馆</b><small>用户动线 · 流程标准化 · 团队管理</small></span>
              </div>
              <div className="project-copy"><small>TRANSFERABLE CAPABILITIES</small><h3>复杂行业能力底座</h3><p>传统项目仅作为 AI 产品岗位所需的业务建模、流程治理和落地能力证明。</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="demo-section wrap" id="live-demo">
        <div className="demo-intro">
          <div><span className="demo-index">CASE 01 / RETAIL AI</span><h2>百货产品<br />智能客服</h2></div>
          <div className="demo-summary"><p>围绕百货消费场景设计的对话式导购产品。通过自然语言识别商品需求、澄清预算与用途，并完成咨询应答和商品推荐。</p><dl><div><dt>角色</dt><dd>产品策略 / 对话设计 / 体验验收</dd></div><div><dt>能力</dt><dd>需求识别 / 多轮导购 / 商品知识库</dd></div><div><dt>验证</dt><dd>解决率 / 推荐准确率 / 用户满意度</dd></div></dl></div>
        </div>
        <div className="demo-window glass">
          <div className="window-bar"><div><i /><i /><i /></div><span>CONVERSATION LAB</span><span className="window-live"><i /> LIVE DEMO</span></div>
          <div className="iframe-wrap"><iframe src="https://udify.app/chatbot/6REmnCrTm6etK3nL" title="百货产品智能客服演示" allow="microphone;clipboard-write" /></div>
        </div>
      </section>

      <section className="experience wrap" id="experience">
        <div className="section-head"><span>EXPERIENCE INDEX</span><h2>用结果记录经历。</h2></div>
        <div className="experience-list">
          <article><span>2025.04 — NOW</span><div><h3>AI 产品 Demo 搭建与闭环验证</h3><p>使用 Cursor、V0 快速开发交互 Demo，通过 Coze 编排工作流与多 Agent 协同，把产品假设推进到可操作、可验证的原型。</p></div><b>AI 产品 / 原型 / Agent</b></article>
          <article><span>2024.10 — 2025.04</span><div><h3>AI 运营负责人 · Shopee 泰国市场</h3><p>搭建 AI 描述生成、翻译与人工复检工作流，并引入 ERP 自动化。产品上新由 3 天缩短至 8 小时，转化提升 45%，供应链响应提速 50%。</p></div><b>AI 运营 / 电商 / 增长</b></article>
          <article><span>2022.09 — 2024.06</span><div><h3>政企 ToB 解决方案咨询专家</h3><p>累计主导 58 个园区、智慧医疗与云计算中心项目，总预算近 30 亿元；通过方案比选与工程精算，平均实现 15% 至 20% 的降本增效。</p></div><b>解决方案 / ToB / 交付</b></article>
        </div>
      </section>

      <footer className="wrap glass">
        <div><span>LET&apos;S BUILD</span><h2>有值得解决的问题？<br /><a href="mailto:646146548@qq.com">一起做成产品。<Arrow /></a></h2></div>
        <div className="footer-meta"><p>期待 AI 产品经理、AI 运营、AI 解决方案与 AI 销售方向的机会，可接受全国业务挑战。</p><div className="contact-stack"><a href="mailto:646146548@qq.com">邮箱 · 646146548@qq.com</a><span>微信 · SHILI75513</span><span>公众号 · lily_75513</span></div><span>© 2026 SHI LI</span></div>
      </footer>
    </main>
  );
}
