import { gsap } from '../lib/gsap.js';

const scenes = [
  {
    id: 'observer', eyebrow: 'Scene 01 — The Observer', heading: 'Professional cloud decoder',
    subtext: 'I notice little things, find patterns everywhere, and occasionally turn a quiet moment into an idea.',
    labels: ['wireframe but fluffy', 'cat-shaped, obviously', 'this cloud has feedback', 'user flow, but make it sky', 'currently touching grass'],
  },
  {
    id: 'scribbler', eyebrow: 'Scene 02 — The Scribbler', heading: 'My desk: where chaos becomes clickable',
    subtext: 'Most of my ideas begin with scribbles, side notes, and a cup of coffee that got cold during a thought.',
    labels: ['Coffee First, Wireframe Later', 'A Brief History of final_final_v2', 'make button less ugly', 'ask: does user care?', 'why is this 2px off?', 'loading ideas…'],
  },
  {
    id: 'story', eyebrow: 'Scene 03 — The Soft Story Lover', heading: 'K-dramas count as empathy research',
    subtext: 'I love stories because they teach timing, feeling, and why the smallest moments often matter most.',
    labels: ['episode 14: still no confession', 'cozy mode: enabled', 'plot twist juice', 'The Fine Art of Caring Too Much'],
  },
  {
    id: 'builder', eyebrow: 'Scene 04 — The Builder', heading: 'Cute ideas. Serious follow-through.',
    subtext: 'I turn observations, emotion, and messy beginnings into thoughtful product experiences.',
    labels: ['final final real final', 'ship it, after overthinking', 'less chaos, more clarity', 'Ideas Are Cute. Execution Pays Rent.', 'Hard Work, Soft Corners', 'Every Pixel Has a Backstory'],
  },
];

const navItems = ['Work', 'Play', 'About', 'Contact'];
const label = (text, x, y) => `<foreignObject x="${x}" y="${y}" width="190" height="54" class="scene-label-wrap"><div class="scene-label">${text}</div></foreignObject>`;
const cat = (x, y, scale = 1, color = '#4B3528') => `<g transform="translate(${x} ${y}) scale(${scale})" class="cat-doodle"><path d="M9 22 13 9l7 7 8-7 5 13c3 8-1 17-12 17S6 30 9 22Z" fill="${color}"/><circle cx="17" cy="24" r="1.5" fill="#FFF3E2"/><circle cx="26" cy="24" r="1.5" fill="#FFF3E2"/><path d="M20 29c2 2 5 2 7 0" fill="none" stroke="#FFF3E2" stroke-linecap="round" stroke-width="2"/><path d="M32 31c8 2 12-3 9-8" fill="none" stroke="${color}" stroke-linecap="round" stroke-width="5"/></g>`;

function observer(labels) {
  return `<svg viewBox="0 0 920 430" role="img" aria-label="Designer cloud watching in a meadow with cats" class="scene-svg"><rect width="920" height="430" rx="36" fill="#69C7FF" opacity="0.38"/><circle cx="800" cy="78" r="40" fill="#FFB184"/><path d="M0 292 156 142l92 88 112-130 150 170 104-100 206 122v138H0Z" fill="#B6A4FF" opacity=".82"/><path d="M0 318c90-38 166-32 257 4 130 52 235 20 336-14 121-40 225-22 327 18v104H0Z" fill="#7BC96F"/><path d="M430 300c45 3 90 3 133 0 9 19 4 38-25 47l-168-4c6-28 24-45 60-43Z" fill="#FF8FC7"/><circle cx="460" cy="285" r="22" fill="#4B3528"/><path d="M482 298c31 15 54 17 80 3" stroke="#4B3528" stroke-width="17" stroke-linecap="round" fill="none"/><path d="M381 342c45 10 112 10 163 2" stroke="#233B5D" stroke-width="6" stroke-linecap="round"/>${cat(257, 298, 1.15)}${cat(606, 302, .95, '#233B5D')}<g class="cloud-group"><path d="M123 74c12-32 63-30 73 2 31-6 55 9 55 32 0 28-27 38-59 38h-78c-35 0-56-13-56-36 0-22 25-39 65-36Z" fill="#FFF3E2"/><path d="M507 73c16-43 81-38 91 3 36-7 67 12 67 40 0 34-35 46-74 46h-94c-42 0-69-16-69-44 0-27 31-48 79-45Z" fill="#FFF3E2"/></g>${labels.map((t, i) => label(t, [74, 463, 585, 261, 662][i], [34, 29, 126, 176, 279][i])).join('')}<path d="M176 360c12-20 34-20 45 0" stroke="#FFF3E2" stroke-width="5" stroke-linecap="round" fill="none"/></svg>`;
}

function scribbler(labels) {
  return `<svg viewBox="0 0 920 430" role="img" aria-label="Cozy product design desk with notebook and coffee" class="scene-svg"><rect width="920" height="430" rx="36" fill="#B9EBCB"/><path d="M78 312h764v74c0 26-21 46-47 46H125c-26 0-47-20-47-46Z" fill="#FFB184"/><rect x="292" y="118" width="250" height="178" rx="18" fill="#FFF3E2" stroke="#4B3528" stroke-width="5"/><path d="M324 159h166M324 198h126M324 238h143" stroke="#233B5D" stroke-width="8" stroke-linecap="round"/><rect x="586" y="142" width="104" height="76" rx="12" fill="#FFD84D" transform="rotate(6 638 180)"/><rect x="185" y="155" width="82" height="96" rx="10" fill="#B6A4FF" transform="rotate(-10 226 203)"/><path d="M702 281h82v43c0 22-18 39-39 39h-4c-22 0-39-18-39-39Z" fill="#FFF3E2" stroke="#4B3528" stroke-width="5"/><path d="M785 298c36 0 36 43 0 43" stroke="#4B3528" stroke-width="5" fill="none"/><path d="M714 271c-12-12 13-23 1-37M744 267c-12-12 13-23 1-37" stroke="#FF6B5F" stroke-width="4" stroke-linecap="round"/>${cat(118,269,1.25)}<rect x="571" y="264" width="83" height="118" rx="10" fill="#69C7FF" transform="rotate(72 612 323)"/>${labels.map((t, i) => label(t, [296,130,583,580,338,689][i], [69,87,95,218,305,308][i])).join('')}</svg>`;
}

function story(labels) {
  return `<svg viewBox="0 0 920 430" role="img" aria-label="Cozy evening room watching stories with cats" class="scene-svg"><rect width="920" height="430" rx="36" fill="#B6A4FF"/><circle cx="118" cy="84" r="42" fill="#FFD84D"/><rect x="122" y="236" width="560" height="118" rx="35" fill="#FF8FC7"/><path d="M169 244c88-62 244-47 339 8 54 31 105 42 174 13v76H169Z" fill="#FFF3E2"/><rect x="357" y="118" width="213" height="132" rx="14" fill="#233B5D"/><rect x="374" y="135" width="179" height="91" rx="9" fill="#69C7FF"/><circle cx="443" cy="180" r="22" fill="#FFB184"/><circle cx="488" cy="180" r="22" fill="#FFB184"/><path d="M430 209c37 14 69 13 105-2" stroke="#FF6B5F" stroke-width="5" stroke-linecap="round"/><path d="M682 299h67v34c0 18-15 33-33 33h-1c-18 0-33-15-33-33Z" fill="#FFF3E2" stroke="#4B3528" stroke-width="5"/>${cat(207,285,1.04)}${cat(736,267,1.1,'#233B5D')}<path d="M86 171h164" stroke="#FFF3E2" stroke-width="9" stroke-linecap="round" opacity=".55"/>${labels.map((t, i) => label(t, [339,129,654,524][i], [72,195,244,26][i])).join('')}</svg>`;
}

function builder(labels) {
  return `<svg viewBox="0 0 920 430" role="img" aria-label="Focused product design studio with UI cards and plants" class="scene-svg"><rect width="920" height="430" rx="36" fill="#FFF3E2"/><path d="M72 318h776v112H72Z" fill="#B9EBCB"/><rect x="314" y="108" width="250" height="165" rx="17" fill="#233B5D"/><rect x="334" y="128" width="210" height="116" rx="12" fill="#69C7FF"/><rect x="363" y="151" width="69" height="58" rx="10" fill="#FFF3E2"/><rect x="449" y="151" width="64" height="20" rx="10" fill="#FFD84D"/><rect x="449" y="184" width="73" height="12" rx="6" fill="#FF8FC7"/><rect x="594" y="129" width="95" height="112" rx="13" fill="#FFD84D" transform="rotate(8 642 185)"/><rect x="199" y="169" width="86" height="101" rx="13" fill="#B6A4FF" transform="rotate(-8 242 220)"/><path d="M719 320c-29-68 24-104 49-45 21-79 85-56 49 45Z" fill="#7BC96F"/><rect x="718" y="318" width="103" height="57" rx="15" fill="#FFB184"/>${cat(113,288,1.15)}<path d="M306 319h317" stroke="#4B3528" stroke-width="14" stroke-linecap="round"/>${labels.map((t, i) => label(t, [307,518,353,99,627,584][i], [60,259,278,111,57,200][i])).join('')}</svg>`;
}

function sceneSvg(scene) {
  return { observer, scribbler, story, builder }[scene.id](scene.labels);
}

export function createHeroCarousel(root) {
  let activeIndex = 0;
  let sceneContext;

  const render = () => {
    const activeScene = scenes[activeIndex];
    const previousScene = scenes[(activeIndex - 1 + scenes.length) % scenes.length];
    const nextScene = scenes[(activeIndex + 1) % scenes.length];
    root.innerHTML = `<section class="hero-shell" aria-label="Little Things, Big Feelings illustrated portfolio hero"><div class="hero-yellow"></div><div class="hero-cream"></div><div class="hero-envelope" aria-hidden="true"></div><nav class="hero-nav" aria-label="Portfolio navigation"><a class="brand-mark" href="#top">Little Things, Big Feelings</a><div class="nav-links">${navItems.map((item) => `<a href="#${item.toLowerCase()}">${item}</a>`).join('')}</div></nav><div class="scene-stage"><div class="scene-copy"><p>${activeScene.eyebrow}</p><h2>${activeScene.heading}</h2><span>${activeScene.subtext}</span></div><div class="illustration-card">${sceneSvg(activeScene)}</div></div><div class="hero-controls" aria-label="Hero carousel controls"><button class="arrow-button" type="button" data-direction="previous" aria-label="Show previous scene: ${previousScene.heading}">←</button><article class="hero-card"><p>ASSOCIATE PRODUCT DESIGNER</p><h1>Building healthcare AI at Innovaccer — designing intelligent systems that empower care teams and improve patient outcomes.</h1></article><button class="arrow-button" type="button" data-direction="next" aria-label="Show next scene: ${nextScene.heading}">→</button></div><div class="lower-decor" aria-hidden="true"><span class="floaty decor-star">✦</span><span class="floaty decor-note">ask: does user care?</span><span class="floaty decor-flower">✿</span><span class="floaty decor-chip">soft systems</span><span class="floaty decor-heart">♡</span></div></section>`;

    root.querySelector('[data-direction="previous"]').addEventListener('click', () => changeScene(-1));
    root.querySelector('[data-direction="next"]').addEventListener('click', () => changeScene(1));
    animateScene();
  };

  const animateScene = () => {
    sceneContext?.revert();
    const stage = root.querySelector('.scene-stage');
    sceneContext = gsap.context(() => {
      gsap.fromTo('.scene-copy, .scene-svg', { autoAlpha: 0, y: 18, scale: 0.985 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.62, ease: 'power2.out', stagger: 0.08 });
      gsap.fromTo('.scene-label', { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: 'back.out(1.6)', stagger: 0.04, delay: 0.16 });
    }, stage);
  };

  const changeScene = (direction) => {
    activeIndex = (activeIndex + direction + scenes.length) % scenes.length;
    render();
  };

  render();
  gsap.context(() => {
    gsap.to('.floaty', { y: -12, rotation: 3, duration: 2.8, yoyo: true, repeat: -1, ease: 'sine.inOut', stagger: 0.25 });
  }, root);
}
