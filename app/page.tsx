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

const indoorMapUrl =
  "https://app.mappedin.com/map/67bdc505679a9d000bfacd1d?accessible=true&floor=m_7ab1b255329ddc17";
const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=655+Reitz+Union+Drive+Gainesville+FL+32611";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mia's Smack Shack home">
          <span className="brand-mark">M</span>
          <span>Mia&apos;s Smack Shack</span>
        </a>
        <a className="header-directions" href="#directions">Directions</a>
      </header>

      <section className="intro" id="top">
        <p className="eyebrow">Today&apos;s lunch</p>
        <h1>Mia&apos;s Smack Shack</h1>
        <div className="store-facts" aria-label="Store information">
          <span><small>Where</small>Reitz Union · Room 214</span>
          <span><small>When</small>Lunch, Tue–Fri</span>
          <span><small>Pay</small>Cash only</span>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <p className="eyebrow">Available today</p>
          <h2>Today&apos;s menu</h2>
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
          <span>Pickup</span>
          <strong>Pick up at Room 214, 12:15–12:45 PM.</strong>
        </div>
      </section>

      <section className="directions-section" id="directions">
        <div>
          <p className="eyebrow">Exact pickup location</p>
          <h2>Directions</h2>
        </div>
        <div className="directions-card">
          <address>
            <strong>J. Wayne Reitz Union · Room 214</strong>
            655 Reitz Union Drive<br />
            Gainesville, FL 32611
          </address>
          <ol>
            <li>Go to the J. Wayne Reitz Union.</li>
            <li>Open the indoor map and search for <strong>Room 214</strong>.</li>
            <li>Choose your entrance, then tap <strong>Directions</strong> for the exact indoor route.</li>
          </ol>
          <div className="direction-actions">
            <a className="button button-primary" href={indoorMapUrl} target="_blank" rel="noreferrer">
              Indoor directions
            </a>
            <a className="button button-secondary" href={googleMapsUrl} target="_blank" rel="noreferrer">
              Directions to building
            </a>
          </div>
        </div>
      </section>

      <footer>Mia&apos;s Smack Shack · Lunch, Tue–Fri · Cash only</footer>
    </main>
  );
}
