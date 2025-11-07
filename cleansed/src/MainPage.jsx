import './MainPage.css';

const ritualSteps = [
  {
    title: 'Cleanse',
    copy: 'Low-foam gel removes daily build up without stripping skin of its natural barrier.',
    tag: 'Step 01',
  },
  {
    title: 'Treat',
    copy: 'Layer targeted actives tuned for your skin story—vitamin C, peptides and adaptogens.',
    tag: 'Step 02',
  },
  {
    title: 'Nourish',
    copy: 'Micro-dosed oils seal moisture in and leave a velvet finish that never feels heavy.',
    tag: 'Step 03',
  },
];

const testimonials = [
  {
    quote:
      '“My barrier felt calmer in three days. The textures feel like silk and the scent is quietly addictive.”',
    name: 'Aya, Makeup Artist',
  },
  {
    quote: '“Finally a routine that adapts with the seasons. Skin is balanced, dewy, and photo-ready.”',
    name: 'Noah, Creative Director',
  },
];

const ingredients = [
  {
    name: 'Snow Mushroom',
    detail: 'Holds 500x its weight in water to plump and drench skin instantly.',
  },
  {
    name: 'Fermented Rice',
    detail: 'Brightens tone with natural enzymes while supporting a healthy microbiome.',
  },
  {
    name: 'Amino-Peptide Complex',
    detail: 'Softens expression lines and protects collagen through the day.',
  },
  {
    name: 'Desert Algae',
    detail: 'Shields against blue light and urban pollution without a heavy film.',
  },
];

function MainPage() {
  return (
    <div className="page">
      <header>
        <nav className="top-nav">
          <div className="brand">CLEΛNSED</div>
          <ul className="nav-links">
            <li>
              <a href="#ritual">Ritual</a>
            </li>
            <li>
              <a href="#essence">Essence</a>
            </li>
            <li>
              <a href="#formulas">Formulas</a>
            </li>
            <li>
              <a href="#journal">Journal</a>
            </li>
          </ul>
          <button className="cta-button" type="button">
            Start Skin Quiz
          </button>
        </nav>

        <section className="hero" id="essence">
          <div className="hero-copy">
            <h1>Human. Minimal. Transformative care for urban skin.</h1>
            <p>
              Cleansed is a skin wellness system inspired by typology—considered, elemental, and
              responsive. Each ritual is assembled with minimalist formulas tailored to your daily
              rhythm.
            </p>
            <button className="cta-button" type="button">
              Build Your Ritual
            </button>
          </div>

          <div className="hero-card" aria-hidden>
            <div className="hero-card-content">
              <span>Edition 04</span>
              <h2>Adaptive Balance Serum</h2>
              <p>Tea Tree · Niacinamide · Prebiotic Complex</p>
              <small>98% naturally derived | refill-ready</small>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="section" id="ritual">
          <div className="section-title">The Ritual</div>
          <h2>Precision steps curated to restore your skin&apos;s quiet glow.</h2>
          <p>
            Our three-part ritual layers featherlight textures to cleanse, treat, and seal in hydration
            without overwhelming the skin. Delivered in refillable glass designed for the top shelf.
          </p>

          <div className="card-grid">
            {ritualSteps.map((step) => (
              <article className="card" key={step.title}>
                <small>{step.tag}</small>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="formulas">
          <div className="grid-two">
            <div>
              <div className="section-title">Signature Formula</div>
              <h2>A serum engineered to balance, defend, and refine.</h2>
              <p>
                Our Adaptive Balance Serum pairs clinical actives with comforting botanicals to reset
                the skin&apos;s equilibrium. Expect a refined texture, minimized congestion, and a radiant
                finish that endures.
              </p>
              <button className="cta-button" type="button">
                Discover the Serum
              </button>
            </div>
            <article className="card portrait-card">
              <small>Edition Portrait</small>
              <strong>Every bottle is traceable. Scan the base to meet the maker and harvest.</strong>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="section-title">Ingredients</div>
          <h2>Potent, minimal compositions you can read at a glance.</h2>
          <p>
            Each ingredient is sourced for efficacy and sensorial balance. Nothing more. No fillers,
            no artificial fragrance—just intentional chemistry.
          </p>

          <div className="ingredients">
            {ingredients.map((ingredient) => (
              <article className="ingredient" key={ingredient.name}>
                <span>{ingredient.name}</span>
                <p>{ingredient.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="journal">
          <div className="section-title">Voices</div>
          <h2>Stories from the Cleansed collective.</h2>

          <div className="testimonial-list">
            {testimonials.map((testimonial) => (
              <figure className="testimonial" key={testimonial.name}>
                <blockquote>{testimonial.quote}</blockquote>
                <cite>{testimonial.name}</cite>
              </figure>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="cta">
            <div className="section-title">Join us</div>
            <h2>Start your tailored ritual and receive our weekly skin brief.</h2>
            <p>
              Subscribe for early access to drops, product education, and behind-the-lab stories about
              how each formula comes to life.
            </p>
            <button className="cta-button" type="button">
              Enter the Cleansed Lab
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Cleansed. Crafted in Montreal.</div>
        <div className="footer-links">
          <a href="#ritual">Ritual</a>
          <a href="#formulas">Formulas</a>
          <a href="#journal">Journal</a>
          <a href="#">Careers</a>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
