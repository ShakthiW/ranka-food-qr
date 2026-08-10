import Image from "next/image";
import Link from "next/link";
import SideMenuNavigation from "@/components/side-menu-navigation";
import { menuData } from "@/lib/menuData";

const makeAnchorId = (text: string) =>
  `item-${text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`;

const categoryImages: Record<string, string> = {
  "hot-drinks": "/category-images/Hot Drinks.webp",
  "milkshakes-juice-mojito": "/category-images/Milkshake.webp",
  sandwiches: "/category-images/sandwiches.webp",
  burgers: "/category-images/burgers.webp",
  submarine: "/category-images/submarine.webp",
  wraps: "/category-images/wraps.webp",
  croissants: "/category-images/croissants.webp",
  waffles: "/category-images/waffles.webp",
  drinks: "/category-images/drinks.webp",
  "special-dishes": "/category-images/special-dishes.webp",
  breakfast: "/category-images/breakfast.webp",
  "a-la-carte": "/category-images/a-la-carte.webp",
};

const drinkCategoryIds = new Set([
  "hot-drinks",
  "drinks",
  "milkshakes-juice-mojito",
]);

const orderedCategories = [...menuData.categories].sort((first, second) => {
  const order = (categoryId: string) => (drinkCategoryIds.has(categoryId) ? 1 : 0);

  return order(first.id) - order(second.id);
});

export default function Home() {
  return (
    <main id="top" className="home-shell">
      <div className="site-brand">
        <Image
          src="/ranka-logo-transparent.png"
          alt="Ranka Foods"
          width={720}
          height={720}
          priority
        />
      </div>
      <section id="hero" className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Ranka Food</p>
          <h1>Fresh Flavours For Every Craving</h1>
          <p>
            Discover an elevated café experience where brunch classics, signature burgers,
            and handcrafted drinks come together in one beautifully calm setting.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="#menu">
              Explore the menu
            </Link>
          </div>
        </div>

      </section>

      <section id="menu" className="section">
        <div className="section-heading">
          <h2>Choose a category to explore its dishes.</h2>
          <p>
            Select a category to jump directly to its menu, including every item and its price.
          </p>
        </div>

        <div className="card-grid">
          {orderedCategories.map((category) => (
            <Link key={category.id} href={`#category-${category.id}`} className="category-card">
              {categoryImages[category.id] && (
                <span
                  className="category-card__image"
                  style={{ backgroundImage: `url("${categoryImages[category.id]}")` }}
                  aria-hidden="true"
                />
              )}
              <span className="category-card__count">{category.items.length} items</span>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <span className="category-card__link">Click To View</span>
            </Link>
          ))}
        </div>

        <div className="menu-board">
          {orderedCategories.map((category) => (
            <section key={category.id} id={`category-${category.id}`} className="menu-category">
              <div className="menu-category__heading">
                <div>
                  <p className="category-kicker">Menu category</p>
                  <div className="menu-category__title-row">
                    <h3>{category.name}</h3>
                    {category.availability && (
                      <span className="menu-category__availability">
                        {category.availability}
                      </span>
                    )}
                  </div>
                  <p className="category-description">{category.description}</p>
                </div>
              </div>

              <div className="menu-list">
                {category.items.map((item) => (
                  <article key={item.id} id={makeAnchorId(item.name)} className="menu-card">
                    <div className="menu-card__body">
                      <div className="menu-card__row">
                        <div>
                          <h4>{item.name}</h4>
                        </div>
                        <span className="menu-card__price">
                          {item.price === "Price on request" ? item.price : `Rs. ${item.price}`}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section section-split section-split--info-only">
        <div className="info-panel">
          <div className="info-card">
            <h3>Open daily</h3>
            <p>Monday–Sunday • 6:30 AM – 10:30 PM</p>
          </div>
          <div className="info-card info-card--accent">
            <h3>Visit us</h3>
            <p>
              <a
                href="https://www.bing.com/maps/default.aspx?v=2&pc=FACEBK&mid=8100&where1=No.%20697%2C%20Colombo%20Road%2C%20Katunayaka%2C%20Sri%20Lanka%2C%2011450&FORM=FBKPL1&mkt=en-GB&fbclid=IwcGRvZgFleHRuA2FlbQIxMABzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEecCIyAVCUhRtv5XkdqS6TEPYwqKgWeF1-6mxjMQh8LCL-hJU-Jsx3tMraU5w_aem_8ubpVrlMxEs1u3ukNPjdfA"
                target="_blank"
                rel="noreferrer"
              >
                No. 697, Colombo Road, Katunayaka, Sri Lanka, 11450
              </a>
            </p>
            <p>rankafood@gmail.com • 0114 377 553</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Ranka Foods. Crafted for modern comfort.</p>
        <div className="footer-links">
          <a href="#menu">Menu</a>
        </div>
      </footer>

      <SideMenuNavigation />
    </main>
  );
}
