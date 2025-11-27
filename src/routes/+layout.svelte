<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { language } from '../stores/settings'; // Removed .ts extension for generic import safety
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';

  // --- Theme & Language Logic ---
  $: isRtl = $language.dir === 'rtl';

  onMount(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = $language.id;
  });

  // --- Buy Me A Coffee Logic ---
  const paypalUsername = 'AxelLab427'; // Update this!
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Click Outside Action
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<svelte:head>
  <title>Multilingual Lorem Generator</title>
  <meta name="description" content="Generate authentic placeholder text in 15+ languages with full control." />
</svelte:head>

<header class="custom-navbar">
  <nav class="container nav-container">
    
    <div class="nav-left">
      <a href="{base}/" class="brand-link" aria-label="Home">
        <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="navbar-logo" />
        <span class="brand-text">AxelBase</span>
      </a>

      <div class="bmac-wrapper" use:clickOutside on:click_outside={closeDropdown}>
        <button class="bmac-button" on:click={toggleDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="coffee-icon">
            <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z" />
          </svg>
          <span class="bmac-text">Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: 10, duration: 200 }}>
            <div class="dropdown-header">Select amount:</div>
            {#each donationAmounts as amount}
              <a 
                href="https://paypal.me/{paypalUsername}/{amount}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="donation-link"
                on:click={closeDropdown}
              >
                ${amount}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav-links">
      <li><a class="nav-link-custom" href="{base}/">Home</a></li>
      <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
      <li><a class="nav-link-custom" href="{base}/#how-to">How to use</a></li>
      <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link-custom blog-highlight" href="{base}/blog">Blog</a></li>
    </ul>

  </nav>
</header>

<main class="main-content container pt-5 mt-5">
  <slot />
</main>

<footer class="custom-footer">
  <div class="container footer-content">
    <span>© {new Date().getFullYear()} AxelBase Multilingual Lorem Placeholder Generator</span>
    <div class="footer-links">
      <a href="{base}/privacy">Privacy</a>
      <span class="separator">•</span>
      <a href="{base}/terms">Terms</a>
    </div>
  </div>
</footer>

<style>
  /* --- Navbar Styles --- */
  .custom-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(255, 117, 20, 0.08);
    z-index: 1000;
    display: flex;
    align-items: center;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .brand-link {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    text-decoration: none;
    transition: transform 0.2s ease;
  }
  
  .brand-link:hover {
    transform: scale(1.02);
  }

  .navbar-logo {
    height: 40px;
    width: auto;
  }

  .brand-text {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-orange);
    letter-spacing: -0.5px;
  }

  /* --- Navigation Links --- */
  .nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }

  .nav-link-custom {
    text-decoration: none;
    color: #555;
    font-weight: 600;
    font-size: 1rem;
    position: relative;
    padding: 0.5rem 0;
    transition: color 0.3s;
  }

  .nav-link-custom::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: var(--primary-orange);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 2px;
  }

  .nav-link-custom:hover {
    color: var(--primary-orange);
  }

  .nav-link-custom:hover::after {
    width: 100%;
  }

  .blog-highlight {
    background-color: #fff0e6;
    color: var(--primary-orange);
    padding: 0.5rem 1rem;
    border-radius: 20px;
  }
  .blog-highlight::after { display: none; } /* Remove underline for bubble button */
  .blog-highlight:hover {
    background-color: var(--primary-orange);
    color: white;
    box-shadow: 0 4px 10px rgba(255, 117, 20, 0.3);
  }

  /* --- Buy Me A Coffee Button --- */
  .bmac-wrapper {
    position: relative;
  }

  .bmac-button {
    background: linear-gradient(135deg, #FF7514, #ff9d5c);
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 50px;
    font-weight: 700;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(255, 117, 20, 0.3);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .bmac-button:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 6px 20px rgba(255, 117, 20, 0.4);
  }

  .coffee-icon {
    width: 18px;
    height: 18px;
  }

  /* --- BMAC Dropdown --- */
  .bmac-dropdown {
    position: absolute;
    top: 120%;
    left: 0;
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    padding: 10px;
    width: 120px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 1001;
    border: 2px solid #fff0e6;
  }

  .dropdown-header {
    font-size: 0.75rem;
    color: #999;
    text-align: center;
    margin-bottom: 5px;
  }

  .donation-link {
    display: block;
    text-align: center;
    text-decoration: none;
    color: var(--primary-orange);
    font-weight: 700;
    padding: 8px;
    border-radius: 10px;
    transition: background 0.2s;
  }

  .donation-link:hover {
    background-color: #fff0e6;
  }

  /* --- Main Content Area --- */
  .main-content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  /* --- Footer --- */
  .custom-footer {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
    border-top: 1px solid #ffeacc;
    padding: 1rem 0;
    z-index: 900;
    box-shadow: 0 -5px 20px rgba(0,0,0,0.02);
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    color: #888;
  }

  .footer-links a {
    color: #666;
    text-decoration: none;
    transition: color 0.2s;
  }

  .footer-links a:hover {
    color: var(--primary-orange);
  }

  .separator {
    margin: 0 0.5rem;
    color: #ddd;
  }

  @media (max-width: 768px) {
    .bmac-text { display: none; } /* Hide text on small screens */
    .bmac-button { padding: 0.6rem; } /* Circular button on mobile */
    .nav-links { display: none; } /* In real app, you'd want a hamburger menu here */
  }
</style>