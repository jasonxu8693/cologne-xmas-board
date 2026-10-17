/* Optional events: trip-app-ready, trip-app-update, trip-app-error. */
(() => {
  const scriptURL = document.currentScript.src;
  if (!('serviceWorker' in navigator) || !window.isSecureContext) return;
  const announce = (name, detail) => window.dispatchEvent(new CustomEvent(name, {detail}));
  navigator.serviceWorker.register(new URL('sw.js', scriptURL), {
    scope: new URL('./', scriptURL).href, updateViaCache: 'none'
  }).then(reg => {
    const waiting = () => { if (reg.waiting) announce('trip-app-update', {
      action: 'save-close-all-and-reopen', message: 'Save changes, then close all open copies and reopen.'
    }); };
    waiting();
    reg.addEventListener('updatefound', () => {
      const installing = reg.installing;
      if (installing) installing.addEventListener('statechange', () => {
        if (installing.state === 'installed') waiting();
      });
    });
    navigator.serviceWorker.ready.then(() => announce('trip-app-ready', {
      controlled: Boolean(navigator.serviceWorker.controller)
    }));
  }).catch(error => announce('trip-app-error', {message: error.message}));
})();
