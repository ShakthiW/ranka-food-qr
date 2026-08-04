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
            <Link className="btn btn-secondary" href="#visit">
              Book a table
            </Link>
          </div>
        </div>

      </section>

      <section id="menu" className="section">
        <div className="section-heading">
          <p className="eyebrow">Browse the menu</p>
          <h2>Choose a category to explore its dishes.</h2>
          <p>
            Select a category to jump directly to its menu, including every item and its price.
          </p>
        </div>

        <div className="card-grid">
          {menuData.categories.map((category) => (
            <Link key={category.id} href={`#category-${category.id}`} className="category-card">
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
                  <p className="eyebrow">{category.name}</p>
                  <h3>{category.description}</h3>
                </div>
              </div>

              <div className="menu-list">
                {category.items.map((item) => (
                  <article key={item.id} id={makeAnchorId(item.name)} className="menu-card">
                    <div className="menu-card__image" aria-hidden="true">
                      <span className="menu-card__placeholder">Image placeholder</span>
                    </div>
                    <div className="menu-card__body">
                      <div className="menu-card__row">
                        <div>
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                        </div>
                        <span className="menu-card__price">Rs. {item.price}</span>
                      </div>
                      <div className="menu-card__badges">
                        {item.bestseller && <span className="menu-card__badge">Bestseller</span>}
                        {item.spicy && <span className="menu-card__badge">Spicy</span>}
                        {item.vegetarian && <span className="menu-card__badge">Vegetarian</span>}
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
            <p>12 Market Street, London</p>
            <p>hello@rankafoods.com • +44 20 5555 0199</p>
          </div>
        </div>
      </section>

      <section id="visit" className="section contact-panel">
        <div className="section-heading">
          <p className="eyebrow">Reserve your moment</p>
          <h2>Come in for a refined meal, a quick brunch, or a late-night treat.</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Private dining & walk-ins welcome</h3>
            <p>
              Whether you are planning a small celebration or stopping in for a casual bite,
              the table is ready for you.
            </p>
          </div>
          <div className="contact-card contact-card--accent">
            <h3>Book your table</h3>
            <p>Call ahead for preferred seating or visit us for an effortless drop-in.</p>
            <Link className="btn btn-primary" href="mailto:hello@rankafoods.com">
              hello@rankafoods.com
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Ranka Foods. Crafted for modern comfort.</p>
        <div className="footer-links">
          <a href="#menu">Menu</a>
          <a href="#visit">Visit</a>
        </div>
      </footer>
    </main>
  );
}
