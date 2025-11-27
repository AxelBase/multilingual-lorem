<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>15+ Languages, One Click: How It Works | Blog</title>
  <meta name="description" content="Explore the technical magic behind generating authentic placeholder text in over 15 languages instantly — all in your browser." />
  <meta property="og:title" content="15+ Languages, One Click: How It Works" />
  <meta property="og:description" content="No servers. No API calls. Just pure client-side generation of real multilingual text." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>15+ Languages, One Click: How It Works</p>
  </div>

  <article class="prose">
    <h1>15+ Languages, One Click: How It Works</h1>
    <p class="post-meta">Published: April 8, 2025</p>

    <p>You click “Korean” — and instantly, natural-looking Korean placeholder text appears. No loading. No server. How?</p>

    <p>This tool is 100% client-side. Every language’s word list, punctuation, and sentence patterns are bundled directly into the app. When you change settings, Svelte reacts instantly and regenerates text using a smart algorithm — all in your browser.</p>

    <h2>The Core Engine</h2>
    <p>At its heart is a simple but powerful generator:</p>
    <ul>
      <li>Each language has 40–60 real, common words</li>
      <li>Sentences are built with natural length variation (6–20 words)</li>
      <li>Paragraphs use 3–8 sentences with optional “real” opening lines</li>
      <li>Output supports Plain Text, HTML (&lt;p&gt;, &lt;ul&gt;, &lt;ol&gt;), and Markdown</li>
    </ul>

    <h2>Why Client-Side Only?</h2>
    <p>Most online generators send your settings to a server. This one doesn’t. That means:</p>
    <ul>
      <li>No tracking</li>
      <li>No data collection</li>
      <li>Works offline</li>
      <li>Deployable on GitHub Pages, Netlify, Vercel — anywhere</li>
      <li>Lightning fast — zero network latency</li>
    </ul>

    <p>The entire app is under 100 KB. Yes — the whole thing, including 15+ languages.</p>

    <h2>Technical Highlights</h2>
    <p>Built with SvelteKit + TypeScript:</p>
    <ul>
      <li>URL sync via query parameters</li>
      <li>Reactive stores for instant updates</li>
      <li>Proper RTL direction handling</li>
      <li>Accessible forms and copy-to-clipboard</li>
      <li>Fully static — perfect for GitHub Pages</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>Can I add my own language?</summary>
      <p>Yes! Just add a new file in <code>/lib/languages/</code> with word list and punctuation.</p>
    </details>
    <details>
      <summary>Why not use AI?</summary>
      <p>AI is slow, expensive, and requires internet. This is instant, free, and private.</p>
    </details>

    <p class="italic-note">Fast. Private. Beautiful. That’s the future of placeholder text.</p>
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