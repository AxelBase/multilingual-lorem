<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>RTL Support Done Right (Arabic & Hebrew) | Blog</title>
  <meta name="description" content="Learn how proper right-to-left text handling makes Arabic and Hebrew placeholder text look native from the start." />
  <meta property="og:title" content="RTL Support Done Right (Arabic & Hebrew)" />
  <meta property="og:description" content="Most generators fail at RTL. This one gets it perfect — every time." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>RTL Support Done Right (Arabic & Hebrew)</p>
  </div>

  <article class="prose">
    <h1>RTL Support Done Right (Arabic & Hebrew)</h1>
    <p class="post-meta">Published: April 10, 2025</p>

    <p>Right-to-left (RTL) languages like Arabic and Hebrew are notoriously hard to mock up. Most placeholder generators completely ignore directionality — resulting in broken layouts that look wrong from the start.</p>

    <p>This tool doesn’t just flip the text — it does RTL right.</p>

    <h2>What Proper RTL Support Means</h2>
    <ul>
      <li><strong>Correct text direction</strong> — <code>dir="rtl"</code> applied automatically</li>
      <li><strong>Proper alignment</strong> — text aligns to the right</li>
      <li><strong>Real Arabic & Hebrew words</strong> — not Latin backwards</li>
      <li><strong>Native punctuation</strong> — Arabic comma (،) and question mark (؟)</li>
      <li><strong>Mixed content handling</strong> — numbers and English stay LTR</li>
    </ul>

    <p>When you select Arabic or Hebrew, the entire preview flips — just like a real website would.</p>

    <h2>Why This Matters</h2>
    <p>Over 400 million people speak Arabic. Another 9 million speak Hebrew. If you’re building for global users, your mockups must reflect reality.</p>

    <p>With fake Latin text flipped backwards, you’ll miss:</p>
    <ul>
      <li>Text overflow issues</li>
      <li>Icon alignment problems</li>
      <li>Navigation flow errors</li>
      <li>Visual weight imbalances</li>
    </ul>

    <p>With real RTL text, you catch these on day one.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Does it support mixed LTR/RTL content?</summary>
      <p>Yes — English words inside Arabic text stay left-to-right, just like in real browsers.</p>
    </details>
    <details>
      <summary>Can I use this for Figma?</summary>
      <p>Yes! Copy as HTML or plain text and paste into text layers.</p>
    </details>

    <p class="italic-note">Design for the world — not just for Latin script.</p>
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