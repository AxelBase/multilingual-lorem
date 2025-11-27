<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Share Your Settings with a Single Link | Blog</title>
  <meta name="description" content="How URL parameters let you share exact text configurations — perfect for design reviews, client feedback, and team collaboration." />
  <meta property="og:title" content="Share Your Settings with a Single Link" />
  <meta property="og:description" content="Generate once. Share forever. No screenshots needed." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Share Your Settings with a Single Link</p>
  </div>

  <article class="prose">
    <h1>Share Your Settings with a Single Link</h1>
    <p class="post-meta">Published: April 15, 2025</p>

    <p>You’ve just created the perfect German placeholder text: 8 paragraphs, HTML lists, with real opening sentences. Now you need to show your client.</p>

    <p>Most tools force you to take a screenshot. Not this one.</p>

    <p>Every setting — language, quantity, format, variation, even the “start with real sentence” option — is encoded directly into the URL. Click “Share URL” and copy a link that recreates your exact setup for anyone, anywhere.</p>

    <h2>How It Works</h2>
    <p>All settings are stored in clean, readable query parameters:</p>
    <pre><code>?lang=de&qty=8&unit=p&fmt=html-ul&real=1</code></pre>

    <p>Paste that link in Slack, email, Notion, or Figma comments — and the recipient sees exactly what you see. No explanation needed.</p>

    <h2>Use Cases</h2>
    <ul>
      <li>Design handoff with developers</li>
      <li>Client presentation decks</li>
      <li>Team style guide documentation</li>
      <li>Teaching web accessibility or multilingual design</li>
      <li>Sharing mockup reviews (“Use this Arabic version”)</li>
    </ul>

    <p>No more “Wait, which version was that?”</p>

    <h2>Privacy Bonus</h2>
    <p>Since everything happens client-side, your settings are never sent to a server. The URL sharing is safe, private, and instant.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Can I bookmark my favorite configs?</summary>
      <p>Yes! Bookmark the shared link — it will always regenerate the same text.</p>
    </details>
    <details>
      <summary>Do links work offline?</summary>
      <p>Yes — the app is fully static. Save the page and links still work.</p>
    </details>

    <p class="italic-note">One link. Perfect sync. Better collaboration.</p>
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