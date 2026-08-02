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
        <a className="brand" href="#top" aria-label="Mia's Smack Shack home">
          <span className="brand-mark">M</span>
          <span>Mia&apos;s Smack Shack</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#menu">What&apos;s stocked</a>
          <a className="nav-visit" href="#visit">Find Mia</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Main quad&apos;s tiny lunch stop</p>
          <h1>Big snack energy.<br />Right between classes.</h1>
          <p className="hero-intro">
            Swing by Mia&apos;s little convenience shop for lunch, a cold drink,
            and something sweet.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#menu">Shop the shelves</a>
            <a className="button button-secondary" href="#visit">Plan your stop</a>
          </div>

          <dl className="quick-details" aria-label="Store details">
            <div>
              <dt>Where</dt>
              <dd>Main quad</dd>
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

        <div className="storefront" aria-label="Illustration of Mia's convenience store">
          <div className="store-sign">
            <span className="sign-small">MIA&apos;S</span>
            <strong>SMACK SHACK</strong>
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
          <strong>Pick up at Room 214, 12:15–12:45 PM.</strong>
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-card">
          <div className="visit-copy">
            <p className="eyebrow">Come say hi</p>
            <h2>Your between-class pit stop.</h2>
            <p>
              Find Mia on the <strong>Main quad</strong> at lunchtime,
              Tuesday through Friday. Bring cash and an appetite.
            </p>
          </div>
          <div className="receipt" aria-label="Visit summary">
            <div className="receipt-top">SMACK SHACK</div>
            <p><span>LOCATION</span><strong>Main quad</strong></p>
            <p><span>HOURS</span><strong>Lunch, Tue–Fri</strong></p>
            <p><span>PAYMENT</span><strong>Cash only</strong></p>
            <div className="receipt-total"><span>GOOD VIBES</span><strong>FREE</strong></div>
            <small>THANK YOU! ★</small>
          </div>
        </div>
      </section>

      <footer>
        <span>Mia&apos;s Smack Shack</span>
        <span>Made for hungry people on the go.</span>
      </footer>
    </main>
  );
}
