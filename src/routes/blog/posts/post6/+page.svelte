<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Real Sentences vs. Random Words: The “Start Real” Option | Blog</title>
  <meta name="description" content="Why starting paragraphs with authentic opening sentences dramatically improves placeholder text realism — and when to use it." />
  <meta property="og:title" content="Real Sentences vs. Random Words: The “Start Real” Option" />
  <meta property="og:description" content="Small detail. Massive impact on perceived quality." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Real Sentences vs. Random Words: The “Start Real” Option</p>
  </div>

  <article class="prose">
    <h1>Real Sentences vs. Random Words: The “Start Real” Option</h1>
    <p class="post-meta">Published: April 18, 2025</p>

    <p>Look at any real article. The first sentence of each paragraph is rarely random. It’s intentional. It hooks. It sets context.</p>

    <p>Traditional lorem ipsum starts with gibberish: “Lorem ipsum dolor sit amet…”<br>
    This tool can do better.</p>

    <p>Enable “Start paragraphs with real-looking sentence” and every paragraph begins with a hand-crafted, natural-sounding opener in the selected language.</p>

    <h2>Before vs After</h2>
    <p><strong>Without (random):</strong><br>
    “House tree car blue sky run fast dog…”</p>

    <p><strong>With “Start Real”:</strong><br>
    “In today’s fast-paced world, designers need tools that keep up. The rise of multilingual web design has changed how we approach content…”</p>

    <p>Same word pool. Totally different feel.</p>

    <h2>When to Use It</h2>
    <ul>
      <li>Client presentations (looks polished)</li>
      <li>Marketing pages and landing page mockups</li>
      <li>Portfolio case studies</li>
      <li>When stakeholders say “it looks too fake”</li>
    </ul>

    <p>When to disable it: Early wireframing, when you want pure visual rhythm without meaning.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Are the sentences translated?</summary>
      <p>No — each language has its own authentic starters, written by native patterns.</p>
    </details>
    <details>
      <summary>Can I customize them?</summary>
      <p>Yes! Edit <code>sentenceStarters</code> in any language file.</p>
    </details>

    <p class="italic-note">Great design deserves text that feels intentional — even when it’s placeholder.</p>
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