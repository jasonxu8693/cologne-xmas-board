/* Generated static snapshot worker. Shared API traffic is never cached. */
const CONFIG = {"generator_version": 1, "app_id": "cologne-xmas-dec2026", "version": "a8ba2d63adededc3", "base_path": "/cologne-xmas-board/", "entry": "index.html", "cache_prefix": "trip-cologne-xmas-dec2026-458953516b49-", "assets": [{"path": "icons/app-180.png", "sha256": "ac8ef876676e95b5cfed881a7f1bf638689b8b4ef56353f44ef554b6b25aea5c"}, {"path": "icons/app-192.png", "sha256": "2f289eb05dade8dc0148fc533c2f9055600d0d4943f67a827e8fd15bd7412fb3"}, {"path": "icons/app-512.png", "sha256": "6120a245fc047931ade653daea28e36d0a912e75c9de0358f81eea1bcb4249f0"}, {"path": "images/aachen.jpg", "sha256": "1e3b0880d6bb17b8f469e440a46bd3cc6ac3d7ee0e688248632bc819dd056c8e"}, {"path": "images/airport.jpg", "sha256": "30400d91197faa106ea3a37dde3773dfea566bb99db264afc11da69ff5e72008"}, {"path": "images/brauhaus.jpg", "sha256": "bfab0ab6b8423bff050ddf32c058f425c23e06719dbe6a36e3d4d05b0776c695"}, {"path": "images/dom-inside.jpg", "sha256": "077c539f511371f92e49d2e5932005c70807a55e817a9eda2ca28751b93fdbb8"}, {"path": "images/dom-market.jpg", "sha256": "ebd2e04f2ce30760fdbbdde3721bc5f31dadd6129f10e2942283ddb54c5c7166"}, {"path": "images/duesseldorf.jpg", "sha256": "0c11270e916ef49dc0d1ec32e1ddc5e1831e45ed21a4e01bd0b87acffea06329"}, {"path": "images/eisbahn.jpg", "sha256": "6a293a4d006144441673517763fbc802aa94c844b175106cadab5ca2b9a14f88"}, {"path": "images/engel.jpg", "sha256": "4de9158446d42fb40d162eff7b906c8cd8757dfc452870a09de8a8f87246b198"}, {"path": "images/hafen.jpg", "sha256": "cca970eb8a34aef2b88df87e4c686b0785d4386e1e174f99a9007c2f9046fa3f"}, {"path": "images/hbf.jpg", "sha256": "a1e7165399ef0055b25d13930f428482a496cdeb95b11e6f6e5e45ad39a485ec"}, {"path": "images/heinzels.jpg", "sha256": "65878f41b4fc84fde2425b636b3a43a1da2f1e83c6f8ef557f4cd821015b0484"}, {"path": "images/hohenzollern.jpg", "sha256": "d4432408767bdb90fc1db5d9463b755a328328e298e4a3a75bf9b1b750efa724"}, {"path": "images/ludwig.jpg", "sha256": "4c43938c1807f6ebce9a01b05562e09a782e8bbb6f4de3b9f69f18c394ed1b65"}, {"path": "images/market-food.jpg", "sha256": "48da4e587dfad201eca27beb64d23d5b133168b66b0ac6c7e55af5894d1a04d4"}, {"path": "images/rudolfplatz.jpg", "sha256": "732e4e7d5b7e0351d303efe8717f93e98df39b6602828d9c887bd14c46f3fb78"}, {"path": "images/schildergasse.jpg", "sha256": "edf2f264497b49f91a7873a6a48b62bcc79214ffe6aa816ae0d3d1693a71e73e"}, {"path": "images/schoko.jpg", "sha256": "1ea41d10319d5634ac5a2a667a6405b4ab131d7c610455b6f526e1d4e1b78b2e"}, {"path": "images/stadtgarten.jpg", "sha256": "efce0ebb8b0378ab747febfab9654379575e75eafb4f79a625667a6b860e6656"}, {"path": "images/therme.jpg", "sha256": "34df56a86fce3c16b334404f7911d72bb8f5313e6407d99b257ded21161ede17"}, {"path": "index.html", "sha256": "bec9f441e3841fb277c01664346eec48b70465705bdf6d75644cd4c885aa05ab"}, {"path": "manifest.webmanifest", "sha256": "99147828354ce2d2ee46d770aef2286732564d8fd919fc1fe473e64646687ecc"}, {"path": "pwa-register.js", "sha256": "7e6010e1a72c6536d6c660556803265eeb2580b1f31740e6866020e5835da19c"}], "offline_label": "Saved copy of the plan and Cologne Pack. Votes, notes and group changes need a connection.", "update_policy": "wait-for-old-clients-to-close"};
const SCOPE = self.registration.scope;
const PREFIX = CONFIG.cache_prefix;
const CACHE = PREFIX + CONFIG.version;
const ASSETS = new Map(CONFIG.assets.map(a => [new URL(a.path, SCOPE).href, a.sha256]));
const ENTRY = new URL(CONFIG.entry, SCOPE).href;
async function checkedFetch(url, expected) {
  const response = await fetch(url, {cache: 'no-store', credentials: 'omit', redirect: 'error'});
  if (!response.ok) throw new Error('Static asset unavailable: ' + url);
  const bytes = await response.clone().arrayBuffer();
  const sum = await crypto.subtle.digest('SHA-256', bytes);
  const hash = Array.from(new Uint8Array(sum), b => b.toString(16).padStart(2, '0')).join('');
  if (hash !== expected) throw new Error('Incomplete deployment: ' + url);
  return response;
}
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    if (new URL(SCOPE).pathname !== CONFIG.base_path) throw new Error('Deployment scope differs from config');
    const responses = await Promise.all([...ASSETS].map(async ([url, hash]) => [url, await checkedFetch(url, hash)]));
    const cache = await caches.open(CACHE);
    await Promise.all(responses.map(([url, response]) => cache.put(url, response)));
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith(PREFIX) && key !== CACHE).map(key => caches.delete(key))
  )));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  const scope = new URL(SCOPE);
  if (request.method !== 'GET' || url.origin !== scope.origin || request.headers.has('authorization')) return;
  let key = url.href;
  if (request.mode === 'navigate' && (url.pathname === new URL(ENTRY).pathname || url.pathname === scope.pathname)) key = ENTRY;
  else if (url.search || url.hash) return;
  if (!ASSETS.has(key)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(key);
    if (hit) return hit;
    try {
      const response = await checkedFetch(key, ASSETS.get(key));
      await cache.put(key, response.clone());
      return response;
    } catch (_) {
      return new Response('This saved version is unavailable. Reconnect and reopen the trip.', {
        status: 503, headers: {'Content-Type': 'text/plain; charset=utf-8'}
      });
    }
  })());
});
