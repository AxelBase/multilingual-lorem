<!-- src/routes/+error.svelte   (SvelteKit's built-in 404 & error page) -->
<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 – Page Not Found | Multilingual Lorem Generator</title>
  <meta name="description" content="Oops! The page you're looking for doesn't exist. But you can still generate beautiful multilingual placeholder text!" />
  <meta property="og:title" content="404 – Page Not Found" />
  <meta property="og:description" content="Lost? No problem. Head back and generate real placeholder text in 15+ languages." />
  <meta property="og:url" content="{base}{$page.url.pathname}" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="container fade-in text-center py-5" style="max-width: 800px;">
  <div class="mb-5">
    <h1 class="display-1 fw-bold text-primary">404</h1>
    <p class="lead fs-3 text-muted">This page got lost in translation...</p>
  </div>

  <div class="bg-light rounded-4 p-5 mb-5 shadow-sm">
    <p class="mb-4">Don't worry — the generator is still here and ready to help you create authentic placeholder text in Arabic, Korean, Hebrew, Portuguese, and more.</p>
    <a href="{base}/" class="btn btn-primary btn-lg px-5">
      Back to Generator
    </a>
  </div>

  <div class="row g-4 text-start">
    <div class="col-md-6">
      <h5>Quick Links</h5>
      <ul class="list-unstyled">
        <li class="mb-2"><a href="{base}/">Home – Generate Text</a></li>
        <li class="mb-2"><a href="{base}/blog">Blog</a></li>
        <li class="mb-2"><a href="{base}/privacy">Privacy Policy</a></li>
        <li class="mb-2"><a href="{base}/terms">Terms & Conditions</a></li>
      </ul>
    </div>
    <div class="col-md-6">
      <h5>Still need help?</h5>
      <p class="small text-muted">
        If you typed the URL manually, double-check it.<br>
        If you clicked a link that brought you here, feel free to open an issue on GitHub.
      </p>
    </div>
  </div>

  <p class="italic-note mt-5 text-muted">
    <em>“Even the best URLs sometimes speak the wrong language.”</em>
  </p>
</div>

<style>
  .display-1 {
    font-size: 8rem;
    font-weight: 800;
    background: linear-gradient(90deg, #0066cc, #00bb88);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .btn-primary {
    background: linear-gradient(90deg, #0066cc, #00bb88);
    border: none;
    border-radius: 12px;
    padding: 0.75rem 2rem;
    font-weight: 600;
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,102,204,0.3);
  }
  .italic-note {
    font-style: italic;
    font-size: 1.1rem;
  }
</style>