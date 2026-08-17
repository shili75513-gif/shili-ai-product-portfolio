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

          <div className="project-board glass">
            <div className="board-bar"><span>PORTFOLIO BOARD · 05 ITEMS</span><span>RESPONSIVE GRID</span></div>
            <div className="project-grid">
            <article className="project-card video-slot glass" aria-label="AI 生成视频作品预留位">
              <div className="project-top"><span>01 · VIDEO WORK</span><span>待接入</span></div>
              <div className="video-visual" aria-hidden="true"><span className="play">▶</span><span className="frame-code">PLACEHOLDER / 01</span></div>
              <div className="project-copy"><small>GENERATIVE MEDIA</small><h3>AI 生成视频</h3><p>预留给叙事短片、商业视觉与多模态生成作品，后续可直接替换为真实视频。</p></div>
            </article>

            <article className="project-card video-slot glass" aria-label="产品演示视频作品预留位">
              <div className="project-top"><span>02 · VIDEO WORK</span><span>待接入</span></div>
              <div className="video-visual" aria-hidden="true"><span className="play">▶</span><span className="frame-code">PLACEHOLDER / 02</span></div>
              <div className="project-copy"><small>PRODUCT STORY</small><h3>产品演示视频</h3><p>预留给产品功能、使用流程与实验影像，作为产品作品库中的持续扩展位。</p></div>
            </article>

            <article className="project-card featured inline-demo-card glass" id="live-demo">
              <div className="project-top"><span>03 · LIVE PRODUCT</span><span>LIVE</span></div>
              <div className="inline-demo">
                <div className="inline-demo-bar"><span>CONVERSATION LAB</span><span><i /> LIVE</span></div>
                <iframe src="https://udify.app/chatbot/6REmnCrTm6etK3nL" title="百货产品智能客服演示" allow="microphone;clipboard-write" />
              </div>
              <div className="project-copy"><small>RETAIL AI SERVICE</small><h3>百货产品智能客服</h3><p>面向百货消费场景的商品咨询、需求识别与多轮导购服务。</p></div>
            </article>

            <article className="project-card ai-ops-card glass">
              <div className="project-top"><span>04 · AI OPERATIONS</span><span>2024 — 2025</span></div>
              <div className="metric-visual" aria-hidden="true"><strong>3天<small>→ 8小时</small></strong><span>上新效率提升 300%</span></div>
              <div className="project-copy"><small>SHOPEE</small><h3>AI 自动化运营</h3><p>搭建内容生成、翻译、人工复检与 ERP 路由流程，带动转化提升 45%，供应链响应提速 50%。</p></div>
            </article>

            <article className="project-card foundation-card glass">
              <div className="project-top"><span>05 · DOMAIN FOUNDATION</span><span>9 YEARS</span></div>
              <div className="foundation-list">
                <span><b>南科大附属医院</b><small>复杂需求拆解 · 多方协同 · 成本模型</small></span>
                <span><b>红坳幼儿园改造</b><small>独立交付 · 证据链 · 项目经营</small></span>
                <span><b>王若飞故居陈列馆</b><small>用户动线 · 流程标准化 · 团队管理</small></span>
              </div>
              <div className="project-copy"><small>TRANSFERABLE CAPABILITIES</small><h3>复杂行业能力底座</h3><p>覆盖智慧医疗、教育空间与公共展陈等复杂场景，沉淀需求建模、流程治理与跨方交付能力。</p></div>
            </article>

            </div>
          </div>
        </div>
      </section>

      <section className="experience wrap" id="experience">
        <div className="section-head"><span>WORK EXPERIENCE</span><h2>工作经历</h2></div>
        <div className="experience-list">
          <article><span>2025.04 — NOW</span><div><h3>AI 产品 Demo 搭建与闭环验证</h3><p>使用 Cursor、V0 快速开发交互 Demo，通过 Coze 编排工作流与多 Agent 协同，把产品假设推进到可操作、可验证的原型。</p></div><b>AI 产品 / 原型 / Agent</b></article>
          <article><span>2024.10 — 2025.04</span><div><h3>AI 运营负责人 · Shopee</h3><p>搭建 AI 描述生成、翻译与人工复检工作流，并引入 ERP 自动化。产品上新由 3 天缩短至 8 小时，转化提升 45%，供应链响应提速 50%。</p></div><b>AI 运营 / 电商 / 增长</b></article>
          <div className="experience-divider"><span>PROFESSIONAL FOUNDATION</span><p>方案设计、ToB 咨询与复杂项目全流程交付经历</p></div>
          <article className="secondary-experience"><span>2024.10 — NOW</span><div><h3>独立项目顾问 · 造价与设计交付</h3><p>独立承接学校装修、市政与机电项目，覆盖清标、设计变更、现场核查、竣工图及结算编制；以证据链和流程管理保障复杂项目落地。</p></div><b>独立经营 / 流程 / 交付</b></article>
          <article className="secondary-experience"><span>2022.09 — 2024.06</span><div><h3>政企 ToB 解决方案咨询专家</h3><p>累计主导及参与 58 个园区、智慧医疗与云计算中心项目，总规模约 30 亿元；通过需求拆解、方案比选与成本模型实现 15% 至 20% 的综合成本优化。</p></div><b>解决方案 / ToB / 交付</b></article>
          <article className="secondary-experience"><span>2020.11 — 2022.08</span><div><h3>驻场项目顾问 · 造价与风险控制</h3><p>负责招投标、工程签证、设计变更与进度付款审核，优化节点执行和资料流转，项目商务交付效率提升约 20%，结算资料及价格合规率达 100%。</p></div><b>项目管理 / 风控 / 协同</b></article>
          <article className="secondary-experience"><span>2015.07 — 2020.10</span><div><h3>方案设计师 · 复杂项目解决方案</h3><p>负责 15+ 大型展馆及公共建筑项目，从甲方需求、参观动线和内容叙事，到 CAD 深化、方案汇报与现场落地；在王若飞故居陈列馆项目中管理 3 名设计师，并推动设计流程标准化。</p></div><b>用户体验 / 设计 / 标准化</b></article>
        </div>
      </section>

      <footer className="wrap glass">
        <div><span>LET&apos;S BUILD</span><h2>有值得解决的问题？<br /><a href="mailto:646146548@qq.com">一起做成产品。<Arrow /></a></h2></div>
        <div className="footer-meta"><p>期待 AI 产品经理、AI 运营、AI 解决方案与 AI 销售方向的机会，可接受全国业务挑战。</p><div className="contact-stack"><a href="mailto:646146548@qq.com">邮箱 · 646146548@qq.com</a><span>微信 · SHILI75513</span><span>公众号 · lily_75513</span></div><span>© 2026 SHI LI</span></div>
      </footer>
    </main>
  );
}
