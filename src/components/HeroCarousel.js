import { gsap } from '../lib/gsap.js';

const scenes = [
  {
    id: 'observer',
    eyebrow: 'Scene 01 — The Observer',
    heading: 'Professional cloud decoder',
    subtext: 'I notice little things, find patterns everywhere, and occasionally turn a quiet moment into an idea.',
    labels: ['wireframe but fluffy', 'cat-shaped, obviously', 'this cloud has feedback', 'user flow, but make it sky', 'currently touching grass'],
  },
  {
    id: 'scribbler',
    eyebrow: 'Scene 02 — The Scribbler',
    heading: 'My desk: where chaos becomes clickable',
    subtext: 'Most of my ideas begin with scribbles, side notes, and a cup of coffee that got cold during a thought.',
    labels: ['Coffee First, Wireframe Later', 'A Brief History of final_final_v2', 'make button less ugly', 'ask: does user care?', 'why is this 2px off?', 'loading ideas…'],
  },
  {
    id: 'story',
    eyebrow: 'Scene 03 — The Soft Story Lover',
    heading: 'K-dramas count as empathy research',
    subtext: 'I love stories because they teach timing, feeling, and why the smallest moments often matter most.',
    labels: ['episode 14: still no confession', 'cozy mode: enabled', 'plot twist juice', 'The Fine Art of Caring Too Much'],
  },
  {
    id: 'builder',
    eyebrow: 'Scene 04 — The Builder',
    heading: 'Cute ideas. Serious follow-through.',
    subtext: 'I turn observations, emotion, and messy beginnings into thoughtful product experiences.',
    labels: ['final final real final', 'ship it, after overthinking', 'less chaos, more clarity', 'Ideas Are Cute. Execution Pays Rent.', 'Hard Work, Soft Corners', 'Every Pixel Has a Backstory'],
  },
];

const navItems = ['Work', 'Play', 'About', 'Contact'];

const label = (text, x, y, width = 176) => `
  <foreignObject x="${x}" y="${y}" width="${width}" height="58" class="scene-label-wrap">
    <div class="scene-label">${text}</div>
  </foreignObject>
`;

const cat = (x, y, scale = 1, color = '#4B3528', pose = 'loaf') => {
  const tail = pose === 'curl' ? 'M40 29c20-8 28 12 9 21' : 'M38 36c18 8 31-4 22-20';
  return `
    <g transform="translate(${x} ${y}) scale(${scale})" class="cat-doodle">
      <path d="M10 31c2-19 16-28 34-23 18 5 26 20 22 38-4 16-18 25-36 22C15 66 6 51 10 31Z" fill="${color}"/>
      <path d="M18 18 22 3l13 13M47 17 61 6l-1 18" fill="${color}"/>
      <path d="${tail}" fill="none" stroke="${color}" stroke-width="9" stroke-linecap="round"/>
      <circle cx="31" cy="31" r="2" fill="#FFF3E2"/><circle cx="48" cy="31" r="2" fill="#FFF3E2"/>
      <path d="M35 42c5 4 12 4 17-1" fill="none" stroke="#FFF3E2" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  `;
};

const flowerPatch = (x, y) => `
  <g class="field-detail" transform="translate(${x} ${y})">
    <path d="M0 24c9-23 17-24 24-1M33 25c11-28 20-24 27-2" stroke="#4B3528" stroke-width="2" fill="none" stroke-linecap="round" opacity=".35"/>
    <circle cx="3" cy="12" r="4" fill="#FF8FC7"/><circle cx="25" cy="11" r="4" fill="#FFD84D"/><circle cx="58" cy="13" r="4" fill="#B6A4FF"/>
  </g>
`;

function observer(labels) {
  return `
    <svg viewBox="0 0 980 470" role="img" aria-label="Dreamy meadow and mountain scene with a designer cloud watching with cats" class="scene-svg scene-observer">
      <defs>
        <filter id="softShadowObserver" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#4B3528" flood-opacity=".16"/></filter>
        <linearGradient id="observerSky" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#8bd4ff" stop-opacity=".46"/><stop offset="1" stop-color="#FFD84D" stop-opacity=".04"/></linearGradient>
      </defs>
      <rect width="980" height="470" fill="url(#observerSky)" opacity=".62"/>
      <path class="soft-blob" d="M83 328C151 230 226 149 295 170c54 17 74 80 124 75 57-6 84-96 156-92 74 4 102 102 168 118 47 11 94-20 147-52 28 55 42 111 42 168H45c4-19 16-39 38-59Z" fill="#B6A4FF" opacity=".38"/>
      <path d="M0 352c95-79 206-81 310-35 92 40 162 18 238-10 136-51 266-34 432 42v121H0Z" fill="#7BC96F" opacity=".95"/>
      <path d="M0 387c112-42 223-37 324 5 126 53 241 19 344-20 111-42 214-28 312 31v67H0Z" fill="#B9EBCB" opacity=".68"/>
      <g class="cloud-group painter-clouds" filter="url(#softShadowObserver)">
        <path d="M110 106c8-36 48-58 84-45 20-31 76-26 89 13 43-10 80 16 78 52-2 34-33 55-81 54H135c-52 0-83-22-81-55 1-20 21-34 56-19Z" fill="#FFF9EE"/>
        <path d="M518 99c14-50 76-69 121-39 28-37 95-20 103 32 58-6 98 30 92 75-5 41-47 63-107 58H535c-54-3-86-29-79-65 4-25 27-46 62-61Z" fill="#FFF9EE"/>
        <path d="M702 79c36 27 49 64 26 95" stroke="#B6A4FF" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>
      </g>
      <g filter="url(#softShadowObserver)">
        <path d="M403 333c38-37 104-39 165-12 26 12 49 16 76 13-14 39-55 61-126 62-74 1-121-19-115-63Z" fill="#FF8FC7"/>
        <path d="M455 304c18-27 55-29 70-3 13 22-11 45-38 41-25-3-45-19-32-38Z" fill="#4B3528"/>
        <path d="M520 339c48 19 91 14 126-17" stroke="#4B3528" stroke-width="18" fill="none" stroke-linecap="round"/>
        <path d="M377 392c71 14 170 11 250-7" stroke="#233B5D" stroke-width="5" fill="none" stroke-linecap="round" opacity=".42"/>
      </g>
      ${cat(210, 348, .9, '#4B3528')}${cat(690, 350, .78, '#233B5D', 'curl')}
      ${flowerPatch(120, 385)}${flowerPatch(790, 372)}${flowerPatch(312, 402)}
      ${labels.map((text, index) => label(text, [82, 544, 618, 300, 648][index], [49, 47, 154, 210, 306][index], [178, 172, 184, 184, 176][index])).join('')}
      <path class="hand-line" d="M263 178c35 31 78 29 119-7" stroke="#4B3528" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="5 12" opacity=".36"/>
    </svg>
  `;
}

function scribbler(labels) {
  return `
    <svg viewBox="0 0 980 470" role="img" aria-label="Layered cozy desk world with coffee, books, plant, notes, lamp, and cat" class="scene-svg scene-scribbler">
      <defs><filter id="deskShadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#4B3528" flood-opacity=".16"/></filter><radialGradient id="lampGlow" cx="70%" cy="19%" r="48%"><stop stop-color="#FFD84D" stop-opacity=".62"/><stop offset="1" stop-color="#FFD84D" stop-opacity="0"/></radialGradient></defs>
      <rect width="980" height="470" fill="#FFF3E2" opacity=".34"/><circle cx="701" cy="92" r="184" fill="url(#lampGlow)"/>
      <path class="soft-blob" d="M101 303c20-101 94-160 198-130 93 27 132-61 228-38 101 24 93 128 189 145 66 12 111-12 172-39 20 66 12 124-24 174H113c-35-28-38-65-12-112Z" fill="#B9EBCB" opacity=".58"/>
      <g filter="url(#deskShadow)">
        <path d="M104 332c126-48 264-51 420-22 130 24 224 19 354-13 28 53 16 98-39 121H142c-52-18-65-46-38-86Z" fill="#ECA46F"/>
        <path d="M122 343c142 26 302 24 448 4 126-18 207-25 293 1" stroke="#FFF3E2" stroke-width="5" fill="none" opacity=".52"/>
      </g>
      <g class="desk-wall" opacity=".95">
        <rect x="119" y="105" width="104" height="116" rx="24" fill="#B6A4FF" opacity=".58" transform="rotate(-6 171 163)"/>
        <rect x="653" y="94" width="112" height="88" rx="22" fill="#FFD84D" opacity=".74" transform="rotate(5 709 138)"/>
        <path d="M777 83c49 40 61 87 36 143" stroke="#4B3528" stroke-width="5" fill="none" stroke-linecap="round" opacity=".25"/>
      </g>
      <g filter="url(#deskShadow)">
        <rect x="345" y="160" width="258" height="174" rx="28" fill="#FFF9EE" transform="rotate(-2 474 247)"/>
        <path d="M384 204c51-14 106-15 166-3M384 246c46-8 91-6 135 5M391 286c40 13 87 10 142-10" stroke="#233B5D" stroke-width="6" fill="none" stroke-linecap="round" opacity=".62"/>
        <path d="M548 167c-17 55-12 106 16 155" stroke="#FF8FC7" stroke-width="4" fill="none" stroke-linecap="round" opacity=".75"/>
      </g>
      <g filter="url(#deskShadow)">
        <rect x="237" y="283" width="138" height="36" rx="10" fill="#233B5D" transform="rotate(-7 306 301)"/>
        <rect x="249" y="251" width="143" height="38" rx="10" fill="#69C7FF" transform="rotate(-7 321 270)"/>
        <rect x="262" y="221" width="132" height="38" rx="10" fill="#FF8FC7" transform="rotate(-7 328 240)"/>
      </g>
      <g filter="url(#deskShadow)">
        <path d="M708 291h82v48c0 24-20 43-44 43h-2c-24 0-44-20-44-43v-40c0-5 4-8 8-8Z" fill="#FFF9EE"/>
        <path d="M790 309c42-1 43 52 0 51" stroke="#4B3528" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M724 276c-14-15 15-29 1-44M754 273c-14-15 15-29 1-44" stroke="#FF6B5F" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7"/>
      </g>
      <g class="plant" filter="url(#deskShadow)"><path d="M817 326c-44-74 17-102 45-43 9-78 82-72 70 38" fill="#7BC96F"/><rect x="818" y="324" width="96" height="58" rx="18" fill="#FFB184"/></g>
      ${cat(126, 305, .9, '#4B3528', 'curl')}
      ${labels.map((text, index) => label(text, [350, 140, 616, 588, 386, 700][index], [107, 235, 194, 252, 338, 312][index], [196, 200, 166, 166, 166, 156][index])).join('')}
    </svg>
  `;
}

function story(labels) {
  return `
    <svg viewBox="0 0 980 470" role="img" aria-label="Cozy cinematic evening K-drama setup with laptop, blanket, lamp, mug, pillows, and cat" class="scene-svg scene-story">
      <defs><filter id="storyShadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="22" stdDeviation="20" flood-color="#233B5D" flood-opacity=".20"/></filter><radialGradient id="eveningLamp" cx="17%" cy="26%" r="42%"><stop stop-color="#FFD84D" stop-opacity=".78"/><stop offset="1" stop-color="#FFD84D" stop-opacity="0"/></radialGradient><linearGradient id="night" x1="0" x2="1"><stop stop-color="#B6A4FF"/><stop offset="1" stop-color="#233B5D" stop-opacity=".9"/></linearGradient></defs>
      <rect width="980" height="470" fill="url(#night)" opacity=".82"/><circle cx="151" cy="120" r="170" fill="url(#eveningLamp)"/>
      <path class="soft-blob" d="M117 308c34-63 104-95 184-78 83 18 107-37 178-25 75 13 91 86 163 92 66 6 101-39 164-31 61 8 89 63 69 112H114c-24-22-22-45 3-70Z" fill="#FF8FC7" opacity=".45"/>
      <g filter="url(#storyShadow)">
        <path d="M135 313c77-70 188-77 323-35 111 34 218 32 340-10 48 54 45 111-7 151H151c-58-25-63-60-16-106Z" fill="#FFB184"/>
        <path d="M174 304c64-41 158-30 271 31 78 42 158 42 276 1 38 28 49 54 32 77H172c-44-23-43-59 2-109Z" fill="#FFF3E2" opacity=".88"/>
        <path d="M164 348c135 59 265 61 390 10 72-29 132-35 203-14" stroke="#FF8FC7" stroke-width="12" fill="none" stroke-linecap="round" opacity=".6"/>
      </g>
      <g filter="url(#storyShadow)">
        <rect x="374" y="135" width="250" height="150" rx="22" fill="#233B5D"/>
        <rect x="397" y="155" width="204" height="96" rx="16" fill="#69C7FF" opacity=".86"/>
        <path d="M443 198c18-37 56-38 72-2 20-36 58-29 67 7" stroke="#FFF3E2" stroke-width="8" fill="none" stroke-linecap="round" opacity=".8"/>
        <path d="M452 226c45 23 88 20 130-8" stroke="#FF6B5F" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M351 286h294" stroke="#233B5D" stroke-width="11" stroke-linecap="round"/>
      </g>
      <g filter="url(#storyShadow)">
        <path d="M707 314h76v43c0 23-18 41-41 41h-1c-23 0-41-18-41-41v-36c0-4 3-7 7-7Z" fill="#FFF9EE"/>
        <path d="M783 330c34 2 35 44 0 45" stroke="#4B3528" stroke-width="6" fill="none" stroke-linecap="round"/>
      </g>
      <g filter="url(#storyShadow)"><path d="M139 224c-22-51 12-91 55-65 41 24 27 76-55 65Z" fill="#FFD84D" opacity=".82"/><path d="M145 221c24-17 43-38 52-64" stroke="#4B3528" stroke-width="4" fill="none" stroke-linecap="round" opacity=".35"/></g>
      ${cat(228, 329, .84, '#4B3528')}${cat(798, 311, .78, '#233B5D', 'curl')}
      ${labels.map((text, index) => label(text, [379, 166, 690, 560][index], [84, 255, 263, 48][index], [210, 172, 150, 222][index])).join('')}
    </svg>
  `;
}

function builder(labels) {
  return `
    <svg viewBox="0 0 980 470" role="img" aria-label="Focused creative studio with design boards, UI cards, sketches, plants, books, coffee, and cat" class="scene-svg scene-builder">
      <defs><filter id="studioShadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#4B3528" flood-opacity=".16"/></filter></defs>
      <rect width="980" height="470" fill="#FFF3E2" opacity=".48"/>
      <path class="soft-blob" d="M115 272c32-76 111-104 197-79 86 25 122-51 206-30 86 22 83 111 164 131 64 16 105-15 169-31 35 54 29 108-17 154H128c-39-38-43-86-13-145Z" fill="#B9EBCB" opacity=".62"/>
      <g filter="url(#studioShadow)">
        <rect x="144" y="112" width="132" height="134" rx="24" fill="#FFF9EE" transform="rotate(-7 210 179)"/>
        <path d="M174 151c40-13 71-10 96 8M174 188c32-5 59 0 82 13" stroke="#233B5D" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>
        <rect x="666" y="96" width="122" height="151" rx="26" fill="#FFD84D" transform="rotate(7 727 171)"/>
        <path d="M695 141h55M694 172h71M695 204h39" stroke="#4B3528" stroke-width="5" stroke-linecap="round" opacity=".45"/>
      </g>
      <g filter="url(#studioShadow)">
        <rect x="336" y="126" width="272" height="177" rx="30" fill="#233B5D"/>
        <rect x="361" y="151" width="222" height="121" rx="20" fill="#69C7FF" opacity=".88"/>
        <rect x="389" y="177" width="76" height="64" rx="15" fill="#FFF9EE"/><path d="M486 181h58M486 207h72M486 233h42" stroke="#FFD84D" stroke-width="10" stroke-linecap="round"/>
        <path d="M332 304h285" stroke="#4B3528" stroke-width="13" stroke-linecap="round"/>
      </g>
      <g filter="url(#studioShadow)">
        <path d="M738 335c-30-79 32-116 64-50 12-86 91-72 72 50Z" fill="#7BC96F"/>
        <rect x="737" y="333" width="111" height="64" rx="20" fill="#FFB184"/>
        <rect x="245" y="327" width="132" height="34" rx="10" fill="#B6A4FF" transform="rotate(-5 311 344)"/>
        <rect x="258" y="296" width="132" height="34" rx="10" fill="#FF8FC7" transform="rotate(-5 324 313)"/>
        <rect x="270" y="265" width="132" height="34" rx="10" fill="#69C7FF" transform="rotate(-5 336 282)"/>
      </g>
      ${cat(126, 325, .9, '#4B3528', 'curl')}
      <g filter="url(#studioShadow)"><path d="M643 327h72v41c0 22-17 39-39 39s-39-17-39-39v-35c0-3 3-6 6-6Z" fill="#FFF9EE"/><path d="M715 342c31 2 31 40 0 41" stroke="#4B3528" stroke-width="6" fill="none" stroke-linecap="round"/></g>
      ${labels.map((text, index) => label(text, [331, 532, 369, 91, 642, 584][index], [68, 292, 315, 262, 48, 210][index], [174, 204, 172, 222, 178, 214][index])).join('')}
    </svg>
  `;
}

function sceneSvg(scene) {
  return { observer, scribbler, story, builder }[scene.id](scene.labels);
}

function sceneDots(activeIndex) {
  return scenes.map((scene, index) => `
    <button class="scene-dot${index === activeIndex ? ' is-active' : ''}" type="button" data-scene-index="${index}" aria-label="Show scene ${index + 1}: ${scene.heading}" aria-current="${index === activeIndex ? 'true' : 'false'}"></button>
  `).join('');
}

export function createHeroCarousel(root) {
  let activeIndex = 0;
  let sceneContext;
  let decorContext;

  const animateScene = () => {
    sceneContext?.revert();
    const stage = root.querySelector('.scene-stage');
    sceneContext = gsap.context(() => {
      gsap.fromTo('.scene-copy, .scene-svg', { autoAlpha: 0, y: 18, scale: 0.985 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.62, ease: 'power2.out', stagger: 0.08 });
      gsap.fromTo('.scene-label', { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: 'back.out(1.6)', stagger: 0.04, delay: 0.16 });
    }, stage);
  };

  const animateDecor = () => {
    decorContext?.revert();
    decorContext = gsap.context(() => {
      gsap.to('.floaty', { y: -12, rotation: 3, duration: 2.8, yoyo: true, repeat: -1, ease: 'sine.inOut', stagger: 0.25 });
    }, root);
  };

  const render = () => {
    const activeScene = scenes[activeIndex];
    const previousScene = scenes[(activeIndex - 1 + scenes.length) % scenes.length];
    const nextScene = scenes[(activeIndex + 1) % scenes.length];

    root.innerHTML = `
      <section class="hero-shell" aria-label="Little Things, Big Feelings illustrated portfolio hero">
        <div class="hero-yellow"></div>
        <div class="hero-cream"></div>
        <div class="hero-envelope" aria-hidden="true"></div>
        <nav class="hero-nav" aria-label="Portfolio navigation">
          <a class="brand-mark" href="#top">Little Things, Big Feelings</a>
          <div class="nav-links">${navItems.map((item) => `<a href="#${item.toLowerCase()}">${item}</a>`).join('')}</div>
        </nav>
        <div class="scene-stage">
          <div class="scene-copy">
            <p>${activeScene.eyebrow}</p>
            <h2>${activeScene.heading}</h2>
            <span>${activeScene.subtext}</span>
          </div>
          <div class="illustration-card">${sceneSvg(activeScene)}</div>
        </div>
        <div class="hero-controls" aria-label="Hero carousel controls">
          <button class="arrow-button" type="button" data-direction="previous" aria-label="Show previous scene: ${previousScene.heading}">←</button>
          <div class="card-stack">
            <article class="hero-card">
              <p>ASSOCIATE PRODUCT DESIGNER</p>
              <h1>Building healthcare AI at Innovaccer — designing intelligent systems that empower care teams and improve patient outcomes.</h1>
            </article>
            <div class="scene-dots" aria-label="Scene selector">${sceneDots(activeIndex)}</div>
          </div>
          <button class="arrow-button" type="button" data-direction="next" aria-label="Show next scene: ${nextScene.heading}">→</button>
        </div>
        <div class="lower-decor" aria-hidden="true">
          <span class="floaty decor-object decor-cloud"></span>
          <span class="floaty decor-object decor-pencil"></span>
          <span class="floaty decor-object decor-book"></span>
          <span class="floaty decor-object decor-cup"></span>
          <span class="floaty decor-object decor-ui"></span>
          <span class="floaty decor-object decor-cat"></span>
          <span class="floaty decor-object decor-flower-field"></span>
        </div>
      </section>
    `;

    root.querySelector('[data-direction="previous"]').addEventListener('click', () => changeScene(-1));
    root.querySelector('[data-direction="next"]').addEventListener('click', () => changeScene(1));
    root.querySelectorAll('[data-scene-index]').forEach((dot) => {
      dot.addEventListener('click', () => {
        activeIndex = Number(dot.dataset.sceneIndex);
        render();
      });
    });
    animateScene();
    animateDecor();
  };

  const changeScene = (direction) => {
    activeIndex = (activeIndex + direction + scenes.length) % scenes.length;
    render();
  };

  render();
}

