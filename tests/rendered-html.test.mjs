import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the product portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="zh-CN">/i);
  assert.match(html, /<title>施丽 · AI 产品经理与解决方案作品集<\/title>/i);
  assert.match(html, /把想法做成/);
  assert.match(html, /百货产品智能客服/);
  assert.match(html, /AI 自动化运营/);
  assert.match(html, /复杂行业能力底座/);
  assert.match(html, /id="mindset"/);
  assert.match(html, /id="work"/);
  assert.match(html, /id="live-demo"/);
  assert.match(html, /id="experience"/);
  assert.match(html, /https:\/\/udify\.app\/chatbot\/6REmnCrTm6etK3nL/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("keeps navigation, metadata, and responsive safeguards intact", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  for (const target of ["#top", "#mindset", "#work", "#experience", "#live-demo"]) {
    assert.match(page, new RegExp(`href=["']${target}["']|id=["']${target.slice(1)}["']`));
  }
  assert.match(page, /title="百货产品智能客服演示"/);
  assert.doesNotMatch(page, /室内智能体|户型参数|室内空间/);
  assert.match(page, /微信 · SHILI75513/);
  assert.match(page, /公众号 · lily_75513/);
  assert.match(layout, /lang="zh-CN"/);
  assert.match(css, /@media\(max-width:620px\)/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(css, /focus-visible/);
  assert.doesNotMatch(packageJson, /WRANGLER_LOG_PATH=/);
});
