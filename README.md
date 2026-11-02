# Earth in Crisis — SDG 13 Climate Action

An interactive 3D Earth for an SDG 13 (Climate Action) group presentation. The planet rotates in real time with NASA imagery, a warming map, wildfires and cyclones. Zoom close to a country and a panel shows how climate change is hitting it. A built-in presentation mode follows the course's six-part student guidelines.

## How to open

Double-click `index.html`. It works in Chrome, Edge, Safari and Firefox with no server, no install and no internet. Internet only adds the nicer web fonts.

To serve it locally instead:

```bash
python3 -m http.server 8613
```

Then open http://localhost:8613.

## Presentation chapters (buttons at the top)

| Key | Chapter |
|---|---|
| `1` | Global Progress Snapshot — "Are we on track globally?" |
| `2` | Uzbekistan's Context — plans, reforms, achievements and gaps |
| `3` | Best Practices — Morocco, Kraków (Poland), Kazakhstan |
| `4` | Adaptation to Uzbekistan — relevance, barriers, enablers |
| `5` | SMART Recommendations — youth-focused |
| `6` | Quiz & live poll — the engaging element |
| `←` / `→` | Step through slides and chapters |
| `0` / `Esc` | Close the chapter and explore freely |

## Exploring the globe

| Key | Action |
|---|---|
| `Space` | Start / pause the guided tour (country to country, Uzbekistan first) |
| `←` / `→` | Previous / next country |
| Scroll / pinch | Zoom. Get close to a glowing marker and its climate panel opens |
| Click a marker | Fly to that country |
| `H` | Warming map on/off |
| `W` / `S` / `C` | Wildfires / cyclones / clouds |
| `L` | Labels and borders |
| `N` | Real-time day and night |
| `R` | Back to the whole planet |
| `F` | Fullscreen |

## Project structure

```
index.html            page layout
css/style.css         all styling
js/data.js            country climate facts (43 hotspots) — edit to add or change countries
js/presentation.js    the six presentation chapters, best practices, SMART recommendations, quiz
js/app.js             interface: country panel, vital signs, warming stripes, tour, controls
js/globe.js           3D Earth renderer (three.js): shaders, markers, borders, camera
js/records.js         NASA GISTEMP temperatures and NOAA CO₂ (real data)
js/textures.js        Earth images embedded as data URIs (so it works from file://)
js/world.js           country borders (Natural Earth via world-atlas)
lib/                  three.js r149 and topojson-client
```

## Data and credits

- Earth imagery: NASA Blue Marble and Black Marble, via the three.js and three-globe examples
- Temperature stripes: NASA GISS GISTEMP v4, 1880–2025
- CO₂: NOAA Global Monitoring Laboratory, Mauna Loa annual mean
- Country borders: Natural Earth 1:50m, via world-atlas
- Every country fact and presentation figure lists its source on screen
- The warming map and the fire and cyclone positions are illustrative patterns based on NASA GISTEMP and NASA FIRMS, not a live feed
- Libraries: [three.js](https://threejs.org) (MIT), [topojson-client](https://github.com/topojson/topojson-client) (ISC)
