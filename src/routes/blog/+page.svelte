<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Why Authentic Multilingual Lorem Text Matters',
      description: 'Discover why real-language placeholder text is better than fake Latin for design and UX.'
    },
    {
      href: '/blog/posts/post2',
      title: '15+ Languages, One Click: How It Works',
      description: 'A deep dive into how this generator creates natural-looking text in Arabic, Korean, Hebrew, and more.'
    },
    {
      href: '/blog/posts/post3',
      title: 'RTL Support Done Right (Arabic & Hebrew)',
      description: 'How proper direction and alignment make placeholder text feel native in right-to-left languages.'
    },
    {
      href: '/blog/posts/post4',
      title: 'From Plain Text to HTML Lists: All Output Formats',
      description: 'Generate <p>, <ul>, <ol>, or Markdown — perfect for prototyping any content type.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Share Your Settings with a Single Link',
      description: 'How URL parameters let you share exact configurations — great for teams and documentation.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Real Sentences vs. Random Words: The “Start Real” Option',
      description: 'Why starting paragraphs with natural sentences improves readability in mockups.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Built for Designers: No Tracking, No Bloat, Just Text',
      description: 'Privacy-first, client-side only, and deployable anywhere — including GitHub Pages.'
    }
  ];

</script>

<svelte:head>
  <title>Blog | AxelBase Insights</title>
  <meta name="description" content="Explore insights, tutorials, and updates for the AxelBase - Multilingual Lorem Placeholder Generator." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: AxelBase Insights</h1>
    <p class="subtitle">
      Explore tutorials, updates, and best practices for the Markdown Meta Tag Tester. Learn about new features, usage tips, and more from our <a href="https://github.com/axelbase/markdown-meta-tag-tester" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--accent-secondary);
    margin-bottom: 0.75rem;
  }

  .post-description {
    color: var(--text-secondary);
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .read-more {
    color: var(--accent-primary);
    font-weight: 600;
    align-self: flex-start;
    transition: var(--transition-fast);
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }
</style>
