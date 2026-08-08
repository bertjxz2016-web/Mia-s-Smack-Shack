const products = [
  { name: "Turkey sandwich", price: "$6.00" },
  { name: "Chicken wrap", price: "$6.50" },
  { name: "Fresh fruit cup", price: "$3.50" },
  { name: "Garden salad", price: "$5.50" },
  { name: "Kettle chips", price: "$2.00" },
  { name: "Yogurt parfait", price: "$4.00" },
  { name: "Granola bar", price: "$2.25" },
  { name: "Big cookie", price: "$2.00" },
  { name: "Bottled lemonade", price: "$2.75" },
  { name: "Cold soda", price: "$2.00" },
  { name: "Bottled water", price: "$1.50" },
  { name: "Fudge brownie", price: "$2.50" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Snack Shack home">
          <span className="brand-mark">S</span>
          <span>The Snack Shack</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#menu">What&apos;s stocked</a>
          <a className="nav-visit" href="#visit">Find us</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Fast snacks on the main quad</p>
          <h1>The Snack Shack.</h1>
          <p className="hero-intro">
            Grab lunch, a cold drink, or something sweet—and get back to your day.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#menu">See the menu</a>
            <a className="button button-secondary" href="https://www.google.com/maps/search/?api=1&query=655+Reitz+Union+Drive+Gainesville+FL+32611" target="_blank" rel="noreferrer">Get directions</a>
          </div>

          <dl className="quick-details" aria-label="Store details">
            <div>
              <dt>Where</dt>
              <dd>Reitz Union</dd>
            </div>
            <div>
              <dt>When</dt>
              <dd>Lunch, Tue–Fri</dd>
            </div>
            <div>
              <dt>Pay</dt>
              <dd>Cash only</dd>
            </div>
          </dl>
        </div>

        <div className="storefront" aria-label="Illustration of The Snack Shack">
          <div className="store-sign">
            <span className="sign-small">THE</span>
            <strong>SNACK SHACK</strong>
            <span className="sign-tag">SNACKS · SIPS · LUNCH</span>
          </div>
          <div className="awning" aria-hidden="true">
            {Array.from({ length: 7 }).map((_, index) => <span key={index} />)}
          </div>
          <div className="store-window">
            <div className="window-note">OPEN FOR LUNCH</div>
            <div className="shelf shelf-one" aria-hidden="true">
              <span className="bottle yellow" /><span className="bag red" />
              <span className="can blue" /><span className="bottle green" />
            </div>
            <div className="shelf shelf-two" aria-hidden="true">
              <span className="box blue" /><span className="can yellow" />
              <span className="bag green" /><span className="box red" />
            </div>
          </div>
          <div className="store-door">
            <span>CASH</span>
            <i aria-hidden="true" />
          </div>
          <div className="counter-strip" aria-hidden="true" />
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Fresh for lunch</p>
            <h2>Today&apos;s menu</h2>
          </div>
          <p>Twelve easy picks for lunch, a snack, or something sweet.</p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div
                className={`product-photo photo-${index + 1}`}
                role="img"
                aria-label={`Photo of ${product.name}`}
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <strong>{product.price}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="pickup-banner" role="note" aria-label="Pickup information">
          <span className="pickup-label">Pickup</span>
          <strong>Quick pickup at the Reitz Union, 12:15–12:45 PM.</strong>
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-card">
          <div className="visit-copy">
            <p className="eyebrow">Come say hi</p>
            <h2>Easy to find. Easy to grab and go.</h2>
            <p>
              Find us inside the <strong>J. Wayne Reitz Union</strong> at lunchtime,
              Tuesday through Friday. Bring cash and an appetite.
            </p>
            <address>655 Reitz Union Drive<br />Gainesville, FL 32611</address>
            <a className="button button-primary directions" href="https://www.google.com/maps/search/?api=1&query=655+Reitz+Union+Drive+Gainesville+FL+32611" target="_blank" rel="noreferrer">Open in Google Maps</a>
          </div>
          <div className="receipt" aria-label="Visit summary">
            <div className="receipt-top">THE SNACK SHACK</div>
            <p><span>LOCATION</span><strong>Reitz Union</strong></p>
            <p><span>HOURS</span><strong>Lunch, Tue–Fri</strong></p>
            <p><span>PAYMENT</span><strong>Cash only</strong></p>
            <div className="receipt-total"><span>GOOD VIBES</span><strong>FREE</strong></div>
            <small>THANK YOU! ★</small>
          </div>
        </div>
      </section>

      <footer>
        <span>The Snack Shack</span>
        <span>Made for hungry people on the go.</span>
      </footer>
    </main>
  );
}
