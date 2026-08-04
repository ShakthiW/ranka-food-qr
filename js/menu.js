const categoryFiltersDesktop = document.getElementById('desktop-category-filters');
const categoryFiltersMobile = document.getElementById('mobile-category-filters');
const menuSections = document.getElementById('menu-sections');
const searchInput = document.getElementById('menu-search');

let lightboxState = {
  isOpen: false,
  itemIndex: 0,
  items: []
};

const categoryList = menuData.categories;
let activeCategory = 'all';
let searchTerm = '';

const createFilterButton = (category, isMobile = false) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = isMobile ? 'mobile-chip' : 'sidebar-chip';
  button.textContent = category.name;
  button.dataset.category = category.id;
  if (activeCategory === category.id) {
    button.classList.add('active');
  }
  button.addEventListener('click', () => {
    activeCategory = category.id;
    renderFilters();
    renderSections();
  });
  return button;
};

const renderFilters = () => {
  if (!categoryFiltersDesktop || !categoryFiltersMobile) return;
  categoryFiltersDesktop.innerHTML = '';
  categoryFiltersMobile.innerHTML = '';

  const allButton = document.createElement('button');
  allButton.type = 'button';
  allButton.className = 'sidebar-chip';
  allButton.textContent = 'All';
  allButton.dataset.category = 'all';
  if (activeCategory === 'all') allButton.classList.add('active');
  allButton.addEventListener('click', () => {
    activeCategory = 'all';
    renderFilters();
    renderSections();
  });

  const mobileAllButton = allButton.cloneNode(true);
  mobileAllButton.className = 'mobile-chip';
  categoryFiltersDesktop.appendChild(allButton);
  categoryFiltersMobile.appendChild(mobileAllButton);

  categoryList.forEach((category) => {
    categoryFiltersDesktop.appendChild(createFilterButton(category));
    categoryFiltersMobile.appendChild(createFilterButton(category, true));
  });
};

const formatPrice = (value) => `$${Number(value).toFixed(0)}`;

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const highlightMatch = (text, query) => {
  if (!query) return escapeHtml(text);
  const safeText = escapeHtml(text);
  const escapedQuery = escapeHtml(query);
  const pattern = new RegExp(`(${escapedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig');
  return safeText.replace(pattern, '<mark>$1</mark>');
};

const openLightbox = (item) => {
  const allItems = categoryList.flatMap((category) => category.items);
  const itemIndex = allItems.findIndex((entry) => entry.id === item.id);
  if (itemIndex === -1) return;

  lightboxState = {
    isOpen: true,
    itemIndex,
    items: allItems
  };

  renderLightbox();
};

const closeLightbox = () => {
  lightboxState.isOpen = false;
  renderLightbox();
};

const renderLightbox = () => {
  let overlay = document.getElementById('menu-lightbox');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'menu-lightbox';
    overlay.className = 'lightbox';
    overlay.innerHTML = `
      <div class="lightbox__backdrop"></div>
      <div class="lightbox__dialog" role="dialog" aria-modal="true" aria-label="Food preview">
        <button class="lightbox__close" type="button" aria-label="Close preview">×</button>
        <div class="lightbox__media">
          <img src="" alt="" />
        </div>
        <div class="lightbox__content">
          <h3></h3>
          <p class="lightbox__price"></p>
          <p class="lightbox__description"></p>
          <div class="lightbox__actions">
            <button class="lightbox__btn" type="button" data-action="prev">Previous</button>
            <button class="lightbox__btn" type="button" data-action="next">Next</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('.lightbox__backdrop').addEventListener('click', closeLightbox);
    overlay.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
    overlay.querySelector('[data-action="prev"]').addEventListener('click', () => {
      lightboxState.itemIndex = (lightboxState.itemIndex - 1 + lightboxState.items.length) % lightboxState.items.length;
      renderLightbox();
    });
    overlay.querySelector('[data-action="next"]').addEventListener('click', () => {
      lightboxState.itemIndex = (lightboxState.itemIndex + 1) % lightboxState.items.length;
      renderLightbox();
    });

    document.addEventListener('keydown', (event) => {
      if (!lightboxState.isOpen) return;
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowLeft') {
        lightboxState.itemIndex = (lightboxState.itemIndex - 1 + lightboxState.items.length) % lightboxState.items.length;
        renderLightbox();
      } else if (event.key === 'ArrowRight') {
        lightboxState.itemIndex = (lightboxState.itemIndex + 1) % lightboxState.items.length;
        renderLightbox();
      }
    });
  }

  const item = lightboxState.items[lightboxState.itemIndex];
  if (!item) return;

  overlay.querySelector('.lightbox__media img').src = item.image;
  overlay.querySelector('.lightbox__media img').alt = item.name;
  overlay.querySelector('.lightbox__content h3').textContent = item.name;
  overlay.querySelector('.lightbox__price').textContent = formatPrice(item.price);
  overlay.querySelector('.lightbox__description').textContent = item.description;
  overlay.classList.toggle('is-open', lightboxState.isOpen);
};

const renderCard = (item) => {
  const article = document.createElement('article');
  article.className = 'menu-card';

  const badges = [];
  if (item.bestseller) badges.push('<span class="menu-badge">Best Seller</span>');
  if (item.vegetarian) badges.push('<span class="menu-badge menu-badge--soft">Vegetarian</span>');
  if (item.spicy) badges.push('<span class="menu-badge menu-badge--spicy">Spicy</span>');
  if (!item.available) badges.push('<span class="menu-badge menu-badge--muted">Unavailable</span>');

  const availabilityText = item.available ? 'Available now' : 'Currently unavailable';

  article.innerHTML = `
    <div class="menu-card__image-wrap">
      <img class="menu-card__image" src="${item.image}" alt="${item.name}" />
      <div class="menu-card__overlay"></div>
    </div>
    <div class="menu-card__content">
      <div class="menu-card__top-row">
        <div>
          <h4>${highlightMatch(item.name, searchTerm)}</h4>
          <p class="menu-card__category">${highlightMatch(item.category, searchTerm)}</p>
        </div>
        <span class="menu-card__price">${formatPrice(item.price)}</span>
      </div>
      <p class="menu-card__description">${highlightMatch(item.description, searchTerm)}</p>
      <div class="menu-card__badges">${badges.join('')}</div>
      <div class="menu-card__footer">
        <span class="menu-card__availability">${availabilityText}</span>
        <span class="menu-card__icons" aria-hidden="true">
          ${item.vegetarian ? '🌿' : ''}
          ${item.spicy ? '🌶️' : ''}
        </span>
      </div>
    </div>
  `;

  article.querySelector('.menu-card__image-wrap').addEventListener('click', () => openLightbox(item));
  article.querySelector('.menu-card__image').addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openLightbox(item);
    }
  });
  article.querySelector('.menu-card__image').setAttribute('tabindex', '0');

  return article;
};

const renderSections = () => {
  if (!menuSections) return;
  menuSections.innerHTML = '';

  const filteredCategories = categoryList.filter((category) => {
    const matchesCategory = activeCategory === 'all' || category.id === activeCategory;
    const matchesSearch = !searchTerm || category.items.some((item) => {
      const haystack = `${item.name} ${item.description} ${item.category} ${formatPrice(item.price)} ${item.price}`.toLowerCase();
      return haystack.includes(searchTerm);
    });
    return matchesCategory && matchesSearch;
  });

  if (!filteredCategories.length) {
    menuSections.innerHTML = '<div class="empty-state">No items found</div>';
    return;
  }

  filteredCategories.forEach((category, index) => {
    const section = document.createElement('section');
    section.className = 'menu-section';
    section.style.animationDelay = `${index * 70}ms`;

    const visibleItems = category.items.filter((item) => {
      const haystack = `${item.name} ${item.description} ${item.category} ${formatPrice(item.price)} ${item.price}`.toLowerCase();
      return !searchTerm || haystack.includes(searchTerm);
    });

    if (!visibleItems.length) return;

    const header = document.createElement('div');
    header.className = 'menu-section__header';
    header.innerHTML = `<h3>${category.name}</h3><p>${category.description}</p>`;

    const cards = document.createElement('div');
    cards.className = 'menu-cards';

    visibleItems.forEach((item) => {
      cards.appendChild(renderCard(item));
    });

    section.appendChild(header);
    section.appendChild(cards);
    menuSections.appendChild(section);
  });
};

searchInput?.addEventListener('input', (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderSections();
});

renderFilters();
renderSections();
