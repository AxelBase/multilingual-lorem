<script lang="ts">
  import { browser } from '$app/environment';
  import { language, languageId, quantity, unit, format, variation, startWithReal } from '../stores/settings'; // Removed double slash
  import { languages } from '$lib/languages';
  import { generateText, type OutputFormat } from '$lib/generator';
  import { copyToClipboard } from '$lib/clipboard';
  import { encodeSettings } from '$lib/urlSync';

  let generated = '';
  let copying = false;
  let copied = false;

  $: {
    try {
      const options = {
        language: $language,
        quantity: $quantity,
        unit: $unit,
        format: $format as OutputFormat,
        variation: $variation,
        startWithReal: $startWithReal
      };
      generated = generateText(options);
      console.log('[+page.svelte] Text regenerated (language:', $language.name, ')');
    } catch (err) {
      console.error('[+page.svelte] Generation failed:', err);
      generated = 'Error generating text';
    }
  }

  async function copy() {
    if (!browser) return;
    try {
      copying = true;
      copied = await copyToClipboard(generated);
      console.log('[+page.svelte] Copied to clipboard:', copied);
      if (copied) setTimeout(() => copied = false, 2000);
    } catch (err) {
      console.error('[+page.svelte] Clipboard failed:', err);
    } finally {
      copying = false;
    }
  }

  function share() {
    if (!browser) return;
    try {
      const settings = {
        languageId: $languageId,
        quantity: $quantity,
        unit: $unit,
        format: $format as OutputFormat,
        variation: $variation,
        startWithReal: $startWithReal
      };
      const qs = encodeSettings(settings);
      const url = `${location.origin}${location.pathname}${qs ? '?' + qs : ''}`;
      navigator.clipboard.writeText(url);
      alert('Shareable URL copied!');
      console.log('[+page.svelte] Share URL copied:', url);
    } catch (err) {
      console.error('[+page.svelte] Share failed:', err);
    }
  }
</script>

<div class="row justify-content-center mb-5">
  <div class="col-lg-10 col-xl-9">
    
    <div class="text-center mb-4">
      <h1 class="display-5 fw-bold text-dark">Generate Localized Placeholder Text</h1>
      <p class="lead text-muted">Authentic lorem ipsum for your multilingual designs.</p>
    </div>

    <div class="card shadow-lg mx-auto generator-card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center gap-2">
          <i class="bi bi-translate text-white fs-5"></i>
          <h5 class="mb-0 text-white fw-bold">Generator Config</h5>
        </div>
        <button class="btn btn-light btn-sm rounded-pill px-3 fw-bold" on:click={share}>
          <i class="bi bi-share-fill me-1"></i> Share Config
        </button>
      </div>

      <div class="card-body p-4 p-md-5">
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <label for="lang-select" class="form-label fw-bold text-secondary text-uppercase small">Language</label>
            <select id="lang-select" class="form-select form-select-lg" bind:value={$languageId}>
              {#each languages as lang}
                <option value={lang.id}>{lang.name}</option>
              {/each}
            </select>
          </div>

          <div class="col-md-2">
            <label for="quantity-input" class="form-label fw-bold text-secondary text-uppercase small">Count</label>
            <input id="quantity-input" type="number" class="form-control form-control-lg" min="1" max="500" bind:value={$quantity} />
          </div>

          <div class="col-md-4">
            <label for="unit-select" class="form-label fw-bold text-secondary text-uppercase small">Unit</label>
            <select id="unit-select" class="form-select form-select-lg" bind:value={$unit}>
              <option value="paragraphs">Paragraphs</option>
              <option value="sentences">Sentences</option>
              <option value="words">Words</option>
            </select>
          </div>
        </div>

        <div class="row g-4 mb-4 align-items-end">
          <div class="col-md-6">
            <label for="format-select" class="form-label fw-bold text-secondary text-uppercase small">Format</label>
            <select id="format-select" class="form-select" bind:value={$format}>
              <option value="plain">Plain Text</option>
              <option value="html-p">HTML &lt;p&gt;</option>
              <option value="html-ul">HTML &lt;ul&gt;</option>
              <option value="html-ol">HTML &lt;ol&gt;</option>
              <option value="markdown">Markdown</option>
            </select>
          </div>

          <div class="col-md-6">
            <div class="p-3 bg-light rounded-4 border">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="variation" bind:checked={$variation} />
                <label class="form-check-label" for="variation">Random variation (±10–20%)</label>
              </div>
              <div class="form-check form-switch mt-2">
                <input class="form-check-input" type="checkbox" id="real" bind:checked={$startWithReal} />
                <label class="form-check-label" for="real">Start with real-looking sentence</label>
              </div>
            </div>
          </div>
        </div>

        <hr class="border-secondary opacity-10 my-4">

        <div class="mb-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h6 class="mb-0 fw-bold text-muted text-uppercase small">Preview Output</h6>
            <button class="btn btn-success rounded-pill px-4 shadow-sm" on:click={copy} disabled={copying}>
              {#if copying}
                <i class="bi bi-hourglass-split me-1"></i> Copying...
              {:else if copied}
                <i class="bi bi-check-lg me-1"></i> Copied!
              {:else}
                <i class="bi bi-clipboard me-1"></i> Copy to Clipboard
              {/if}
            </button>
          </div>
          
          <div class="position-relative">
            <pre
              class="preview p-4 rounded-4 border bg-white overflow-auto shadow-sm"
              style="max-height: 500px; direction: {$language.dir}; text-align: {$language.dir === 'rtl' ? 'right' : 'left'};"
            >{generated}</pre>
          </div>
        </div>
      </div>

      <div class="card-footer bg-light text-muted small text-center py-3 border-top-0">
        <i class="bi bi-globe me-1"></i> 15+ languages • 100% client-side • No tracking • GitHub Pages
      </div>
    </div>
  </div>
</div>

<!-- src/routes/+page.svelte – Updated About, How to Use, FAQ sections -->
<section id="about" class="container py-5 my-5">
  <div class="row justify-content-center">
    <div class="col-lg-9 text-center">
      <h2 class="fw-bold text-primary mb-4">About the Multilingual Lorem Generator</h2>
      <p class="lead fs-5 text-muted lh-lg">
        In an increasingly global web, designing with authentic multilingual placeholder text is no longer optional — it’s essential. Traditional Latin-based “Lorem Ipsum” completely fails when prototyping for Arabic, Hebrew, Korean, Japanese, Chinese, Russian, or any non-Latin script. It produces incorrect text direction, unnatural word lengths, wrong visual weight, and breaks immersion from the very first mockup.
      </p>
      <p class="fs-5 text-muted lh-lg">
        This generator was created in 2025 specifically to solve that problem. It delivers <strong>realistic, language-native placeholder text in over 15 languages</strong>, including full right-to-left (RTL) support for Arabic and Hebrew, proper punctuation, culturally accurate sentence rhythm, and correct script density. Every single word comes from actual vocabulary used in that language — never translated Latin, never fake characters.
      </p>
      <p class="fs-5 text-muted lh-lg">
        Built as a <strong>100% client-side static web app</strong> with SvelteKit and Bootstrap 5, it requires no backend, no accounts, no cookies, and no tracking of any kind. Everything happens instantly in your browser, works offline after first load, and can be deployed anywhere — GitHub Pages, Netlify, Vercel, company intranet — in seconds. The entire tool (including all language data) is under 200 KB gzipped.
      </p>
      <p class="fs-5 text-muted lh-lg">
        Whether you’re a UX designer building a Saudi Arabian e-commerce platform, a developer testing typography for a Korean startup, or an agency presenting multilingual landing pages to international clients, this tool ensures your prototypes look and feel production-ready from day one. Privacy-first, open-source (MIT), and obsessively crafted for real-world design workflows.
      </p>
      <p class="italic-note mt-4 text-muted">
        <em>Because great design deserves text that speaks the right language — even when it’s placeholder.</em>
      </p>
    </div>
  </div>
</section>

<section id="how-to" class="container py-5 my-5 bg-white rounded-5 shadow-sm">
  <div class="row justify-content-center">
    <div class="col-lg-9">
      <h2 class="fw-bold text-primary mb-5 text-center">How to Use the Generator</h2>
      <div class="row g-5">
        <div class="col-md-4 text-center">
          <div class="fs-1 text-primary mb-3"><i class="bi bi-globe2"></i></div>
          <h4 class="fw-bold">1. Choose Your Language</h4>
          <p class="text-muted lh-lg">
            Select from 15+ authentic languages including English, Latin (classic Lorem), Español, Français, Deutsch, Português (BR), Nederlands, Русский, 简体中文, 日本語, 한국어, العربية, עברית, Ελληνικά, and more. Arabic and Hebrew automatically enable proper RTL layout.
          </p>
        </div>
        <div class="col-md-4 text-center">
          <div class="fs-1 text-primary mb-3"><i class="bi bi-sliders2"></i></div>
          <h4 class="fw-bold">2. Customize Everything</h4>
          <p class="text-muted lh-lg">
            Set exact quantity (1–500), choose unit (paragraphs, sentences, or words), select output format (Plain Text, HTML &lt;p&gt;, &lt;ul&gt;, &lt;ol&gt;, or Markdown), enable ±10–20% random variation for natural feel, and toggle “Start with real-looking sentence” for extra realism on every paragraph.
          </p>
        </div>
        <div class="col-md-4 text-center">
          <div class="fs-1 text-primary mb-3"><i class="bi bi-clipboard-check"></i></div>
          <h4 class="fw-bold">3. Copy & Share Instantly</h4>
          <p class="text-muted lh-lg">
            Click “Copy to Clipboard” for perfect formatting ready to paste into Figma, Adobe XD, Webflow, email templates, or code. Use “Share URL” to generate a link that recreates your exact configuration — ideal for design reviews, client feedback, or team documentation.
          </p>
        </div>
      </div>
      <div class="text-center mt-5">
        <p class="text-muted small">
          All generation is instant and client-side · Works offline · No data ever leaves your device
        </p>
      </div>
    </div>
  </div>
</section>

<section id="faq" class="container py-5 my-5">
  <div class="row justify-content-center">
    <div class="col-lg-9">
      <h2 class="fw-bold text-primary mb-5 text-center">Frequently Asked Questions</h2>
      <div class="accordion accordion-flush" id="faqAccordion">
        <div class="accordion-item bg-transparent border-bottom">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
              Is the generated text real and readable?
            </button>
          </h2>
          <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              No — it's deliberately meaningless placeholder text, just like traditional Lorem Ipsum. It uses real words and grammar patterns from each language so it <em>looks</em> authentic, but has no actual meaning. Perfect for focusing on design rather than content.
            </div>
          </div>
        </div>

        <div class="accordion-item bg-transparent border-bottom">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
              Can I use the generated text commercially?
            </button>
          </h2>
          <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Absolutely yes. Both the tool and all generated text are released under CC0/public domain. Use freely in client work, commercial products, apps, websites, print — no attribution required.
            </div>
          </div>
        </div>

        <div class="accordion-item bg-transparent border-bottom">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
              Is any of my data collected or stored?
            </button>
          </h2>
          <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              No. 100% client-side. Nothing is sent to any server. No cookies, no analytics, no logging, no IP collection. Even URL sharing only uses query parameters — your settings never leave your browser.
            </div>
          </div>
        </div>

        <div class="accordion-item bg-transparent border-bottom">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
              Can I add my own language or customize it?
            </button>
          </h2>
          <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Yes! The entire project is open-source on GitHub (MIT license). Just add a new file in <code>/src/lib/languages/</code> with your word list and you're done. Contributions welcome!
            </div>
          </div>
        </div>

        <div class="accordion-item bg-transparent border-bottom">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
              Does it work offline or on mobile?
            </button>
          </h2>
          <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Yes and yes. After first visit, everything is cached — works completely offline. Fully responsive design works perfectly on phones and tablets.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<style>
  /* Custom refinements for the page specific elements */
  pre.preview {
    font-family: 'SF Mono', Menlo, Monaco, Consolas, "Courier New", monospace;
    font-size: 1rem;
    line-height: 1.6;
    color: #444;
  }
  
  .generator-card {
    transition: transform 0.3s ease;
  }
  
  /* Additional bubble styling for sections */
  section {
    position: relative;
  }
</style>