import { createHeroCarousel } from './components/HeroCarousel.js';

const app = document.getElementById('root');
app.innerHTML = `
  <main>
    <div id="hero-root"></div>
    <section class="after-hero" aria-label="Portfolio introduction">
      <p>Selected work, case studies, and thoughtful product stories continue below.</p>
    </section>
  </main>
`;

createHeroCarousel(document.getElementById('hero-root'));
