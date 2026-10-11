# Art Exhibition

A scroll-controlled virtual corridor that transitions from white walls to charcoal. Built with a perspective Canvas renderer, with no external dependencies, build step, or paid services.

## Publish on GitHub Pages

1. Open the repository’s **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose **main** and **/ (root)**, then **Save**.
4. Wait for GitHub’s deployment to finish. The expected address is https://gwazyjustcause.github.io/Art-Exhibition/ . This address only becomes available after Pages is enabled and deployment succeeds.

## Add your art

Upload images into an `artworks` folder. In `index.html`, edit the `artworks` array near the top of the script. Replace a sample title and set `image` to its relative path, for example `image:'artworks/painting.jpg'`. The current eight works are generated abstract placeholders, clearly labelled throughout the prototype. Artwork description text and the end-of-exhibition text should also be replaced before presenting the final collection.

## Controls

- Scroll or swipe to travel forward and backward.
- Select a painting to open its detail view.
- Use All artworks for a keyboard-accessible overview.
- Escape or the close button returns to the corridor.
- Walk again returns to the entrance.

## Validation

JavaScript syntax checked with Node.js. No browser visual verification was performed in the authoring environment. Check desktop and mobile presentation after enabling Pages. The renderer provides perspective walls and artworks using Canvas; it does not use Three.js or physically simulated lighting.
