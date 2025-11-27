<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Built for Designers: No Tracking, No Bloat, Just Text | Blog</title>
  <meta name="description" content="A privacy-first, open-source, GitHub Pages-ready lorem generator built for real designers who care about performance and ethics." />
  <meta property="og:title" content="Built for Designers: No Tracking, No Bloat, Just Text" />
  <meta property="og:description" content="Zero analytics. Zero cookies. Pure utility." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Built for Designers: No Tracking, No Bloat, Just Text</p>
  </div>

  <article class="prose">
    <h1>Built for Designers: No Tracking, No Bloat, Just Text</h1>
    <p class="post-meta">Published: April 20, 2025</p>

    <p>Most “free” online tools come with a catch: they track you, inject ads, or phone home with every click.</p>

    <p>This one doesn’t.</p>

    <p>No analytics.<br>
    No cookies.<br>
    No telemetry.<br>
    No accounts.<br>
    No data collection.</p>

    <p>It’s just HTML, CSS, and TypeScript — running entirely in your browser.</p>

    <h2>Why This Matters in 2025</h2>
    <p>Privacy regulations are tightening. Users are wary. And as designers, we should lead by example.</p>

    <p>When you use this tool:</p>
    <ul>
      <li>Nothing leaves your device</li>
      <li>You can host it yourself (it’s open source)</li>
      <li>It works offline</li>
      <li>It loads in under 1 second</li>
      <li>It respects dark mode, RTL, and accessibility</li>
    </ul>

    <h2>Deploy Anywhere</h2>
    <p>Because it uses <code>@sveltejs/adapter-static</code>, you can deploy it on:</p>
    <ul>
      <li>GitHub Pages (free)</li>
      <li>Netlify</li>
      <li>Vercel</li>
      <li>Cloudflare Pages</li>
      <li>Your company intranet</li>
    </ul>

    <p>No backend. No database. No cost.</p>

    <h2>Open Source & Yours Forever</h2>
    <p>The entire project is on GitHub. Fork it. Customize it. Add your brand. Remove languages. Add new ones. It’s yours.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Is it really 100% private?</summary>
      <p>Yes. Open the dev tools → Network tab → generate text → zero requests.</p>
    </details>

    <details>
      <summary>Can I use it commercially?</summary>
      <p>Yes — MIT license. Use it for client work, agencies, or enterprise.</p>
    </details>

    <p class="italic-note">Tools should respect users. This one does.</p>
  </article>
</div>

<style>
  /* Same beautiful styles as your example */
  .post-layout { max-width: 800px; padding: 2rem 1rem 4rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: #666; }
  .breadcrumbs a { color: #0066cc; text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: #666; font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: #1a1a1a; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid #f0f0f0; padding-bottom: 0.5rem; color: #0066cc; }
  .prose ul { padding-left: 1.5rem; }
  .prose ul li::marker { color: #0066cc; }
  .prose details { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 1rem; margin: 1rem 0; }
  .prose details[open] { background: #fff; }
  .prose summary { cursor: pointer; font-weight: 600; color: #0066cc; list-style: none; }
  .prose summary::before { content: '+'; margin-right: 0.75rem; font-weight: bold; color: #0066cc; }
  .prose details[open] summary::before { content: '−'; }
  .prose .italic-note { font-style: italic; color: #666; text-align: center; margin-top: 3rem; font-size: 1.1rem; }
</style>