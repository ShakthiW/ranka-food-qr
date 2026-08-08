import Image from "next/image";
import Link from "next/link";
import { menuData } from "@/lib/menuData";

const makeAnchorId = (text: string) =>
  `item-${text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`;

const storyPoints = [
  "Fresh ingredients sourced daily",
  "House-made sauces and pastry layers",
  "Warm service in a quietly luxurious room",
];

const categoryImages: Record<string, string> = {
  bread: "/category-images/Bread.png",
  buns: "/category-images/Buns.png",
  pastry: "/category-images/Pastry.png",
  sandwiches: "/category-images/sandwiches.png",
  burgers: "/category-images/burgers.png",
  submarine: "/category-images/submarine.png",
  wraps: "/category-images/wraps.png",
  croissants: "/category-images/croissants.png",
  waffles: "/category-images/waffles.png",
  drinks: "/category-images/drinks.png",
  "special-dishes": "/category-images/special-dishes.png",
  breakfast: "/category-images/breakfast.png",
  "a-la-carte": "/category-images/a-la-carte.png",
};

export default function Home() {
  return (
    <main className="home-shell">
      <div className="site-brand">
        <Image
          src="/ranka-logo-transparent.png"
          alt="Ranka Foods"
          width={720}
          height={720}
          priority
        />
      </div>
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Ranka Foods • Premium dining</p>
          <h1>Fresh comfort, plated with quiet luxury.</h1>
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
          {menuData.categories.map((category) => (
            <Link key={category.id} href={`#category-${category.id}`} className="category-card">
              {categoryImages[category.id] && (
                <span
                  className="category-card__image"
                  style={{ backgroundImage: `url(${categoryImages[category.id]})` }}
                  aria-hidden="true"
                />
              )}
              <span className="category-card__count">{category.items.length} items</span>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <span className="category-card__link">View dishes <span aria-hidden="true">↓</span></span>
            </Link>
          ))}
        </div>

        <div className="menu-board">
          {menuData.categories.map((category) => (
            <section key={category.id} id={`category-${category.id}`} className="menu-category">
              <div className="menu-category__heading">
                <div>
                  <p className="category-kicker">Menu category</p>
                  <h3>{category.name}</h3>
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

      <section className="section section-split">
        <div className="story-panel">
          <p className="eyebrow">Why guests return</p>
          <h2>Thoughtful service, rich flavor, and beautiful details.</h2>
          <p>
            Ranka Foods was built for slow lunches, late-night cravings, and celebratory
            dinners that deserve the same care as the food itself.
          </p>
          <ul className="check-list">
            {storyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="info-panel">
          <div className="info-card">
            <h3>Open daily</h3>
            <p>Monday–Thursday • 8:00 AM – 10:00 PM</p>
            <p>Friday–Sunday • 8:00 AM – 12:00 AM</p>
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
    </main>
  );
}
