<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Multilingual Lorem Generator</title>
  <meta name="description" content="We collect nothing. Zero tracking, zero cookies, zero servers. Your text never leaves your device." />
  />
  <meta property="og:title" content="Privacy Policy — Multilingual Lorem Generator" />
  <meta property="og:description" content="100% client-side. No data collection. No analytics. Complete privacy by design." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: November 27, 2025</p>

    <p>Welcome to the <strong>Multilingual Lorem Placeholder Text Generator</strong> — a completely client-side, open-source web tool that generates authentic placeholder text in over 15 languages.</p>

    <h2>We Collect Absolutely Nothing</h2>
    <p>This tool runs <strong>100% in your browser</strong>. When you generate Korean, Arabic, or Portuguese text, <em>nothing is sent to any server</em>. No IP addresses, no browser fingerprints, no usage logs, no cookies, no localStorage persistence — <strong>zero data leaves your device</strong>.</p>

    <ul>
      <li><strong>No personal data</strong> is ever collected or stored</li>
      <li><strong>No analytics</strong> (Google Analytics, Plausible, Umami, etc.)</li>
      <li><strong>No cookies</strong> or tracking pixels</li>
      <li><strong>No server-side processing</strong> of any kind</li>
      <li><strong>No cloud storage</strong> or backend</li>
    </ul>

    <h2>How It Actually Works</h2>
    <p>All language data, word lists, punctuation rules, and generation logic are bundled directly into the app. When you change settings or click “Copy”, everything happens locally using JavaScript. Even URL sharing uses only query parameters — no data is transmitted.</p>

    <h2>Third-Party Services</h2>
    <p>There are <strong>none</strong>. We do not load external fonts, CDNs with tracking, or analytics scripts. The app is fully static and can be used offline after the first load.</p>

    <h2>Your Data Security</h2>
    <p>Because no data is transmitted or stored by us, your generated text — even if sensitive — remains completely private. You control your browser; we have no access.</p>

    <h2>Children’s Privacy</h2>
    <p>This tool is safe for all ages. No personal information is ever requested or collected.</p>

    <h2>Compliance</h2>
    <p>By collecting nothing, we are automatically compliant with <strong>GDPR</strong>, <strong>CCPA</strong>, <strong>LGPD</strong>, <strong>PIPEDA</strong>, and all global privacy laws — because there is no data to protect.</p>

    <h2>Changes to This Policy</h2>
    <p>If we ever change our privacy practices (unlikely), we will update this page with the new effective date.</p>

    <h2>Contact</h2>
    <p>Questions? Open an issue on our GitHub repository or email the maintainer.</p>

    <p class="italic-note">We believe tools should respect users from day one. That’s why we built this one with <strong>privacy by design</strong> — not as an afterthought.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; margin: 0 auto; padding: 2rem 1rem 5rem; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: #666; }
  .breadcrumbs a { color: #0066cc; text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: #666; font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
  .prose h1 { font-size: 2.8rem; margin-bottom: 0.5rem; color: #1a1a1a; }
  .prose h2 { margin-top: 2.8rem; color: #0066cc; border-bottom: 1px solid #f0f0f0; padding-bottom: 0.5rem; }
  .prose ul { padding-left: 1.6rem; margin: 1.2rem 0; }
  .prose ul li::marker { color: #0066cc; }
  .prose strong { color: #000; }
  .prose em { color: #d73a49; font-style: normal; }
  .prose .italic-note { font-style: italic; text-align: center; margin-top: 4rem; font-size: 1.1rem; color: #555; }
</style>