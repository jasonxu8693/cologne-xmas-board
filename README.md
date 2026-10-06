# Cologne Christmas Markets · Crew Board

Group planning board for the Cologne Christmas markets trip, Fri 4 to Sun 6 Dec 2026 (Thu 3 Dec early-arrival option).

- `index.html` is the whole board (self-contained HTML, CSS and JS)
- `images/` holds the photos (Wikimedia Commons, credits inside the board under Cologne Pack → Photo credits)
- `.nojekyll` tells GitHub Pages to serve the static file as is

## Live sync

Votes, Crew Desk options, itinerary edits and crew flights sync through the shared Supabase `trip-boards` project, table `board_state`, row `board_key = cologne-xmas-dec2026-v1`. Plain fetch, no library.

It stores the whole board as one JSON row. Saves are debounced upserts and the board polls every 10 s. If two people save at exactly the same moment, the later save can win. Fine for a seven person trip.

Packing ticks and "who am I" stay on each person's device only.

## Hosting

GitHub Pages: Settings → Pages → Deploy from branch → `main` / root.
