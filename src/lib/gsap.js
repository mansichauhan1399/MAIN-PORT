const easings = {
  'power2.out': 'cubic-bezier(0.16, 1, 0.3, 1)',
  'sine.inOut': 'ease-in-out',
  'back.out(1.6)': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
};

const toArray = (targets, scope = document) => {
  if (typeof targets === 'string') return [...scope.querySelectorAll(targets)];
  if (targets instanceof Element) return [targets];
  return [...targets];
};

const normalize = (vars) => {
  const styles = {};
  if ('autoAlpha' in vars) {
    styles.opacity = vars.autoAlpha;
    styles.visibility = vars.autoAlpha === 0 ? 'hidden' : 'visible';
  }
  const transforms = [];
  if ('x' in vars) transforms.push(`translateX(${vars.x}px)`);
  if ('y' in vars) transforms.push(`translateY(${vars.y}px)`);
  if ('rotation' in vars) transforms.push(`rotate(${vars.rotation}deg)`);
  if ('scale' in vars) transforms.push(`scale(${vars.scale})`);
  if (transforms.length) styles.transform = transforms.join(' ');
  return styles;
};

export const gsap = {
  context(callback, scopeElement = document) {
    const animations = [];
    const contextApi = { selector: (query) => toArray(query, scopeElement) };
    const previous = gsap._scope;
    const previousAnimations = gsap._animations;
    gsap._scope = scopeElement;
    gsap._animations = animations;
    callback(contextApi);
    gsap._scope = previous;
    gsap._animations = previousAnimations;
    return { revert: () => animations.forEach((animation) => animation.cancel()) };
  },
  fromTo(targets, fromVars, toVars) {
    const elements = toArray(targets, gsap._scope || document);
    const animations = elements.map((element, index) => {
      Object.assign(element.style, normalize(fromVars));
      const delay = (toVars.delay || 0) + (toVars.stagger || 0) * index;
      const keyframes = [normalize(fromVars), normalize(toVars)];
      const animation = element.animate(keyframes, {
        duration: (toVars.duration || 0.5) * 1000,
        delay: delay * 1000,
        easing: easings[toVars.ease] || 'ease',
        fill: 'forwards',
      });
      gsap._animations?.push(animation);
      return animation;
    });
    return animations;
  },
  to(targets, vars) {
    const elements = toArray(targets, gsap._scope || document);
    const animations = elements.map((element, index) => {
      const keyframes = [normalize({}), normalize(vars)];
      const animation = element.animate(keyframes, {
        duration: (vars.duration || 0.5) * 1000,
        delay: ((vars.delay || 0) + (vars.stagger || 0) * index) * 1000,
        easing: easings[vars.ease] || 'ease',
        direction: vars.yoyo ? 'alternate' : 'normal',
        iterations: vars.repeat === -1 ? Infinity : (vars.repeat || 0) + 1,
        fill: 'both',
      });
      gsap._animations?.push(animation);
      return animation;
    });
    return animations;
  },
};
