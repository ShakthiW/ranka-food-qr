// Main site interactions for Ranka Foods
const siteHeader = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navOverlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-toggle__icon');
const fabStack = document.querySelector('.fab-stack');
const pageLoader = document.getElementById('page-loader');
const revealElements = document.querySelectorAll('[data-reveal]');

const getStoredTheme = () => localStorage.getItem('ranka-theme');
const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  }
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
  localStorage.setItem('ranka-theme', theme);
};

const initialTheme = getStoredTheme() || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(initialTheme);

const setActiveNav = () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    const page = href.split('/').pop() || 'index.html';
    link.classList.toggle('active', page === currentPage || (currentPage === '' && page === 'index.html'));
  });
};

const closeMobileNav = () => {
  if (mainNav) {
    mainNav.classList.remove('is-open');
  }
  if (menuToggle) {
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
  if (navOverlay) {
    navOverlay.classList.remove('is-visible');
    navOverlay.setAttribute('hidden', 'true');
  }
  document.body.classList.remove('menu-open');
};

const openMobileNav = () => {
  if (mainNav) {
    mainNav.classList.add('is-open');
  }
  if (menuToggle) {
    menuToggle.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
  }
  if (navOverlay) {
    navOverlay.classList.add('is-visible');
    navOverlay.removeAttribute('hidden');
  }
  document.body.classList.add('menu-open');
};

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.contains('is-open');
    if (isOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  if (navOverlay) {
    navOverlay.addEventListener('click', closeMobileNav);
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMobileNav();
    }
  });
}

window.addEventListener('scroll', () => {
  if (siteHeader) {
    siteHeader.classList.toggle('scrolled', window.scrollY > 20);
  }
  if (fabStack) {
    fabStack.classList.toggle('is-visible', window.scrollY > 220);
  }
});

const hideLoader = () => {
  if (!pageLoader) return;
  pageLoader.classList.add('is-hidden');
  setTimeout(() => {
    pageLoader.remove();
  }, 500);
};

const handlePageReady = () => {
  if (sessionStorage.getItem('ranka-loader-seen') === 'true') {
    hideLoader();
    return;
  }

  sessionStorage.setItem('ranka-loader-seen', 'true');

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader, { once: true });
  }
};

const initRevealAnimations = () => {
  if (!('IntersectionObserver' in window) || revealElements.length === 0) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -8% 0px'
  });

  revealElements.forEach((element) => observer.observe(element));
};

const initPageTransitions = () => {
  document.documentElement.classList.add('page-ready');
};

setActiveNav();
handlePageReady();
initRevealAnimations();
initPageTransitions();
