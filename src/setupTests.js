if (typeof window !== 'undefined' && !window.IntersectionObserver) {
  window.IntersectionObserver = class {
    observe() {}
    disconnect() {}
    unobserve() {}
  };
}
