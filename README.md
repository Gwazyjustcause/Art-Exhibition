# Art Exhibition

A Three.js virtual gallery showing 18 original paintings in three grouped wall arrangements. Scroll to travel through a white-to-charcoal corridor. The camera turns fully toward each set and holds a centred view. Select any painting for its explanation.

## Materials and lighting

Paintings are 23 × 15 cm on 3 mm MDF. Panels have actual 3 mm geometry, exposed MDF edges and a small mounting gap. Warm spotlights cast shadows on textured plaster walls. The corridor includes a textured stone floor, floor joints, skirting and ceiling lighting tracks.

## Files

- `index.html`: layout and typography.
- `gallery.js`: artwork data, 3D scene, navigation, raycast interaction and detail views.
- `assets/1- November19/`: original paintings, set references and artist explanations.

Three.js 0.180.0 loads from the pinned jsDelivr URL in `gallery.js`. No build step is required. The gallery needs WebGL and an internet connection to load that dependency.

## GitHub Pages

Publish from `main`, `/ (root)` in Settings → Pages. Website: https://gwazyjustcause.github.io/Art-Exhibition/

## Adding paintings

Edit the artwork array in `gallery.js`. Each work has title, set, group, image path, artist explanation, wall side, position, width and height (in metres). Keep the set layout and camera stops aligned when adding groups. Different dimensions can be specified per painting.

## Controls

Scroll or swipe to move; select a painting for details; All artworks opens the accessible collection overview; Escape closes the detail view. Reduced-motion preference disables camera easing. Keyboard scrolling also works.
