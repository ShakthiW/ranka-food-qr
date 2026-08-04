import Link from "next/link";
import { menuData } from "@/lib/menuData";

const makeAnchorId = (text: string) =>
  `item-${text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`;

const metrics = [
  { value: "12+", label: "Signature Dishes", icon: "fork", href: `#${makeAnchorId(menuData.categories[0].items[0].name)}` },
  { value: "4.9★", label: "Guest Rating", icon: "star", href: `#${makeAnchorId(menuData.categories[1].items[0].name)}` },
  { value: "7 Days", label: "Open Daily", icon: "clock", href: `#${makeAnchorId(menuData.categories[8].items[0].name)}` },
];

const featuredItems = [
  menuData.categories[0].items[0],
  menuData.categories[1].items[0],
  menuData.categories[5].items[0],
];

const storyPoints = [
  "Fresh ingredients sourced daily",
  "House-made sauces and pastry layers",
  "Warm service in a quietly luxurious room",
];

export default function Home() {
  return (
    <main className="home-shell">
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
          <div className="hero-stats" aria-label="Ranka Foods highlights">
            {metrics.map((metric) => (
              <Link key={metric.label} href={metric.href} className="stat-card" aria-label={`${metric.label} - jump to menu item`}>
                <div>
                  {metric.icon === "fork" && (
                    <svg className="stat-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M7 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 8c0 2 4 2 4 6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 12v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {metric.icon === "star" && (
                    <svg className="stat-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M12 3l2.6 5.3L20 9.1l-4 3.6.9 6.2L12 17.8 7.1 18.9 8 12.7 4 9.1l5.4-.8L12 3z" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  )}
                  {metric.icon === "clock" && (
                    <svg className="stat-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>

                <div>
                  <div className="stat-value">{metric.value}</div>
                  <div className="stat-label">{metric.label}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <aside className="hero-card" aria-label="Today's signature dish">
          <div className="hero-card__top">
            <span className="pill">Signature today</span>
            <span className="pill pill-soft">Open till midnight</span>
          </div>
          <h2>Maple-glazed brunch plate</h2>
          <p>
            Tender egg, roasted greens, and house-baked toast served with citrus butter and
            a glossy finish.
          </p>
          <ul>
            <li>Chef-selected seasonal produce</li>
            <li>Hand-finished sauces and garnish</li>
            <li>Elegant plating with a warm, relaxed energy</li>
          </ul>
        </aside>
      </section>

      <section id="menu" className="section">
        <div className="section-heading">
          <p className="eyebrow">Signature selections</p>
          <h2>Seasonal favorites crafted to impress.</h2>
          <p>
            Every plate is balanced for comfort, texture, and a polished finish that feels
            indulgent from first bite to last.
          </p>
        </div>

        <div className="card-grid">
          {featuredItems.map((item) => (
            <article key={item.id} className="feature-card">
              <div className="feature-card__image" aria-hidden="true">
                <span className="feature-card__placeholder">Image placeholder</span>
              </div>
              <div className="feature-card__body">
                <div className="feature-card__meta">
                  <h3>{item.name}</h3>
                  <span>{typeof item.price === 'number' ? `Rs. ${item.price}` : item.price}</span>
                </div>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="menu-board">
          {menuData.categories.map((category) => (
            <section key={category.id} className="menu-category">
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
